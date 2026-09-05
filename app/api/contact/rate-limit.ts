// Rate limiting léger, en mémoire, par adresse IP (fenêtre glissante).
// Remplace la protection anti-bot qu'assurait reCAPTCHA sur le formulaire.
//
// Limite : chaque instance serverless a sa propre mémoire. Le compteur est donc
// local à l'instance et remis à zéro à chaque démarrage à froid. C'est suffisant
// pour absorber les rafales d'un bot, pas pour un quota strict et global.

const WINDOW_MS = 10 * 60 * 1000; // fenêtre de 10 minutes
const MAX_REQUESTS = 5; // 5 envois maximum par IP et par fenêtre
const MAX_ENTRIES = 5000; // garde-fou contre la croissance mémoire

// IP -> horodatages des requêtes retenues dans la fenêtre
const hits = new Map<string, number[]>();

export function getClientIp(req: Request): string {
  // Vercel écrase x-forwarded-for avec l'IP réelle du visiteur et ne relaie pas
  // les IP externes, ce qui empêche l'usurpation. x-vercel-forwarded-for est
  // identique mais survit à un proxy placé devant Vercel (Cloudflare, etc.).
  const forwarded =
    req.headers.get("x-vercel-forwarded-for") ?? req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfter: number; // secondes avant le prochain envoi autorisé
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  // Purge des IP dont toutes les requêtes sont sorties de la fenêtre
  if (hits.size > MAX_ENTRIES) {
    for (const [key, stamps] of hits) {
      if (stamps.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    // recent[0] est la plus ancienne requête retenue : c'est elle qui libère un créneau
    return { allowed: false, retryAfter: Math.ceil((WINDOW_MS - (now - recent[0])) / 1000) };
  }

  recent.push(now);
  hits.set(ip, recent);
  return { allowed: true, retryAfter: 0 };
}

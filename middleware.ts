import { NextRequest, NextResponse } from "next/server";

/* Visiteur venant d'Algérie sur / → version darija (/dz).
   Pays fourni par Vercel (x-vercel-ip-country), absent en local : aucune redirection.
   Le cookie `lang` (posé quand on choisit une langue dans le menu) a toujours le
   dernier mot : un visiteur algérien qui choisit FR n'est plus redirigé.
   Redirection temporaire (307) : Google, qui crawle depuis les USA, garde / en FR. */
export function middleware(req: NextRequest) {
  if (req.cookies.has("lang")) return;
  if (req.headers.get("x-vercel-ip-country") === "DZ") {
    return NextResponse.redirect(new URL("/dz", req.url), 307);
  }
}

export const config = { matcher: "/" };

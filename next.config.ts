import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 31 jours de cache pour les images optimisées (60 s par défaut)
    minimumCacheTTL: 2678400,
  },
  experimental: {
    // CSS (~6 Ko gzip) inliné dans le HTML : plus de requête bloquante avant le premier rendu
    inlineCss: true,
  },
  async headers() {
    return [
      // les polices ne changent jamais de contenu sous le même nom
      { source: "/fonts/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      // images non hashées : 1 semaine, pour qu'un remplacement finisse par passer
      { source: "/img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }] },
    ];
  },
};

export default nextConfig;

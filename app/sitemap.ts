import type { MetadataRoute } from "next";
import { LANGS, LANG_META, SITE } from "@/lib/i18n";

// une entrée par langue, chacune listant ses alternates hreflang (comme dans pageMetadata)
const url = (href: string) => SITE + href;
const languages = Object.fromEntries(LANGS.map((l) => [LANG_META[l].htmlLang, url(LANG_META[l].href)]));

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((l) => ({
    url: url(LANG_META[l].href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === "fr" ? 1 : 0.8,
    alternates: { languages },
  }));
}

import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://phoenix-fenny.vercel.app";

const paths = ["", "/services", "/contact", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      const url = path ? `/${locale}${path}` : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${url}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}

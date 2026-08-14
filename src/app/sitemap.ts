import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://oscarsilva.com.br",
      lastModified: new Date(2026, 7, 14),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

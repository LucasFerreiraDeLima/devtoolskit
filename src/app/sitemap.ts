import { MetadataRoute } from "next";

const BASE_URL = "https://devtoolskit.net";

const tools = [
  "word-counter",
  "case-converter",
  "base64",
  "timestamp-converter",
  "uuid-generator",
  "json-formatter",
  "json-to-csv",
  "json-to-xml",
  "regex-tester",
  "jwt-decoder",
  "url-encoder",
  "html-encoder",
  "hash-generator",
  "text-sorter",
  "remove-duplicate-lines",
  "text-diff",
  "password-generator",
  "random-number",
  "random-string",
  "color-converter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Homepage
  const pages = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    // Tool pages
    ...tools.map((tool) => ({
      url: `${BASE_URL}/tools/${tool}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  return pages;
}

import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/blog/` },
    ...getPosts().map((p) => ({ url: `${SITE_URL}/blog/${p.slug}/`, lastModified: p.date })),
  ];
}

import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_INDEXABLE } from "@/utils/seo";
import { imageTools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];
  const paths = [
    "/",
    "/about",
    "/guide",
    ...imageTools.flatMap((tool) => (tool.href ? [tool.href] : [])),
  ];
  return [...new Set(paths)].map((path) => ({ url: absoluteUrl(path)! }));
}

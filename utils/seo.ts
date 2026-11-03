import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@/utils/env";

function readSiteUrl() {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "SITE_URL must be an http(s) origin without a path, credentials, query or fragment.",
    );
  }
  return url.origin;
}

export const SITE_URL = readSiteUrl();
export const SITE_INDEXABLE =
  Boolean(SITE_URL) && process.env.NODE_ENV === "production";

export function absoluteUrl(path: string) {
  return SITE_URL ? new URL(path, SITE_URL).toString() : undefined;
}

export function pageMetadata({
  title,
  description = APP_DESCRIPTION,
  path,
  privatePage = false,
}: {
  title: string;
  description?: string;
  path: string;
  privatePage?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/social-image");
  return {
    title: { absolute: title + " | " + APP_NAME },
    description,
    alternates: url ? { canonical: url } : undefined,
    robots: {
      index: SITE_INDEXABLE && !privatePage,
      follow: !privatePage,
      ...(privatePage ? { noimageindex: true } : {}),
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: APP_NAME,
      title: title + " | " + APP_NAME,
      description,
      ...(url ? { url } : {}),
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: APP_NAME + " online image tools",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title + " | " + APP_NAME,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function websiteSchema() {
  if (!SITE_URL) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: APP_NAME,
    description: APP_DESCRIPTION,
    inLanguage: "en",
  };
}

export function resizePageSchema() {
  if (!SITE_URL) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/resize-image#webpage"),
    url: absoluteUrl("/resize-image"),
    name: "Resize image online | " + APP_NAME,
    description:
      "Resize JPG, PNG, WebP and AVIF images with custom pixel dimensions, a live preview and a separate downloadable result.",
    isPartOf: { "@id": absoluteUrl("/#website") },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resize image",
          item: absoluteUrl("/resize-image"),
        },
      ],
    },
  };
}

export function contentPageSchema({
  path,
  label,
  name,
  description,
  type,
}: {
  path: string;
  label: string;
  name: string;
  description: string;
  type: "AboutPage" | "CollectionPage";
}) {
  if (!SITE_URL) return null;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(path + "#webpage"),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": absoluteUrl("/#website") },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: label,
          item: absoluteUrl(path),
        },
      ],
    },
  };
}

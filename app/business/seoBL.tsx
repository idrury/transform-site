import type { LinkDescriptor, MetaDescriptor } from "react-router";

export const SITE_URL = "https://www.transformcreative.com.au";

/**
 * {{TODO: Isaac to supply public/og-image.jpg at 1200x630}}
 * Until then we fall back to the icon so link previews aren't broken —
 * swap this to "/og-image.jpg" once the real asset lands.
 */
const DEFAULT_OG_IMAGE = "/transform-icon-color-donut.png";

/** Scrapers reject relative og:image / og:url, so everything is absolute. */
function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  /** Shorter description for the Twitter card. Defaults to `description`. */
  twitterDescription?: string;
  /** Private/auth-gated pages: emit robots noindex and skip social tags. */
  noIndex?: boolean;
}

/*******************************************
 * Build the full meta tag set for a route.
 * Prerendering bakes these into the served HTML per path.
 */
export function buildMeta({
  title,
  description,
  path,
  keywords,
  image,
  twitterDescription,
  noIndex,
}: SeoOptions): MetaDescriptor[] {
  if (noIndex) {
    return [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
    ];
  }

  const ogImage = absolute(image ?? DEFAULT_OG_IMAGE);

  return [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absolute(path) },
    // Twitter card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    {
      name: "twitter:description",
      content: twitterDescription ?? description,
    },
    { name: "twitter:image", content: ogImage },
  ];
}

/*******************************************
 * Canonical URL for a route. Pass the path this page should be
 * indexed as — e.g. /home canonicalises to "/" to avoid duplicate content.
 */
export function canonical(path: string): LinkDescriptor {
  return { rel: "canonical", href: absolute(path) };
}

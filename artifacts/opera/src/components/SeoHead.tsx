import { Helmet } from "react-helmet-async";

const BASE_URL = "https://operasurgicalcenter.com";
const OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

export function SeoHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = OG_IMAGE,
  ogType = "website",
}: SeoHeadProps) {
  const canonical = `${BASE_URL}${path}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDesc = ogDescription ?? description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang — same URL serves both languages */}
      <link rel="alternate" hrefLang="es" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_EC" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="Ópera Surgical Center" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

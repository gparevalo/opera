import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: "website" | "article";
  noindex?: boolean;
  includeDefaultSchemas?: boolean;
  extraSchemas?: Array<Record<string, unknown>>;
}

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
  "https://operasurgicalcenter.com";

const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function SEO({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  includeDefaultSchemas = true,
  extraSchemas = [],
}: SEOProps) {
  const { language, t } = useLanguage();
  const baseTitle = t.metadata.base_title_suffix;
  const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const finalDescription = description || t.metadata.default_description;
  const canonicalUrl = toAbsoluteUrl(canonicalPath || "/");
  const currentUrl =
    typeof window !== "undefined"
      ? `${SITE_URL}${window.location.pathname}`
      : canonicalUrl;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

  const defaultSchemas: Array<Record<string, unknown>> = includeDefaultSchemas
    ? [
        {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Ópera Surgical Center",
          description: t.metadata.default_description,
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Quito",
            addressRegion: "Pichincha",
            addressCountry: "EC",
          },
          medicalSpecialty: [
            "SurgicalProcedure",
            "PerioperativeCare",
            "AmbulatorySurgicalCenter",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ópera Surgical Center",
          url: SITE_URL,
          inLanguage: language,
          potentialAction: {
            "@type": "ContactAction",
            target: `${SITE_URL}/contacto`,
          },
        },
      ]
    : [];

  const schemaGraph = [...defaultSchemas, ...extraSchemas];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      <html lang={language} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={toAbsoluteUrl(ogImage)} />
      <meta property="og:site_name" content="Ópera Surgical Center" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={toAbsoluteUrl(ogImage)} />

      {schemaGraph.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

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

const SITE_URL = "https://tosellmore.com";
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
  const baseTitle = `Mariángel Hernández | ${t.metadata.base_title_suffix}`;
  const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const finalDescription = description || t.metadata.default_description;
  const canonicalUrl = toAbsoluteUrl(canonicalPath || "/");
  const currentUrl = canonicalPath ? canonicalUrl : `${SITE_URL}${window.location.pathname}`;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

  const defaultSchemas: Array<Record<string, unknown>> = includeDefaultSchemas
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mariángel Hernández",
          jobTitle: "Fundadora de startups tecnológicas",
          description:
            "Fundadora de startups tecnológicas en Ecuador especializada en innovación empresarial, inteligencia artificial y desarrollo de negocios.",
          url: SITE_URL,
          worksFor: [
            { "@type": "Organization", name: "ToSellMore", url: "https://tosellmore.com" },
            { "@type": "Organization", name: "nexito.ai", url: "https://nexito.ai" },
          ],
          sameAs: [],
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ToSellMore",
          url: "https://tosellmore.com",
          founder: { "@type": "Person", name: "Mariángel Hernández" },
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "nexito.ai",
          url: "https://nexito.ai",
          founder: { "@type": "Person", name: "Mariángel Hernández" },
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mariángel Hernández",
          url: SITE_URL,
          inLanguage: language,
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
      <meta property="og:site_name" content="Mariángel Hernández" />

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

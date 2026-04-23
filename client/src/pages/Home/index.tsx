import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { Link } from "wouter";

export default function Home() {
  return (
    <BaseLayout>
      <SEO
        title="Mariángel Hernández | Fundadora de startups de innovación y tecnología en Ecuador"
        description="CEO de ToSellMore y cofundadora de nexito.ai. Especialista en innovación, inteligencia artificial y crecimiento empresarial en Ecuador y Latinoamérica."
        canonicalPath="/fundadora-startups-innovacion-ecuador"
        extraSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Landing principal de Mariángel Hernández",
            url: "https://tosellmore.com/fundadora-startups-innovacion-ecuador",
            about: [
              "innovación empresarial",
              "inteligencia artificial",
              "crecimiento empresarial",
            ],
          },
        ]}
      />
      <nav aria-label="SEO funnel home links" className="sr-only">
        <Link href="/keynotes">Keynotes de Mariángel Hernández</Link>
        <Link href="/media">Media y apariciones públicas</Link>
      </nav>
    </BaseLayout>
  );
}

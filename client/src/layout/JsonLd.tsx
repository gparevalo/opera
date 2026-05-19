import { Helmet } from "react-helmet-async";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://operasurgicalcenter.com/#organization",
      "name": "Ópera Surgical Center",
      "alternateName": "Opera Surgical Center",
      "description": "Centro quirúrgico privado premium en Quito, Ecuador. Infraestructura quirúrgica moderna, soporte perioperatorio 360° y coordinación dedicada para especialistas médicos.",
      "url": "https://operasurgicalcenter.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://operasurgicalcenter.com/favicon.svg"
      },
      "image": "https://operasurgicalcenter.com/opengraph.jpg",
      "telephone": "+593999999999",
      "email": "coordinacion@operasurgicalcenter.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Quito",
        "addressRegion": "Pichincha",
        "addressCountry": "EC"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Ecuador"
      },
      "medicalSpecialty": [
        "Cirugía plástica",
        "Traumatología",
        "Ortopedia",
        "Ginecología",
        "Urología",
        "Cirugía general"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Renta de quirófanos",
          "description": "Quirófanos premium disponibles para especialistas médicos en Quito."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Coordinación perioperatoria",
          "description": "Soporte 360° desde la evaluación hasta el seguimiento postoperatorio."
        }
      ],
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://operasurgicalcenter.com/#website",
      "url": "https://operasurgicalcenter.com",
      "name": "Ópera Surgical Center",
      "description": "Centro quirúrgico privado premium en Quito, Ecuador para especialistas médicos.",
      "inLanguage": ["es", "en"],
      "publisher": {
        "@id": "https://operasurgicalcenter.com/#organization"
      }
    }
  ]
};

export function JsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

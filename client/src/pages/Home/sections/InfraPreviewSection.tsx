import { CinematicSection } from "@/components/site/CinematicSection";
import { SectionHeader } from "@/components/site/SectionHeader";
import { OperaButtonLink } from "@/components/site/OperaButton";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type InfraKey =
  | "or"
  | "rec"
  | "short"
  | "equip"
  | "areas"
  | "sterile"
  | "reception";

const shots: { key: InfraKey; src: string }[] = [
  { key: "or", src: "/images/opera-hero-cinematic.png" },
  {
    key: "rec",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "short",
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "equip",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "areas",
    src: "https://images.unsplash.com/photo-1516549655169-cf93a6b90f2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "sterile",
    src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "reception",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function InfraPreviewSection() {
  const { t } = useLanguage();
  const labels = t.home.infra.labels;

  return (
    <CinematicSection tone="midnight" id="infraestructura">
      <SectionHeader
        eyebrow={t.nav.infrastructure}
        title={t.home.infra.title}
        subtitle={t.home.infra.subtitle}
        light
        action={
          <OperaButtonLink href="/infraestructura" variant="ghost" className="!inline-flex">
            {t.home.infra.link}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </OperaButtonLink>
        }
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {shots.map((shot, i) => (
          <motion.figure
            key={shot.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
          >
            <div
              className={`opera-image-frame group ${
                i === 0 ? "aspect-[4/3] sm:aspect-auto sm:min-h-[340px]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={shot.src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-12">
                <span className="text-sm font-semibold text-opera-ivory">{labels[shot.key]}</span>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </CinematicSection>
  );
}

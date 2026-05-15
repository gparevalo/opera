import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CinematicSection } from "@/components/site/CinematicSection";
import { PageShell } from "@/components/site/PageShell";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

const slides = [
  "/images/opera-hero-cinematic.png",
  "/images/opera1.png",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=82",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=82",
];

export default function InfraestructuraPage() {
  const { t, language } = useLanguage();
  const title = t.infrastructure_page.title;
  const description =
    language === "es"
      ? "Galería e información de infraestructura quirúrgica moderna en Quito."
      : "Gallery and information on modern surgical infrastructure in Quito.";

  return (
    <PageShell
      title={title}
      description={description}
      canonicalPath="/infraestructura"
      intro={t.infrastructure_page.intro}
    >
      <CinematicSection tone="midnight" innerClassName="!pt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative px-2"
        >
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {slides.map((src, i) => (
                <CarouselItem key={src}>
                  <motion.div
                    className="opera-image-frame aspect-[21/9] min-h-[220px] md:min-h-[400px]"
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </motion.div>
                  <p className="mt-4 text-center text-sm text-opera-warm/60">
                    {t.infrastructure_page.gallery_caption} ({i + 1}/{slides.length})
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-white/15 bg-white/10 text-opera-ivory backdrop-blur-md hover:border-opera-amber/40 md:left-4" />
            <CarouselNext className="right-2 border-white/15 bg-white/10 text-opera-ivory backdrop-blur-md hover:border-opera-amber/40 md:right-4" />
          </Carousel>
        </motion.div>
      </CinematicSection>
    </PageShell>
  );
}

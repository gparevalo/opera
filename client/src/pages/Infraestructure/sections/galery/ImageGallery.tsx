"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { motion } from "motion/react";
import React from "react";

const galleryImages = Array.from({ length: 12 }).map((_, i) => ({
  src: `/clinica/operahero${i + 1}.png`,
  alt: `Ópera Surgical Center ${i + 1}`,
}));

export function ImageGallery() {
  const { t, language } = useLanguage();
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center md:text-center  mb-0 md:mb-10 w-max-3xl "
        style={{ maxWidth: "80%" }}
      >
        <span className="t-eyebrow mb-5 inline-flex">
          {language === "es" ? "Explora Ópera" : "Explora Ópera"}
        </span>
        <h2
          style={{ maxWidth: "70%" }}
          className=" mt-5 mx-auto 
                            font-display
                            text-5xl
                            md:text-7xl
                            leading-[0.95]
                            tracking-tight
                            text-primary"
        >
          {language === "es"
            ? "Cada espacio diseñado para transmitir confianza antes del procedimiento."
            : "Cada espacio diseñado para transmitir confianza antes del procedimiento."}
        </h2>
        <p className="t-lead mt-5 text-xl leading-snug tracking-tight ">
          {language === "es"
            ? "Recorre la infraestructura, detalles y experiencia del centro quirúrgico a través de una galería pensada para reflejar el nivel de atención, precisión y confort que viven médicos y pacientes en cada visita."
            : "Recorre la infraestructura, detalles y experiencia del centro quirúrgico a través de una galería pensada para reflejar el nivel de atención, precisión y confort que viven médicos y pacientes en cada visita."}
        </p>
      </motion.div>

      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, col) => (
          <div key={col} className="grid gap-6">
            {galleryImages
              .filter((_, index) => index % 3 === col)
              .map((image, index) => {
                const isPortrait = index % 2 === 0;

                return (
                  <AnimatedImage
                    key={`${col}-${index}`}
                    alt={image.alt}
                    src={image.src}
                    ratio={isPortrait ? 9 / 16 : 16 / 9}
                    placeholder={image.src}
                  />
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-accent relative size-full rounded-lg border"
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          },
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}

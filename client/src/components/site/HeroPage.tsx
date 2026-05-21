import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface HeroPageProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const HeroPage = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: HeroPageProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  /* ───────────────────────────────
     MOBILE CHECK
  ─────────────────────────────── */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /* ───────────────────────────────
     SCROLL PROGRESS
     PURE CSS STICKY TIMELINE
  ─────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      /**
       * Progress based on section scroll
       * 0 -> section enters
       * 1 -> section fully scrolled
       */
      const progress = Math.min(
        Math.max(-rect.top / (viewportHeight * 2.2), 0),
        1,
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ───────────────────────────────
     CINEMATIC VALUES
  ─────────────────────────────── */

  const mediaWidth =
    (isMobileState ? 320 : 540) +
    scrollProgress * (isMobileState ? 80 : 900);

  const mediaHeight =
    (isMobileState ? 420 : 620) +
    scrollProgress * (isMobileState ? 120 : 260);

  const radius =
    (isMobileState ? 24 : 32) -
    scrollProgress * (isMobileState ? 12 : 26);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  const textOffset = scrollProgress * (isMobileState ? 30 : 120);

  const contentOpacity = Math.max(0, (scrollProgress - 0.72) * 4);

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
    >
      {/* ───────────────────────────────
          HUGE SCROLL TIMELINE
      ─────────────────────────────── */}
      <section className="relative h-[320vh]">
        
        {/* ───────────────────────────────
            STICKY HERO
        ─────────────────────────────── */}
        <div className="sticky top-0 h-screen overflow-hidden">
          
          {/* BACKGROUND */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: 1 + scrollProgress * 0.05,
              opacity: 1 - scrollProgress * 0.85,
            }}
            transition={{
              duration: 0.08,
            }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* CENTER */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            
            {/* MEDIA REVEAL */}
            <motion.div
              className="relative overflow-hidden"
              animate={{
                width: mediaWidth,
                height: mediaHeight,
                borderRadius: radius,
                y: scrollProgress * -20,
              }}
              transition={{
                ease: [0.16, 1, 0.3, 1],
                duration: 0.08,
              }}
              style={{
                boxShadow:
                  "0 32px 120px rgba(0,0,0,0.32)",
              }}
            >
              {/* MEDIA */}
              {mediaType === "video" ? (
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt={title || "Hero media"}
                  className="w-full h-full object-cover"
                />
              )}

              {/* DARK OVERLAY */}
              <motion.div
                className="absolute inset-0 bg-black"
                animate={{
                  opacity: 0.45 - scrollProgress * 0.22,
                }}
                transition={{
                  duration: 0.08,
                }}
              />
            </motion.div>

            {/* HERO TEXT */}
            <div
              className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 ${
                textBlend
                  ? "mix-blend-difference"
                  : "mix-blend-normal"
              }`}
            >
              {date && (
                <motion.p
                  className="uppercase tracking-[0.28em] text-white/70 text-xs md:text-sm mb-6"
                  animate={{
                    opacity: 1 - scrollProgress * 1.5,
                    y: scrollProgress * -20,
                  }}
                  transition={{
                    duration: 0.08,
                  }}
                >
                  {date}
                </motion.p>
              )}

              <motion.h1
                className="font-display font-bold text-white leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-[7rem]"
                animate={{
                  x: -textOffset,
                  opacity: 1 - scrollProgress * 0.55,
                  scale: 1 - scrollProgress * 0.04,
                }}
                transition={{
                  duration: 0.08,
                }}
              >
                {firstWord}
              </motion.h1>

              <motion.h1
                className="font-display font-bold text-white leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-[7rem]"
                animate={{
                  x: textOffset,
                  opacity: 1 - scrollProgress * 0.55,
                  scale: 1 - scrollProgress * 0.04,
                }}
                transition={{
                  duration: 0.08,
                }}
              >
                {restOfTitle}
              </motion.h1>

              {scrollToExpand && (
                <motion.p
                  className="mt-8 text-white/65 text-sm tracking-wide"
                  animate={{
                    opacity: 1 - scrollProgress * 2,
                    y: scrollProgress * 16,
                  }}
                  transition={{
                    duration: 0.08,
                  }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────
          REAL PAGE CONTENT
      ─────────────────────────────── */}
      <motion.section
        className="relative z-30 bg-[var(--op-canvas)] px-6 md:px-10 lg:px-16 py-24"
        animate={{
          opacity: contentOpacity,
          y: 80 - contentOpacity * 80,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default HeroPage;
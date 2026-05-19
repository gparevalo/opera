import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useFadeUpOnScroll(selector: string, stagger = 0.1) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements[0],
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [selector, stagger]);
}

export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed = 0.3,
) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * -100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
}

export function useScaleReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [ref]);
}

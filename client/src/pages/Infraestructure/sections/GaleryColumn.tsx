import { motion } from "motion/react";
import React from "react";

export const GaleryColumn = (props: {
  className?: string;
  testimonials: typeof any;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ image, name }, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 w-full max-w-sm aspect-[4/5]"
                  style={{
                    background: "#0B1D2A00",
                  }}
                >
                  {/* Background image */}
                  <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
          linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.42) 45%,
            rgba(0,0,0,0.08) 100%
          )
        `,
                    }}
                  />

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-[#004875]/10 backdrop-[blur(0.5px)]" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-7">
                    {/* Small label */}
                    <span
                      className="mb-3 inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.72)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      Ópera Surgical Center
                    </span>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-semibold leading-tight tracking-tight">
                      {name}
                    </h3>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

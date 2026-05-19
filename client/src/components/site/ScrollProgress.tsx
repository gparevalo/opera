import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const [target, setTarget] = useState(0);
  const scaleX = useSpring(target, { stiffness: 180, damping: 38 });

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setTarget(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, width: "100%" }}
    />
  );
}

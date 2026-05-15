import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="opera-canvas min-h-screen selection:bg-opera-amber/30 selection:text-opera-ivory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="pb-28 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
    </motion.div>
  );
}

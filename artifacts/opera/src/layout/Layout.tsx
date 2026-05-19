import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { ScrollProgress } from "@/components/site/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
  navTransparent?: boolean;
}

export function Layout({ children, navTransparent = false }: LayoutProps) {
  return (
    <div style={{ background: "var(--op-canvas)", minHeight: "100vh" }}>
      <JsonLd />
      <ScrollProgress />
      <Navbar transparent={navTransparent} />
      <main className="pt-[60px]">{children}</main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { ScrollProgress } from "@/components/site/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
  navTransparent?: boolean;
}

export function Layout({ children, navTransparent = false }: LayoutProps) {
  return (
    <div className="opera-canvas min-h-screen">
      <ScrollProgress />
      <Navbar transparent={navTransparent} />
      <main className="pt-14">{children}</main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}

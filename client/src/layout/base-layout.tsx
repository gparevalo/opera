import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface BaseLayoutProps {
    children: ReactNode;
}

export function BaseLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-black selection:bg-primary selection:text-white">
            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
            >
                <nav aria-label="Authority canonical links" className="sr-only">
                    <Link href="/fundadora-startups-innovacion-ecuador">
                        Mariángel Hernández fundadora de startups de innovación y tecnología en Ecuador
                    </Link>
                </nav>
                {children}
            </motion.main>
            <Footer />
        </div>
    );
}

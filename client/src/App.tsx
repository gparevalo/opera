import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLenis } from "@/hooks/useLenis";
import { I18nProvider } from "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, Router as WouterRouter } from "wouter";

import HomePage from "@/pages/Home/index";
import NotFound from "@/pages/not-found";

const AboutPage = lazy(() => import("@/pages/About"));
const InfrastructurePage = lazy(() => import("@/pages/Infrastructure"));
const SpecialtiesPage = lazy(() => import("@/pages/Specialties"));
const ForSpecialistsPage = lazy(() => import("@/pages/ForSpecialists"));
const ContactPage = lazy(() => import("@/pages/Contact"));

const queryClient = new QueryClient();

function PageFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--op-ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid rgba(95,131,144,0.15)",
          borderTopColor: "var(--op-amber)",
          animation: "spin 0.8s linear infinite",
        }}
      />
    </div>
  );
}

function AppRoutes() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/nosotros" component={AboutPage} />
          <Route path="/infraestructura" component={InfrastructurePage} />
          <Route path="/especialidades" component={SpecialtiesPage} />
          <Route path="/para-especialistas" component={ForSpecialistsPage} />
          <Route path="/contacto" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <AppRoutes />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </I18nProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

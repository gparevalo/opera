import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import ContactoPage from "@/pages/ContactoPage";
import EspecialidadesPage from "@/pages/EspecialidadesPage";
import InfraestructuraPage from "@/pages/InfraestructuraPage";
import NosotrosPage from "@/pages/NosotrosPage";
import ParaEspecialistasPage from "@/pages/ParaEspecialistasPage";
import NotFound from "./pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/nosotros" component={NosotrosPage} />
      <Route path="/infraestructura" component={InfraestructuraPage} />
      <Route path="/especialidades" component={EspecialidadesPage} />
      <Route path="/para-especialistas" component={ParaEspecialistasPage} />
      <Route path="/contacto" component={ContactoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <I18nProvider>
            <ScrollToTop />
            <Router />
            <Toaster />
          </I18nProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n";
import { useLenis } from "@/hooks/useLenis";
import { ScrollToTop } from "@/components/ScrollToTop";

import HomePage from "@/pages/Home/index";
import AboutPage from "@/pages/About";
import InfrastructurePage from "@/pages/Infrastructure";
import SpecialtiesPage from "@/pages/Specialties";
import ForSpecialistsPage from "@/pages/ForSpecialists";
import ContactPage from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AppRoutes() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/nosotros" component={AboutPage} />
        <Route path="/infraestructura" component={InfrastructurePage} />
        <Route path="/especialidades" component={SpecialtiesPage} />
        <Route path="/para-especialistas" component={ForSpecialistsPage} />
        <Route path="/contacto" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
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

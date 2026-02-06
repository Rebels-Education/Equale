import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import BePartner from "@/pages/BePartner";
import About from "./pages/About";
import Programs from "@/pages/Programs";
import SelectionNotice from "@/pages/SelectionNotice";
import OfficialEdital from "@/pages/OfficialEdital";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import PartnerProfile from "./pages/PartnerProfile";
import WorkWithUs from "./pages/WorkWithUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/seja-parceiro" component={BePartner} />
      <Route path="/sobre" component={About} />
      <Route path="/programas" component={Programs} />
      <Route path="/processo-seletivo" component={SelectionNotice} />
      <Route path="/edital-oficial" component={OfficialEdital} />
      <Route path="/doar" component={Donate} />
      <Route path="/contato" component={Contact} />
      <Route path="/voluntario" component={Volunteer} />
      
      {/* Rota Dinâmica de Parceiros */}
      <Route path="/parceiros/:id" component={PartnerProfile} />
        <Route path="/trabalhe-conosco" component={WorkWithUs} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

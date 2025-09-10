import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeoService from "./pages/SeoService";
import ContentMarketingService from "./pages/ContentMarketingService";
import SocialMediaService from "./pages/SocialMediaService";
import EmailMarketingService from "./pages/EmailMarketingService";
import PpcService from "./pages/PpcService";
import AnalyticsService from "./pages/AnalyticsService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios/seo" element={<SeoService />} />
        <Route path="/servicios/marketing-contenidos" element={<ContentMarketingService />} />
        <Route path="/servicios/redes-sociales" element={<SocialMediaService />} />
        <Route path="/servicios/email-marketing" element={<EmailMarketingService />} />
        <Route path="/servicios/publicidad-ppc" element={<PpcService />} />
        <Route path="/servicios/analytics" element={<AnalyticsService />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

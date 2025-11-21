import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReflectGoal from "./pages/ReflectGoal";
import IntrapreneurshipTraining from "./pages/IntrapreneurshipTraining";
import OwnershipCanvas from "./pages/OwnershipCanvas";
import MentorMap from "./pages/MentorMap";
import InnovationLabs from "./pages/InnovationLabs";
import BeingsphereMethod from "./pages/BeingsphereMethod";
import CaseStudies from "./pages/CaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reflect-goal" element={<ReflectGoal />} />
          <Route path="/intrapreneurship-training" element={<IntrapreneurshipTraining />} />
          <Route path="/ownership-canvas" element={<OwnershipCanvas />} />
          <Route path="/mentor-map" element={<MentorMap />} />
          <Route path="/innovation-labs" element={<InnovationLabs />} />
          <Route path="/beingsphere-method" element={<BeingsphereMethod />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

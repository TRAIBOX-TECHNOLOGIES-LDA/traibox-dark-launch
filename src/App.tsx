import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppPage from "./pages/App";
import RequestAccess from "./pages/RequestAccess";
import NotFound from "./pages/NotFound";
import V7 from "./pages/V7";
import V14 from "./pages/V14";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v7" element={<V7 />} />
          <Route path="/v14" element={<V14 />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

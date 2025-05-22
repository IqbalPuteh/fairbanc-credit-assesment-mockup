
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Import our pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import GetStartedPage from "./pages/GetStartedPage";
import DataOptionsPage from "./pages/DataOptionsPage";
import BankDataOptionsPage from "./pages/BankDataOptionsPage";
import BankSelectionPage from "./pages/BankSelectionPage";
import ERPSelectionPage from "./pages/ERPSelectionPage";
import BankLoginPage from "./pages/BankLoginPage";
import ERPLoginPage from "./pages/ERPLoginPage";
import UploadBankStatementPage from "./pages/UploadBankStatementPage";
import UploadMonthlyReportPage from "./pages/UploadMonthlyReportPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import SuccessPage from "./pages/SuccessPage";
import DashboardPage from "./pages/DashboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/data-options" element={<DataOptionsPage />} />
          <Route path="/bank-options" element={<BankDataOptionsPage />} />
          <Route path="/bank-selection" element={<BankSelectionPage />} />
          <Route path="/erp-selection" element={<ERPSelectionPage />} />
          <Route path="/bank-login" element={<BankLoginPage />} />
          <Route path="/erp-login" element={<ERPLoginPage />} />
          <Route path="/upload-bank-statement" element={<UploadBankStatementPage />} />
          <Route path="/upload-monthly" element={<UploadMonthlyReportPage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/company-info" element={<CompanyInfoPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

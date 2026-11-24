import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ApproachPage from "./pages/ApproachPage";
import DivisionsPage from "./pages/DivisionsPage";
import GovernancePage from "./pages/GovernancePage";
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="strategy" element={<ApproachPage />} />
          <Route path="divisions" element={<DivisionsPage />} />
          <Route path="investments" element={<DivisionsPage />} />
          <Route path="governance" element={<GovernancePage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:id" element={<InsightDetailPage />} />
          <Route path="news" element={<InsightsPage />} />
          <Route path="news/:id" element={<InsightDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<LegalPage />} />
          <Route path="terms" element={<LegalPage />} />
          <Route path="disclaimer" element={<LegalPage />} />
          <Route path="risk-disclosure" element={<LegalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import DivisionsPage from "./components/pages/DivisionsPage";
import DivisionPage from "./components/pages/DivisionPage";
import TechnologiesPage from "./components/pages/Technologiespage";
import PortfolioPage from "./components/pages/Portfoliopage";
import { ContactFormProvider } from "./context/ContactFormContext";

function App() {
  return (
    <BrowserRouter>
      <ContactFormProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="divisions" element={<DivisionsPage />} />
            <Route path="divisions/:slug" element={<DivisionPage />} />
            <Route path="technology" element={<TechnologiesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            {/* Old URLs */}
            <Route path="services" element={<Navigate to="/divisions" replace />} />
            <Route path="technologies" element={<Navigate to="/technology" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ContactFormProvider>
    </BrowserRouter>
  );
}

export default App;

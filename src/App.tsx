// import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import ServicesPage from "./components/pages/Servicespage";
import TechnologiesPage from "./components/pages/Technologiespage";
import PortfolioPage from "./components/pages/Portfoliopage";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/services" element={<ServicesPage />}/>
          <Route path="/technology" element={<TechnologiesPage />}/>
          <Route path="/portfolio" element={<PortfolioPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
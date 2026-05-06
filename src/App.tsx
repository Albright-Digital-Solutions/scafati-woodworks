/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { IntroAnimation } from './components/IntroAnimation';
import { Home } from './pages/Home';
import { Kitchens } from './pages/Kitchens';
import { BuiltIns } from './pages/BuiltIns';
import { Closets } from './pages/Closets';
import { ServicesIndex } from './pages/ServicesIndex';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ServiceAreas } from './pages/ServiceAreas';
import { CityLandingPage } from './pages/CityLandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

export default function App() {
  // Play intro once per browser session
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (sessionStorage.getItem('introPlayed')) return false;
    return true;
  });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('introPlayed', '1');
    setShowIntro(false);
  }, []);

  return (
    <HelmetProvider>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="kitchens" element={<Kitchens />} />
            <Route path="built-ins" element={<BuiltIns />} />
            <Route path="closets" element={<Closets />} />
            <Route path="services" element={<ServicesIndex />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* ─── Service-Area Landing Pages ─────────────────────── */}
            <Route path="service-areas" element={<ServiceAreas />} />
            <Route path="service-areas/:citySlug" element={<CityLandingPage />} />
            {/* ─── Legal Pages ────────────────────────────────────── */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

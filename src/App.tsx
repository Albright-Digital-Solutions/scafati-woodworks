/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
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

export default function App() {
  return (
    <HelmetProvider>
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
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

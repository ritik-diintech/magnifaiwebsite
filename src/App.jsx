import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';

// ScrollToTop component that resets scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Lazy load internal archetype pages so they only load on demand, optimizing home page load speed
const PoliticianPage = lazy(() => import('./pages/Politician/Politician'));
const CelebrityPage = lazy(() => import('./pages/Celebrity/Celebrity'));
const GuruPage = lazy(() => import('./pages/Guru/Guru'));
const FounderPage = lazy(() => import('./pages/Founder/Founder'));


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={{ background: '#020202', minHeight: '100vh', width: '100vw' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archetypes/politics" element={<PoliticianPage />} />
          <Route path="/archetypes/celebs" element={<CelebrityPage />} />
          <Route path="/archetypes/gurus" element={<GuruPage />} />
          <Route path="/archetypes/founders" element={<FounderPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

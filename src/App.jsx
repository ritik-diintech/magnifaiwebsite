import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

// Lazy load internal archetype pages so they only load on demand, optimizing home page load speed
const PoliticianPage = lazy(() => import('./pages/Politician/Politician'));
const CelebrityPage = lazy(() => import('./pages/Celebrity/Celebrity'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ background: '#020202', minHeight: '100vh', width: '100vw' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archetypes/politics" element={<PoliticianPage />} />
          <Route path="/archetypes/celebs" element={<CelebrityPage />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

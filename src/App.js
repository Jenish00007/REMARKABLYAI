import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedPage from './components/Animate_page';
import PP from './pages/PP';
import TermsandCondition from './pages/TermsandCondition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimatedPage />} />
        <Route path="/privacy-policy" element={<PP />} />
        <Route path="/about" element={<AnimatedPage />} />
        <Route path="/terms-and-conditions" element={<TermsandCondition />} />
      </Routes>
    </Router>
  );
}

export default App;

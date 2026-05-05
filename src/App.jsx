import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CertificationDetail from './components/CertificationDetail';
import ProjectDetail from './components/ProjectDetail';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/certification/:id" element={<CertificationDetail />} />
      </Routes>
    </div>
  );
}

export default App;

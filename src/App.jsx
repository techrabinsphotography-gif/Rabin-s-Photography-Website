import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import FrontPage from './components/FrontPage';
import Demo from './components/Demo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HelpSupport from './components/HelpSupport';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AboutUs from './components/AboutUs';
import CookiePolicy from './components/CookiePolicy';
import CookieConsent from './components/CookieConsent';
import Careers from './components/Careers';
import CareerDetail from './components/CareerDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path="/demo" element={<FrontPage />} />
        <Route path="/" element={<Demo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
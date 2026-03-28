import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/demo" element={<FrontPage />} />
        <Route path="/" element={<Demo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
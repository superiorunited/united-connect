import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Success from './components/Success';
import Apply from './components/Apply';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';
import PartnerLogin from './components/PartnerLogin';
import PartnerResources from './components/PartnerResources';
import PartnerGuide from './components/PartnerGuide';
import ReferralProcess from './components/ReferralProcess';
import Press from './components/Press';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Success />
      <Apply />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/partner-login" element={<PartnerLogin />} />
            <Route path="/press" element={<Press />} />
            <Route path="/resources" element={<PartnerResources />} />
            <Route path="/partner-guide" element={<PartnerGuide />} />
            <Route path="/referral-process" element={<ReferralProcess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import FloorPlans from "./components/FloorPlans";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import RoomMaps from "./components/RoomMaps";
import DownloadBrochure from "./components/DownloadBrochure";
import EnquiryForm from "./components/EnquiryForm";
import WhatsAppButton from "./components/WhatsAppButton";
import ButtonGroup from "./components/ButtonGroup";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Thankyou from "./page/Thankyou";
import Landing from "./page/Landing";

const AppContent = () => {
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacy-policy';
  const isBlogPage = location.pathname.includes('/blog');
  const isLandingPage = location.pathname === '/land';
  const isThankYouPage = location.pathname === '/thank-you';
  const hideNavbarFooter = isLandingPage || isThankYouPage;

  return (
    <div className="w-full overflow-hidden bg-white">
      <ScrollToTop />
      {!isPrivacyPage && !hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About /> 
            <FloorPlans />
            <RoomMaps />
            <Amenities />
            <Gallery />
            <EnquiryForm />
            <Contact />
            <ButtonGroup />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/post/:slug" element={<BlogPost />} />
        <Route path="/land" element={<Landing />} />
        <Route path="/thank-you" element={<Thankyou />} />
        
      </Routes>
      {!hideNavbarFooter && <Footer />}
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

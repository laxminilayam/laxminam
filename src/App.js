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

const AppContent = () => {
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacy-policy';

  return (
    <div className="w-full overflow-hidden bg-white">
      <ScrollToTop />
      {!isPrivacyPage && <Navbar />}
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
      </Routes>
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

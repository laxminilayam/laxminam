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

function App() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <FloorPlans />
      <RoomMaps />
      <Amenities />
      <Gallery />
      <EnquiryForm />
      <Contact />
      <ButtonGroup />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/lost-items" element={<LostItems />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
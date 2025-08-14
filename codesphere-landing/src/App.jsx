import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Services from "./components/Services.jsx"
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/get-started" element={<CallToAction />} />
      </Routes>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer />
    </Router>
  );
}

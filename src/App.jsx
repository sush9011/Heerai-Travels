import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RoutesSection from "./components/Routes";
import Fleet from "./components/Fleet";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Services from "./Pages/Services";
import AdminPanel from "./Pages/Admin-Panel";
import FleetDetails from "./Pages/Fleet-Details";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RoutesSection />
      <Fleet />
    </>
  );
}

import Contact from "./Pages/Contact";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<FleetDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
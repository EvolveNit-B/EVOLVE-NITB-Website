"use client";
import AboutSection from "./components/Aboutus";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/Achievements";
import UpcomingEvent from "./components/UpcomingEvent";
import LoadingPage from "./components/Loading/LoadingPage";
import { useState, useEffect } from "react";
import Gallery_bento from "./components/Gallery_bento";
import RegistrationModal from "./components/Registration";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Check if loading animation has already been shown in this session
    const hasShownLoading = sessionStorage.getItem("evolve-loading-shown");

    if (hasShownLoading) {
      // Skip animation if already shown in this session
      setLoading(false);
      return;
    }

    // Show loading animation for first visit in session
    const isMobile = window.innerWidth <= 768;
    const animationTime = isMobile ? 5000 : 6000;

    const timer = setTimeout(() => {
      setLoading(false);
      // Mark that loading animation has been shown in this session
      sessionStorage.setItem("evolve-loading-shown", "true");
    }, animationTime);

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="bg-[#1e201e]">
        <Navbar />
        <HeroSection />
      </div>
      {/* <UpcomingEvent /> */}
      <AboutSection />
      <AchievementsSection />
      <Gallery_bento />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      {/* <RegistrationModal/> */}
    </>
  );
}

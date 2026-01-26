"use client"
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/evolve-car.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  return (
    <section className="relative w-full min-h-[100vh] bg-[#121212] overflow-hidden flex flex-col justify-center items-center px-6 py-24 text-white text-center">
      <motion.img
        src="/Manit_logo.png"
        alt="MANIT Logo"
        initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
        animate={{ opacity: 0.08, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-[0px] right-[-60px] w-[350px] md:w-[450px] pointer-events-none select-none"
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="z-10 text-green-400 text-md md:text-lg font-mono tracking-wide animate-pulse mb-4"
      >
        • #Innovate • #Build • #Evolve
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-3xl md:text-5xl font-extrabold leading-tight mb-6"
      >
        <span className="z-10 text-3xl md:text-7xl font-extrabold leading-tight mb-6">
          Evolve
        </span>
        <br />{" "}
        <span className="z-10 text-2xl md:text-5xl font-extrabold leading-tight mb-6">
          The interdisciplinary Technical Club of
        </span>{" "}
        <br />
        <span className="text-green-500">NIT Bhopal</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="z-10 text-gray-300 text-lg md:text-xl max-w-2xl md:mb-30 mb-10"
      >
        At EVOLVE, we combine creativity with technology to push the limits of
        innovation. From drones and robotics to AI, we’re shaping tomorrow,
        today.
      </motion.p>
      <div className="md:absolute inset-0 flex justify-center items-start md:items-center md:opacity-60 opacity-50 pointer-events-none z-0 md:mt-32">
        {/* <iframe
          src="https://lottie.host/embed/d19ab945-aaa7-454a-8d26-03ef8ca7e976/CxE117vj7I.lottie"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "100%",
            maxHeight: "600px",
            border: "none",
            background: "#121212",
          }}
        /> */}
        {animationData && (
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-28 md:pt-20 text-center"
      >
        <div className="bg-[#1e201e] p-6 rounded-2xl border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative">
          <h2 className="text-3xl font-bold text-green-500">15+</h2>
          <p className="text-sm text-gray-400">Projects Completed</p>
        </div>
        <div className="bg-[#1e201e] p-6 rounded-2xl border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative">
          <h2 className="text-3xl font-bold text-green-500">10+</h2>
          <p className="text-sm text-gray-400">Hackathon Wins</p>
        </div>
        <div className="bg-[#1e201e] p-6 rounded-2xl border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative">
          <h2 className="text-3xl font-bold text-green-500">100+</h2>
          <p className="text-sm text-gray-400">Active Members</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Top Left Gear */}
        <svg
          className="absolute md:top-24 top-28 md:left-10 left-4 w-8 md:w-12 opacity-10 animate-float-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>

        {/* Bottom Left AI Chip */}
        <svg
          className="absolute md:bottom-12 bottom-5 md:left-10 left-4 w-10 md:w-14 opacity-10 animate-float-medium"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;

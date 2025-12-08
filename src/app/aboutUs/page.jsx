"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import LabSection from "../components/LabSection";
import CollaborateSection from "../components/CollaborateSection";
import Footer from "../components/Footer";

export default function aboutUs() {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center text-center">
        <div className="text-left">
          <Navbar />
        </div>
        <motion.div
          className="absolute inset-0 bg-black overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-radial from-white/10 via-black/60 to-black/98"></div>
          <img
            src="/bg_website copy.jpg"
            alt="Background"
            className="w-screen h-screen object-cover opacity-45 md:skew-x-12 scale-105 overflow-hidden"
          />
        </motion.div>
        <motion.div
          className="relative z-10 max-w-4xl px-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-2">
            About Us
          </h2>
          <p className="text-sm text-left md:text-lg leading-relaxed tracking-tight">
            Evolve is an interdisciplinary technical club of Maulana Azad
            National Institute of Technology (MANIT), Bhopal. The club is
            committed to fostering hands-on learning, skill development, and
            innovation across diverse engineering domains. Established under the
            guidance of Dr. Shailendra Jain and Dr. Amit Ojha, and founded by
            Mr. Yash Kumar Atlani, Mr. Ayush Jain, Mr. Aman Sharma, and Mr.
            Aryan Bhargal, Evolve serves as a platform for bridging academic
            knowledge with practical applications. The club has distinguished
            itself by achieving excellence in competitions such as Robofest
            Gujarat 4.0, Tata InnoVent, 5G Innovation Hackathon, Bajaj Torq &
            Ohm Challenge, and many others. Notably, the Swarm and Maze-Solving
            Robot team secured a prize of ₹2 lakhs. Through impactful projects
            including a retrofitted Maruti Suzuki 800, EV cycle, swarm drones,
            underwater robots, and aero models, alongside workshops and
            lectures, Evolve continues to inspire innovation and collaboration
            within MANIT.
          </p>
        </motion.div>
      </section>
      <LabSection />
      {/* <ScrollTimeline /> */}
      <CollaborateSection />
      <Footer />
    </>
  );
}

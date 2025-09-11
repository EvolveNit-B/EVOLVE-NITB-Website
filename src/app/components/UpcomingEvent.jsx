"use client";
import React from "react";
import Showcase_card from "./Showcase_card";
import { motion } from "framer-motion";

function UpcomingEvent() {
  return (
    <div className="flex flex-col mx-auto bg-[#121212] py-10 gap-3">
      <motion.div className="w-full pt-4 flex flex-col items-center justify-center gap-3">
        <motion.h1
          className="font-semibold text-3xl md:text-6xl text-center tracking-wide text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Upcoming <span className="text-green-500">Events</span>
        </motion.h1>
        <motion.h2
          className="text-gray-400 text-center md:mx-[15vw] lg:mx-[25vw] text-lg tracking-tight md:text-[18px] py-4 px-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          From workshop to competitions, our events bring together passionate
          minds to learn, create and innovate in the world of technology
        </motion.h2>
      </motion.div>
      <div className="flex items-center justify-center">
        <Showcase_card
          name="EV Day 2025"
          desciption={`EV Day 2025 showcases the future of electric mobility through expos,
            industry talks, poster presentations, and problem-solving challenges
            like TechTrack 2.0.`}
          date={`Sep 09, 2025`}
          venue={`MANIT, Bhopal`}
          brocureLink={`https://drive.google.com/file/d/1Mk7IWYwKjp-r-nHNI3SNqFhgD1C2Pkna/view?usp=sharing`}
          image={`/Events/vidyut_25.jpg`}
          button_name={`View Brochure`}
        />
      </div>
      <div className="flex items-center justify-center">
        <Showcase_card
          name="Tech Track 2.0"
          desciption={`Tech Track 2.0 by EVOLVE NIT Bhopal brings real-world problem solving, prizes worth ₹18,000, internships at Vaayu Robotics, and ministry-backed recognition — your chance to innovate and make an impact!`}
          date={`Sep 09, 2025`}
          venue={`MANIT, Bhopal`}
          brocureLink={`https://unstop.com/o/Bkpe9n4?lb=zFRjMLjF&utm_medium=Share&utm_source=WhatsApp`}
          image={`/Events/tech_track.jpg`}
          button_name={`Register Now`}
        />
      </div>
    </div>
  );
}

export default UpcomingEvent;

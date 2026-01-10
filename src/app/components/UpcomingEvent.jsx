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
          name="WATER ROBO RACE"
          desciption={`EVOLVE brings you the thrilling Water Robo Race Competition at Techno Search, MANIT Bhopal, where innovation meets speed on water.
          Design, build, and race your robot while testing your speed, control, and creativity. Let your robot rule the water!`}
          date={`Jan 25, 2026`}
          venue={`MANIT, Bhopal`}
          brocureLink={`https://unstop.com/o/GWpUnsB?lb=qSfy0XDj&utm_medium=Share&utm_source=ayushsha1571&utm_campaign=Competitions`}
          image={`/Events/water_robo_race.jpeg`}
          button_name={`Register Now`}
        />
      </div>
      <div className="flex items-center justify-center">
        <Showcase_card
          name="BATTSIM"
          desciption={`EVOLVE challenges you to charge up your innovation 💡 with the Battery Design Challenge — an interdisciplinary quest to design the next generation of energy storage solutions.
          Don’t miss this opportunity to innovate, compete, and win big!`}
          date={`Jan 24, 2026`}
          venue={`MANIT, Bhopal`}
          brocureLink={`https://unstop.com/o/QghE9Ok?lb=qSfy0XDj&utm_medium=Share&utm_source=ayushsha1571&utm_campaign=Competitions`}
          image={`/Events/batsim.jpeg`}
          button_name={`Register Now`}
        />
      </div>
    </div>
  );
}

export default UpcomingEvent;

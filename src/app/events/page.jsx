"use client";

import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import { eventData } from "../data/eventData";
import Footer  from "../components/Footer";
import { motion } from "framer-motion";

export default function Events({}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-[#121212]">
        <div className="bg-[#121212] flex-1 w-full pt-22 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-bold tracking-wide md:text-7xl md:mt-6 text-5xl"
          >
            Our <span className="text-green-500">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-400 text-center md:mx-[15vw] lg:mx-[20vw] text-lg tracking-tight md:text-[18px] mt-6"
          >
            Explore our upcoming events, workshops, and activities designed to
            engage and inspire.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center p-5 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {eventData.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                event_name={event.event_name}
                event_desc={event.event_desc}
                tags={event.tags}
                brochureLink={event.brochureLink}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

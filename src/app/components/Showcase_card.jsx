"use client";
import React from "react";
import { Calendar, MapPin, Phone } from "lucide-react"; // Added Phone icon
import { motion } from "framer-motion";
import Image from "next/image";

function Showcase_card({
  name,
  desciption,
  image,
  date,
  venue,
  brocureLink,
  button_name,
  contact_name, 
  contact_number,
}) {
  return (
    <motion.div
      className="rounded-lg mx-8 w-full bg-[#1D241F] md:w-fit h-fit p-3  shadow-xl mt-5"
      initial={{ y: 20, opacity: 0, scale: 0.7 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row md:gap-1 gap-3 rounded-lg">
        <div className="md:order-2 rounded-lg">
          <Image
            width={300}
            height={300}
            alt="upcoming event cards"
            src={image || `https://picsum.photos/400/300?random=1`}
            className="rounded-lg md:w-[300px] h-[300px] object-cover"
          />
        </div>
        <div className="md:order-1 max-w-lg md:my-auto md:pl-4">
          <div className="bg-green-700/20 hover:bg-green-800/20 px-3 py-1 rounded-xl text-green-500 border-[1px] border-green-800 md:text-sm text-sm transition-colors duration-100 text-nowrap w-fit">
            📆 Upcoming
          </div>
          <h1 className="text-3xl text-neutral-50 font-bold my-2 md:text-5xl">
            {name || `EV Day 2025`}
          </h1>
          <p className="text-neutral-300 text-[13px] leading-4.5 md:w-[85%] md:text-md my-2">
            {desciption ||
              `EV Day 2025 showcases the future of electric mobility through expos,
            industry talks, poster presentations, and problem-solving challenges
            like TechTrack 2.0.`}
          </p>
          <div className="flex gap-1">
            <Calendar className="text-green-500 w-4" />{" "}
            <p className="text-[14px] py-1 text-neutral-400">
              {date || `Sep 09, 2025`}
            </p>
          </div>
          <div className="flex gap-1 -my-2">
            <MapPin className="text-green-500 w-4" />{" "}
            <p className="text-[14px] py-1 text-neutral-400">
              {venue || `MANIT, Bhopal`}
            </p>
          </div>

          <div className="flex gap-1">
            <Phone className="text-green-500 w-4" />{" "}
            <p className="text-[14px] py-1 text-neutral-400">
              {contact_name || "Coordinator"} :{" "}
              {contact_number || "+91 98765 43210"}
            </p>
          </div>

          <div className="bg-green-950 hover:bg-green-800/20 px-4 py-2 rounded-lg text-green-400 border-[1px] border-green-800 md:text-md text-sm transition-colors duration-100 text-nowrap text-center hover:cursor-pointer mt-4 w-full md:w-fit">
            <a href={brocureLink} className="underline-none">
              {button_name}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Showcase_card;

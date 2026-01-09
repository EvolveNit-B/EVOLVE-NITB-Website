import React from "react";
import { motion } from "framer-motion";
// import image27 from "@/pub;///"
function Gallery_bento() {
  return (
    <>
      <div className="font-semibold text-3xl md:text-5xl text-center tracking-wide text-white bg-[#121212] py-4">
        Our <span className="text-green-500">Glimpses</span>
      </div>
      <div className="text-gray-400 text-center bg-[#121212] text-lg tracking-tight md:text-[18px] md:py-4 py-2">
        Highlights from our unforgettable experiences
      </div>
      <div className="w-screen bg-[#121212] px-5 overflow-x-scroll pb-30">
        <div className="grid h-[100vh] gap-3 grid-cols-6 grid-rows-4 w-[200vh] md:w-[92vw] md:h-[90vh] bg-neutral-950 mx-auto overflow-x-scroll">
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-2 row-span-2 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/gallery/image4.jpg"
              className="scale-120"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-2 row-span-3 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/gallery/image35.jpg"
              className="scale-125"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-2 row-span-2 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/image27.JPG"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-1 row-span-2 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/gallery/image9.jpg"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-green-400 text-2xl col-span-1 row-span-1">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/Evolve_Logo.png"
              alt="Evolve_Logo"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-2 row-span-1 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/image30.JPG"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-3 row-span-1 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/gallery/image32.jpeg"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-orange-400 text-2xl col-span-2 row-span-1 overflow-hidden border border-green-400">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/image29.JPG"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery_bento;

"use client";
import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Founder } from "../data/team";
import { PreFinalYear } from "../data/team";
import { FinalYear } from "../data/team";
import Footer from "../components/Footer";
const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="py-30 bg-[#121212]">
        <div className="w-full text-white md:text-7xl font-semibold text-center text-6xl">
          Team <span className="text-green-500">Evolve</span>
        </div>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-center md:mx-[6vw] lg:mx-[15vw] text-lg tracking-tight md:text-[18px] py-4 px-3">
              Meet the dedicated individuals behind Evolve — a diverse team of
              innovators, learners, and changemakers who share one vision: to
              create, inspire, and drive meaningful impact. Each member brings
              unique skills and passion, working together to turn ideas into
              reality.
            </p>
            <h2 className="md:text-5xl text-4xl font-bold text-white">
              Our <span className="text-green-500">Founder</span>
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center gap-8 items-start"
          >
            {Founder.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex-shrink-0"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
          //
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <hr className="text-white my-5 border border-neutral-700" />
            <h2 className="md:text-5xl text-4xl font-bold text-green-500 mt-10">
              Final Year
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            className="flex flex-wrap justify-center gap-8 items-start"
          >
            {FinalYear.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex-shrink-0"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
          //
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <hr className="text-white my-5 border border-neutral-700" />
            <h2 className="md:text-5xl text-4xl font-bold text-green-500 mt-10">
              Pre Final Year
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            className="flex flex-wrap justify-center gap-8 items-start"
          >
            {PreFinalYear.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex-shrink-0"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

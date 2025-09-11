"use client";

import React from "react";
import { Cpu, Bot, Satellite, Database } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const domains = [
  {
    name: "AI/ML",
    description:
      "Exploring artificial intelligence and machine learning for smarter solutions.",
    image: "domains/evolve.webp",
  },
  {
    name: "Robotics",
    description:
      "Designing and building autonomous and semi-autonomous robots.",
    image: "domains/robotics.webp",
  },
  {
    name: "IoT & Embedded",
    description:
      "Interconnecting smart devices and real-world sensors for automation.",
    image: "domains/iotandembeededsystems.avif",
  },
  {
    name: "Software & Web",
    description: "Developing scalable web applications and software tools.",
    image: "domains/softwareBased.jpg",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-[#121212] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-green-500">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Evolve is a dynamic technical club at Maulana Azad National
            Institute of Technology, Bhopal. Driven by a shared enthusiasm for
            hands-on learning and inventive problem-solving. The club welcomes
            any student passionate about robotics, mechanical engineering,
            electrical engineering, and software development. Beyond the campus,
            the club has made its mark, bringing numerous prizes and enhancing
            prestige.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about_us_pic.jpg"
            alt="About Image"
            width={500}
            height={500}
            className="mx-auto rounded-xl w-[300px] md:w-[500px] opacity-80 hover:opacity-100 transition duration-300"
          />
        </motion.div>
      </div>

      <div className="mt-24 px-6 max-w-7xl mx-auto">
        <motion.h3
          className="text-4xl md:text-6xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our <span className="text-green-500">Domains</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-2">
          {domains.map((domain, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1e201e]  rounded-2xl border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-green-500 mb-3 ">
                <img height={20} className="h-32 object-fill w-full rounded-t-2xl" src={domain.image} alt="" />
              </div>
              <div className="p-3">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-green-500 transition">
                  {domain.name}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {domain.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-300 bg-green-500/10 pointer-events-none z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

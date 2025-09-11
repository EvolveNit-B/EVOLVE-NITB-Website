"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket } from "lucide-react";

export default function LabSection() {
  return (
    <section className="relative w-full bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Title + Description */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            Evolve Lab
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The heart of innovation at Evolve. Our lab is equipped with
            state-of-the-art tools, IoT devices, drones, EV prototypes, and AI
            workstations—fostering creativity, experimentation, and breakthrough
            solutions.
          </p>
        </motion.div>

        {/* Lab Images Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, duration: 0.8 }}
        >
          {[
            "/lab/lab1.jpg",
            "/lab/lab2.jpg",
            "/lab/lab3.jpg",
            "/lab/lab4.jpg",
            "/lab/lab5.jpg",
            "/lab/lab6.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Lab equipment ${i + 1}`}
                className="w-full h-64 object-cover group-hover:opacity-90 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-8 bg-[#1e201e] rounded-2xl shadow-lg border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold group-hover:text-green-400">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To create a vibrant ecosystem where young innovators, engineers,
              and entrepreneurs collaborate to design impactful solutions for a
              sustainable and technologically advanced future.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-[#1e201e] rounded-2xl shadow-lg border border-neutral-700 hover:border-green-500/40 hover:shadow-green-400/10 hover:shadow-xl transition-all duration-300 group relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold group-hover:text-green-400">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower students by providing cutting-edge resources, hands-on
              experience, and mentorship—driving innovation in IoT, AI/ML,
              drones, and EVs while fostering entrepreneurial growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#121212" /* Change this color to match the next section’s background */
            d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,144C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {Handshake,Users,Lightbulb,Rocket,Network,ShieldCheck} from "lucide-react";
import { useRouter } from "next/navigation";

const strengths = [
  {
    icon: <Handshake className="w-8 h-8 text-green-400" />,
    title: "Strong Industry Network",
    desc: "Connect with startups, industry leaders, and mentors to unlock opportunities for growth.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-green-400" />,
    title: "Culture of Innovation",
    desc: "Our lab nurtures creativity and experimentation with cutting-edge tools and guidance.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-400" />,
    title: "Student-Driven Energy",
    desc: "Powered by passionate innovators who push boundaries in IoT, AI, EVs, and more.",
  },
  {
    icon: <Network className="w-8 h-8 text-green-400" />,
    title: "Collaborative Ecosystem",
    desc: "Work alongside diverse talent across domains—fostering real-world, impactful solutions.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    title: "Trusted Execution",
    desc: "We ensure projects are executed with professionalism, transparency, and reliability.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Community Impact",
    desc: "Creating solutions that matter—positively impacting society, startups, and academia.",
  },
];

export default function CollaborateSection() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#121212] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Collaborate with <span className="text-green-400">Evolve</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Partner with us to co-create groundbreaking solutions. At Evolve, we
            combine passion, expertise, and resources to turn ambitious ideas
            into impactful realities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-green-500/20 transition group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              duration={0.3}
              viewport={{ once: true }}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-green-400 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="px-8 py-4 text-lg font-semibold text-black bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition" onClick={() => {router.push("/#contact")}}>
        
              Partner with Us
          
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { Instagram, Linkedin, Mail, MapPin, X, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "./TeamCard";

const developers = [
  {
    name: "Aadi Kumar Jain",
    src: "/devs/aadi.jpg",
    linkedin: "https://www.linkedin.com/in/aadi-jain-42a765319/",
    instagram: "https://www.instagram.com/aadijaintkg/?hl=en",
    role: "Full Stack Developer",
  },
  {
    name: "Yahtharth Upmanyu",
    src: "/devs/yatharth.jpg",
    linkedin: "https://www.linkedin.com/in/yatharth-upmanyu-b85781320/",
    instagram: "https://www.instagram.com/yatharthupmanyu/?hl=en",
    role: "Full Stack Developer",
  },
];

const Footer = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5 text-green-400" />,
      href: "https://www.instagram.com/evolve_nitb/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-green-400" />,
      href: "https://www.linkedin.com/company/evolve-nit-bhopal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3BFMKp75WCRDaj3lAg8GsO9w%3D%3D",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5 text-green-400" />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=evolvenitb@gmail.com",
      label: "Mail",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <motion.footer
        onMouseMove={handleMouseMove}
        className="bg-[#0d0f12] border-t border-gray-800 px-6 sm:px-10 lg:px-16 pt-10 text-gray-300 relative overflow-hidden group"
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px at var(--mouse-x) var(--mouse-y), rgba(5, 150, 105, 0.15), transparent 80%)",
          }}
        />

        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/Evolve_logo.png"
                  alt="EVOLVE"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                The Interdisciplinary Technical Club of MANIT Bhopal. Building
                the future through innovation, collaboration, and cutting-edge
                technology.
              </p>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-700/80"
                    title={link.label}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 md:pl-8 lg:pl-16"
            >
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5, color: "rgb(34, 197, 94)" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <button
                      onClick={() => router.push(link.href)}
                      className="text-gray-400 hover:cursor-pointer transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Domains</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Electric Vehicles & Ecosystem</li>
                <li>Software Development & AI</li>
                <li>Robotics & Automation</li>
                <li>Innovation & Research</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.66698642208!2d77.41160391494951!3d23.23277121696205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4273c5555555%3A0x6b1022830f04c559!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1628178123456!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-gray-700 w-full"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EVOLVE - MANIT Bhopal. All rights
              reserved.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-semibold transition-colors duration-300"
            >
              Meet the Developers
            </button>
          </div>
        </div>
      </motion.footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative md:mt-30 mt-20 mb-10 p-6 bg-[#1a1a1a] text-white rounded-xl shadow-lg border border-gray-800 w-full max-w-4xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h2 className="md:text-5xl text-3xl font-bold text-center mb-8 text-green-400">
                Meet the Developers
              </h2>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {developers.map((member) => (
                  <Card key={member.name} member={member} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
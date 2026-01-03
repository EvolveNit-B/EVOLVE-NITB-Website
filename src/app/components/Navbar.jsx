"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/aboutUs" },
  { name: "Projects", link: "/projects" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 px-6 lg:px-12 py-4 flex items-center justify-between z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href="/">
          <img
            src="/Evolve_Logo.png"
            className="md:h-12 h-8 w-auto object-contain"
            alt="Evolve Logo"
          />
        </a>
      </motion.div>

      <ul className="hidden lg:flex items-center space-x-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="relative px-6 py-3 text-gray-300 font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:text-gray-100 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-lime-600 text-white font-semibold text-sm tracking-wide rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => router.push("/#contact")}
        >
          Collab and Build with us
        </motion.button>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="lg:hidden p-2 text-gray-300 hover:text-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] "
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 w-80 max-w-[85vw] bg-black shadow-2xl z-999 h-screen"
            >
              <div className="flex items-center justify-between p-6 border-b  border-black bg-black">
                <a href="/">
                  <img
                    src="/Evolve_Logo.png"
                    className="h-8 w-auto object-contain"
                    alt="Evolve Logo"
                  />
                </a>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-emerald-500 transition-colors duration-200 rounded-full hover:bg-gray-900"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="py-6 bg-black">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={item.link}
                      className="block px-6 py-4 text-white font-medium text-lg border-b  border-black/50 hover:bg-gray-900 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span whileHover={{ x: 10 }} className="block">
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="px-6 pt-6 border-t  border-black bg-black"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-emerald-500/25 "
                  onClick={() => router.push("/#contact")}
                >
                  Collab and Build with us
                </motion.button>
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

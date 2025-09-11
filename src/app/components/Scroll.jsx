"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;

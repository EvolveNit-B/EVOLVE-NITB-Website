

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    try {
      const response = await axios.post("/api/contact-us", formData);
    } catch (error) {
      console.log("Failed in sending your response.");
    }
    setSuccess("Thanks! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0b0c0e] flex flex-col items-center justify-center px-6 py-20 text-white relative overflow-hidden"
    >
      <motion.div
        className="hidden lg:block absolute inset-0 z-0 opacity-30"
        initial={{
          backgroundPosition: "0% 0%",
        }}
        animate={{
          backgroundPosition: "100% 100%",
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, #22c55e 0%, transparent 20%), radial-gradient(circle at 100% 100%, #3b82f6 0%, transparent 20%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <div className="w-full flex justify-center mb-4">
          <div className="border-2 rounded-full border-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] p-2 w-fit flex justify-center items-center">
            <p className="text-sm font-bold text-center uppercase tracking-widest text-green-500">
              Get In Touch
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-3xl backdrop-blur-lg bg-white/5 border border-green-500/30 rounded-2xl p-8 md:p-12 shadow-2xl relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-400">
          Send us a Message
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message *</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your interest in EVOLVE..."
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && <p className="text-red-400">{error}</p>}
          {success && <p className="text-green-400">{success}</p>}

          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-black font-medium transition-all hover:shadow-green-500/50 hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2l-6 20-4-9-9-4 20-7z"
                ></path>
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
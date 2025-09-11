"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const RegistrationModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    screenshot: null,
  });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 20000);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email.";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile must be 10 digits.";
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setDisableSubmit(true);
      try {
        const response = await axios.post("/api/register", formData);

        try {
          const mailTokenResponse = await axios.post("/api/register_mail", {
            email: response?.data?.email,
            token: response?.data?.token,
          });
        } catch (error) {
          console.log(error);
        }
        toast.success("Registered Successfully");
      } catch (error) {
        console.log(error);
        console.log(error.response.status);
        if (error.response.status === 404) {
          toast.error("All Field are required!");
        } else if (error.response.status === 401) {
          toast.error("Email Already Registered!");
        } else if (error.response.status === 402) {
          toast.error("Mobile Number Already Registered!");
        } else {
          toast.error("Something went wrong!");
        }
      }

      setSubmitted(true);
      setDisableSubmit(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setMinimized(true);
  };

  const handleReopen = () => {
    setShowModal(true);
    setMinimized(false);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -30 }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              className="relative w-full max-w-3xl bg-[#0b0c0e] text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mt-24"
            >
              <div className="hidden md:block md:w-1/2">
                <Image
                  src="/ev_expo_2025.png"
                  alt="Test Ride"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-green-500 text-center w-full">
                    Registration for Test Ride in VIDYUT'25
                  </h2>
                  <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-2 rounded-lg bg-[#1a1b1e] border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 focus:outline-none mb-2"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full px-4 py-2 rounded-lg bg-[#1a1b1e] border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 focus:outline-none mb-2"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit number"
                        className="w-full px-4 py-2 rounded-lg bg-[#1a1b1e] border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 focus:outline-none mb-2"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                      />
                      {errors.mobile && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className={`w-full py-2 ${
                        disableSubmit ? "bg-gray-500" : "bg-green-500"
                      } text-white rounded-lg font-semibold shadow-lg transition transform ${
                        disableSubmit
                          ? ""
                          : "hover:scale-[1.02] hover:bg-green-600"
                      } mt-5`}
                      disabled={disableSubmit}
                    >
                      Submit
                    </button>
                  </form>
                ) : (
                  <div className="text-center text-green-400 font-semibold py-10">
                    Registration Complete!
                    <br />
                    <br />
                    <span className="text-gray-600">
                      Take the screenshot of this message and tag evolve on
                      instagram{" "}
                      <a href="https://www.instagram.com/evolve_nitb/?hl=en" className="text-gray-500 underline">
                        @evolve_nitb
                      </a>{" "}
                      to increase your test ride chances.
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {minimized && !showModal && (
          <motion.div
            initial={{ x: "-100%", opacity: 0, scale: 0.7 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, scale: 0.7 }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            className="fixed bottom-6 left-6 bg-gradient-to-r from-green-500 to-green-400 px-5 py-2 rounded-full shadow-lg cursor-pointer z-40 font-medium hover:scale-105 transition"
            onClick={handleReopen}
          >
            Register for Ride
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegistrationModal;

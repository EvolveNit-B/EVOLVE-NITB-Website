"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "../React-bits/CountUp";
import Lottie from "lottie-react";

function LoadingPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/evolve-car.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  
  return (
    <div className="w-full h-full flex justify-center items-center px-2 py-3 bg-neutral-950">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-[90%] h-[90%] rounded-lg bg-neutral-800  grid-cols-3 grid-rows-2 p-10 gap-3 overflow-hidden hidden sm:grid"
      >
        <div className="col-span-1 row-span-1 items-start justify-start text-white text-7xl flex">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text font-bold text-green-500 mt-5 ml-5"
          />
          <h1 className="text-4xl text-green-500 mt-12 ml-2 font-bold">Kmph</h1>
        </div>
        <div className="col-span-2 row-span-1 flex justify-end text-white text-7xl overflow-hidden">
          <motion.img
            initial={{
              x: "90vw",
              opacity: 0,
              blur: "10px",
              scale: 0.5,
            }}
            animate={{ x: "70vw", opacity: 1, blur: "0px", scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="Evolve_logo.png"
            className="scale-25 -mt-40"
          />
        </div>
        <motion.div
          animate={{ x: ["-100vw", "1vw", "1vw", "100vw"] }}
          transition={{ duration: 6, delay: 0.5 }}
          className="col-span-3 row-span-1  p-3 text-white text-7xl w-fit h-fit flex justify-center items-end"
        >
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="scale-120"
            />
          )}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-[90%] h-[90%] rounded-lg bg-neutral-800  grid-cols-1 grid-rows-2 p-10 gap-2 overflow-hidden grid sm:hidden"
      >
        <div className="flex col-span-1 row-span-1">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text font-bold text-green-500 text-5xl"
          />
        </div>
        <motion.div className="flex justify-center col-span-1 row-span-1">
          <motion.img
            initial={{
              y: "100vh",
              blur: "0px",
            }}
            animate={{
              y: "-12vh",
              blur: "100px",
              opacity: [0, 0.5, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
            src="Evolve_logo.png"
            className="w-80 h-35"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoadingPage;

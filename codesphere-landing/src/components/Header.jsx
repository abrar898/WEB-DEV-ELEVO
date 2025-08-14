import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spline from "@splinetool/react-spline";

export default function Header() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <header
      ref={ref}
      className="h-screen bg-black text-white flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[500px]"
      >
        <Spline scene="https://prod.spline.design/9btWB2JhkIjO8POp/scene.splinecode" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold mt-2"
      >
        Build, Collaborate, Deploy — All in the Browser
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg mt-4 text-gray-300"
      >
        AI-powered coding platform for developers
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Start Coding for Free
      </motion.button>
    </header>
  );
}

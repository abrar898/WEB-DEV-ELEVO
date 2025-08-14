import React from "react";
import { motion } from "framer-motion";

const reviews = [
  "TaskFlow is a game changer!",
  "Clean UI and super efficient.",
  "Perfect for managing my remote team!",
];

export default function Reviews() {
  return (
    <motion.section
      className="bg-gray-100 py-12 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-8">What Our Users Say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((quote, i) => (
          <blockquote key={i} className="bg-white p-6 rounded-lg shadow">
            “{quote}”
          </blockquote>
        ))}
      </div>
    </motion.section>
  );
}

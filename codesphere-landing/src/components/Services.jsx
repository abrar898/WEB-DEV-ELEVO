import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const features = [
    {
      title: "Build",
      description:
        "Write and edit code directly in your browser with our AI-assisted editor, no installs needed.",
      icon: "💻",
    },
    {
      title: "Collaborate",
      description:
        "Pair-program in real time with teammates around the world using our live collaboration tools.",
      icon: "🤝",
    },
    {
      title: "Deploy",
      description:
        "Push your projects live with a single click our platform handles hosting and scaling for you.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-black text-white" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Services
        </motion.h2>

        {/* Subheading */}
        {/* <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          AI-powered coding platform for developers.
        </motion.p> */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 mt-12 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-neutral text-neutral-content p-8 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

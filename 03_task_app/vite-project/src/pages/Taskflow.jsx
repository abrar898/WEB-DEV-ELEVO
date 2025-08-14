import React from "react";
import { motion } from "framer-motion";

export default function TaskFlowPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Section */}
      <section className="text-center p-10 bg-blue-100">
        <h1 className="text-4xl font-bold mb-4">TaskFlow</h1>
        <p className="mb-4 text-lg">Organize your tasks effortlessly.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <motion.section
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[
          { icon: "📋", title: "Create Tasks", desc: "Easily create and manage your to-dos." },
          { icon: "📆", title: "Schedule", desc: "Plan your day with smart scheduling." },
          { icon: "📊", title: "Track Progress", desc: "Visualize task completion and stay on track." }
        ].map((feature, i) => (
          <div key={i} className="text-center border rounded p-6 shadow bg-white">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="bg-gray-100 py-10 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">What Users Say</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["TaskFlow changed my workflow!", "Super intuitive and fast.", "Helps my team stay focused!"].map(
            (quote, i) => (
              <blockquote key={i} className="bg-white p-6 rounded shadow">
                “{quote}”
              </blockquote>
            )
          )}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Pricing Plans</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Free", price: "$0", features: ["Basic Task Tools"] },
            { title: "Pro", price: "$9/mo", features: ["Task Tools", "Scheduling"] },
            { title: "Team", price: "$29/mo", features: ["All Pro features", "Team Collaboration"] }
          ].map((plan, i) => (
            <div key={i} className="border p-6 rounded text-center shadow">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-2xl mb-4">{plan.price}</p>
              <ul className="text-left mb-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="list-disc ml-4">{f}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Choose</button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p className="mb-2">Contact us: support@taskflow.com</p>
        <div className="flex justify-center gap-4">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

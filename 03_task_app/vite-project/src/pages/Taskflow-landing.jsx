import React from "react";
import { motion } from "framer-motion";

export default function TaskFlowLandingPage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Top Section */}
      <section className="text-center p-12 bg-gradient-to-br from-blue-100 to-white">
        <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
        <p className="mb-6 text-xl">Organize your tasks effortlessly and boost your productivity.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <motion.section
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          { icon: "✅", title: "Easy Task Creation", desc: "Add tasks with one click and organize instantly." },
          { icon: "📅", title: "Smart Scheduling", desc: "Plan your day and prioritize effectively." },
          { icon: "📈", title: "Track Progress", desc: "Visual dashboards to monitor your workflow." },
        ].map((feature, index) => (
          <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="bg-gray-100 py-12 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {["TaskFlow is a game changer!", "Clean UI and super efficient.", "Perfect for managing my remote team!"].map(
            (quote, i) => (
              <blockquote key={i} className="bg-white p-6 rounded-lg shadow">
                “{quote}”
              </blockquote>
            )
          )}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-14 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            { title: "Free", price: "$0/mo", features: ["Basic features", "Single user"] },
            { title: "Pro", price: "$9/mo", features: ["Advanced tools", "Priority support"] },
            { title: "Team", price: "$29/mo", features: ["Team collaboration", "Admin dashboard"] },
          ].map((plan, i) => (
            <div key={i} className="border p-6 rounded-lg text-center shadow bg-white">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-left mb-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="list-disc ml-6 mb-1">{f}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Choose Plan</button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mb-2">Contact us: <a href="mailto:support@taskflow.com" className="underline">support@taskflow.com</a></p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Main() {
  const features = [
    { title: "AI Pair Programming", desc: "Let AI suggest, fix, and refactor your code." },
    { title: "Live Collaboration", desc: "Code together with your team in real time." },
    { title: "One-Click Deploy", desc: "Push code to the cloud instantly." },
  ];

  return (
    <section className="py-16 bg-black text-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                }}
                className="p-8 bg-neutral text-neutral-content rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-300">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

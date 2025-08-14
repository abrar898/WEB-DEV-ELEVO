import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Pricing() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "forever",
      features: ["Basic features", "Community support", "Limited API calls"],
    },
    {
      title: "Monthly",
      price: "$19",
      period: "per month",
      features: ["All Free features", "Priority support", "Unlimited API calls"],
    },
    {
      title: "Yearly",
      price: "$190",
      period: "per year",
      features: [
        "All Monthly features",
        "2 months free",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section className="py-16 bg-black" id="pricing">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-12 tracking-wide">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // <-- Animate every time it comes into view
              threshold: 0.2, // Start animation when 20% of card is visible
            });

            return (
              <motion.div
                ref={ref}
                key={plan.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)",
                }}
                className="bg-neutral text-neutral-content p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-[420px]"
              >
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>

                {/* Price */}
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-400">
                    /{plan.period}
                  </span>
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="text-gray-300 flex items-start">
                      <span className="mr-2">✅</span> {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Choose Plan
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

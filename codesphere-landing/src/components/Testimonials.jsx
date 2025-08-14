import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Sarah L.",
      role: "Startup Founder",
      message:
        "This tool completely transformed our workflow. We deliver features twice as fast!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "James K.",
      role: "Full-Stack Developer",
      message:
        "Clean interface, powerful features, and excellent support. Worth every penny!",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 4,
    },
    {
      name: "Priya M.",
      role: "Product Manager",
      message:
        "The analytics dashboard gives us insights we never had before. Love it!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-black" id="testimonials">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-12 tracking-wide">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((fb, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={fb.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
                }}
                className="bg-neutral text-neutral-content p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={fb.img}
                  alt={fb.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500"
                />
                <p className="italic text-gray-300 mb-4 leading-relaxed">
                  "{fb.message}"
                </p>
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-lg ${
                        i < fb.rating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-lg">{fb.name}</h4>
                <span className="text-gray-400 text-sm">{fb.role}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

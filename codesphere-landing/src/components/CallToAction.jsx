import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-black text-white text-center" id="cta">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Boost Your Productivity?
      </h2>
      <p className="text-lg mb-6">
        Join thousands of developers using CodeSphere to code, collaborate, and
        ship faster.
      </p>
      <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
        Get Started for Free
      </button>
    </section>
  );
}

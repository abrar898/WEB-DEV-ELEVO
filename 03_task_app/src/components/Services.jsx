import React from "react";

const Services = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-[-120px] w-[350px] h-[180px] bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[220px] h-[220px] bg-blue-500 rounded-full opacity-20 blur-2xl"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <blockquote className="p-6 bg-gray-800 rounded-lg shadow-lg">
            "TaskFlow completely changed how I manage my work!"
            <footer className="mt-4 text-sm text-gray-400">— Alex R.</footer>
          </blockquote>
          <blockquote className="p-6 bg-gray-800 rounded-lg shadow-lg">
            "Simple, fast, and very effective."
            <footer className="mt-4 text-sm text-gray-400">— Sarah M.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Services;

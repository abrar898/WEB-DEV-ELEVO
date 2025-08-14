import React from "react";

export default function TopSection() {
  return (
    <section className="text-center p-12 bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
      <p className="mb-6 text-xl">
        Organize your tasks effortlessly and boost your productivity.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}

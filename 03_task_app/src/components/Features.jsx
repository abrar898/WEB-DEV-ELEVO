import React from "react";

const features = [
  { title: "Easy Task Creation", description: "Add tasks with just a click.", icon: "📝" },
  { title: "Smart Reminders", description: "Never forget a deadline.", icon: "⏰" },
  { title: "Cross-Platform", description: "Access tasks anywhere.", icon: "🌍" },
];

const Features = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[150px] bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500 rounded-full opacity-20 blur-2xl"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

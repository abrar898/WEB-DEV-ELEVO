import React from "react";

const plans = [
  { name: "Free", price: "$0/forever", features: ["Basic features", "Community support"] },
  { name: "Pro", price: "$9/month", features: ["All Free features", "Priority support", "Unlimited tasks"] },
  { name: "Team", price: "$29/month", features: ["All Pro features", "Team collaboration", "Advanced analytics"] },
];

const Pricing = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[500px] h-[250px] bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-blue-500 rounded-full opacity-20 blur-2xl"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-left"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-300 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {/* Fixed width for consistent alignment */}
                    <span className="text-green-400 w-6">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

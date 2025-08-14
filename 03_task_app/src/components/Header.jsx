import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      {/* Top Oval */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Center Oval */}
      <div className="absolute top-1/2 left-[-150px] transform -translate-y-1/2 w-[400px] h-[200px] bg-purple-500 rounded-full opacity-20 blur-2xl"></div>

      {/* Bottom Right Circle */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-pink-500 rounded-full opacity-30 blur-2xl"></div>

      {/* Main Content */}
      <div className="relative text-center max-w-3xl px-4 z-10">
        <img
          src="https://code.visualstudio.com/assets/images/code-stable.png"
          alt="VS Code"
          className="mx-auto w-40 h-40 object-contain mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">TaskFlow – Organize Your Tasks</h1>
        <p className="text-lg text-gray-300 mb-6">
          Boost your productivity with our simple and effective task manager.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;

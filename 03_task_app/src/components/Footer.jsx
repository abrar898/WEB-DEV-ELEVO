import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 bg-gray-900 text-white text-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[150px] bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-purple-500 rounded-full opacity-20 blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

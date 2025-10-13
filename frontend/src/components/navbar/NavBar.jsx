import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex items-center ">
      {/* Left-aligned brand/logo */}
      <h1 className="text-2xl font-bold mr-10">MyApp</h1>

      {/* Left-aligned links */}
      <div className="flex gap-6">
        <a href="#home" className="hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#services" className="hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}

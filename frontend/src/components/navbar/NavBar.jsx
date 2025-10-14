import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export function ButtonDefault({ label }) {
  return <Button variant="sky">{label}</Button>;
}

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black p-4 flex justify-between px-8 py-4 items-center  rounded-md">
      {/* Left-aligned brand/logo */}
      <h1 className="text-2xl font-bold mr-10">Murajea Webapp</h1>

      {/* Left-aligned links */}
      <div className="flex space-x-8 ">
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
      <div className="flex space-x-3">
        <Button variant="sky">Register</Button>
        <Button variant="secondary">Login</Button>
      </div>
    </nav>
  );
}

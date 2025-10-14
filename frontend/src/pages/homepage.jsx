import React from "react";

export default function HomePage() {
  return (
    <div>
      <main className="ml-64 flex-1 p-8">
        <section id="home" className="h-screen bg-blue-100 mb-8">
          Home Section
        </section>
        <section id="about" className="h-screen bg-white mb-8">
          About Section
        </section>
        <section id="services" className="h-screen bg-gray-100 mb-8">
          Services Section
        </section>
        <section id="contact" className="h-screen bg-gray-200 mb-8">
          Contact Section
        </section>
      </main>
    </div>
  );
}

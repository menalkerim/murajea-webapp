import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, BarChart3 } from "lucide-react";

// ✅ Import your background images from src/assets

import heroBg from "../assets/1.jpg";
import hero from "../assets/2.jpg";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section
        className="text-white py-24 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black/50 py-12 px-4 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Modern Madrasahs with Digital Tools
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            A comprehensive web platform for managing students, teachers, and
            academic activities efficiently.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-blue-600 font-semibold hover:bg-gray-100">
              Register
            </Button>
            <Button
              variant="sky"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ===== KEY BENEFITS ===== */}
      <section
        id="benefits"
        className="py-20 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/60 py-16 px-4 rounded-2xl max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded-xl bg-white/10 backdrop-blur-sm">
              <Users className="w-10 h-10 mx-auto text-sky-400 mb-4" />
              <h3 className="font-semibold text-xl mb-2">For Admins</h3>
              <p>
                Centralized management of teachers, students, and data—all in
                one dashboard.
              </p>
            </div>
            <div className="p-6 shadow rounded-xl bg-white/10 backdrop-blur-sm">
              <BookOpen className="w-10 h-10 mx-auto text-sky-400 mb-4" />
              <h3 className="font-semibold text-xl mb-2">For Teachers</h3>
              <p>
                Seamlessly manage classes, track attendance, and share resources
                with ease.
              </p>
            </div>
            <div className="p-6 shadow rounded-xl bg-white/10 backdrop-blur-sm">
              <BarChart3 className="w-10 h-10 mx-auto text-sky-400 mb-4" />
              <h3 className="font-semibold text-xl mb-2">For Students</h3>
              <p>
                Access learning materials, view grades, and monitor your
                academic progress anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="py-16 px-6 text-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/60 py-16 px-4 rounded-2xl max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {[
              {
                step: "1. Register",
                text: "Sign up as an Admin, Teacher, or Student to access your dashboard.",
              },
              {
                step: "2. Engage",
                text: "Start managing classes, creating content, and tracking attendance.",
              },
              {
                step: "3. Track Progress",
                text: "Monitor performance through analytics, reports, and insights.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex-1">
                <CheckCircle className="w-10 h-10 mx-auto text-sky-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOR TEACHERS & INSTITUTIONS ===== */}
      <section
        className="py-16 px-6 text-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/60 py-16 px-4 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            For Teachers & Institutions
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Simplify academic administration, improve collaboration, and gain
            insights that help students thrive.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-sky-600 text-white hover:bg-sky-700">
              Request a Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "User Management", icon: Users },
            { title: "Course Creation", icon: BookOpen },
            { title: "Attendance Tracking", icon: CheckCircle },
            { title: "Reporting & Analytics", icon: BarChart3 },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <feature.icon className="w-10 h-10 mx-auto text-sky-500 mb-4" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-16 px-6 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/60 py-16 px-4 rounded-2xl max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ustaz Ahmed",
                quote:
                  "This platform has completely transformed how we manage our madrasah. Attendance and grading are now effortless!",
              },
              {
                name: "Admin Fatima",
                quote:
                  "The analytics feature helps us see students’ progress clearly. It’s a must-have tool for every institution.",
              },
              {
                name: "Student Bilal",
                quote:
                  "I can now access lessons anytime and track my grades easily. It’s made learning much more organized.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 shadow rounded-xl bg-white/10 backdrop-blur-sm hover:shadow-lg transition"
              >
                <p className="italic mb-4">“{item.quote}”</p>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Murajea WebApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

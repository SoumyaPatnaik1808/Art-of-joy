"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Courses from "./components/Courses";
import About from "./components/About";
import Journal from "./components/Journal";
import Community from "./components/Community";
import Contact from "./components/Contact";

export default function LandingPage() {
  const handleExploreClick = () => {
    const element = document.getElementById("pillars");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      {/* Floating Header Navbar */}
      <Navbar />

      
      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        <Hero onExploreClick={handleExploreClick} />
        <Pillars />
        <Courses />
        <About />
        <Journal />
        <Community />
        <Contact />
      </main>
    </div>
  );
}

"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Link from "next/link";

export default function CommunityPage() {
  const segments = [
    {
      id: "meditation-circle",
      title: "Event Title One",
      tag: "Tag Text One",
      description: "Event description placeholder text goes here. This explains the detailed background, activities, and goals of the first event type.",
      schedule: "Schedule Time One",
      format: "Format Name One",
      guidance: "Practice guidelines placeholder text goes here. This describes the specific recommendations and format instructions.",
    },
    {
      id: "satsang",
      title: "Event Title Two",
      tag: "Tag Text Two",
      description: "Event description placeholder text goes here. This explains the detailed background, activities, and goals of the second event type.",
      schedule: "Schedule Time Two",
      format: "Format Name Two",
      guidance: "Practice guidelines placeholder text goes here. This describes the specific recommendations and format instructions.",
    },
    {
      id: "retreat",
      title: "Event Title Three",
      tag: "Tag Text Three",
      description: "Event description placeholder text goes here. This explains the detailed background, activities, and goals of the third event type.",
      schedule: "Schedule Time Three",
      format: "Format Name Three",
      guidance: "Practice guidelines placeholder text goes here. This describes the specific recommendations and format instructions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            SECTION SUBTITLE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Section Heading Text
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Section description paragraph text goes here. This explains the layout and context.
          </p>
        </section>

        {/* Detailed Sections */}
        <section className="max-w-5xl mx-auto px-6 space-y-16 mb-20">
          {segments.map((segment) => (
            <div 
              key={segment.id} 
              id={segment.id}
              className="glass-card p-8 md:p-12 rounded-[2.5rem] text-left border border-[#E5E0D2] dark:border-white/5 relative overflow-hidden"
            >
              {/* Decorative side accent line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold-primary via-gold-accent to-transparent" />

              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-2 block">
                {segment.tag}
              </span>
              <h2 className="text-3xl font-serif font-light text-[#1e1b42] dark:text-white mb-6">
                {segment.title}
              </h2>

              <p className="text-xs md:text-sm font-sans text-[#1e1b42] dark:text-white/77 leading-relaxed font-semibold dark:font-light mb-8 max-w-3xl">
                {segment.description}
              </p>

              {/* Grid detail facts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#E5E0D2] dark:border-white/10 pt-8 mt-6 text-xs font-sans tracking-wide">
                <div className="flex flex-col gap-4 text-[#1e1b42]/60 dark:text-white/50">
                  <div>
                    <span className="font-bold text-[#1e1b42] dark:text-white uppercase text-[10px] tracking-wider block mb-1">SCHEDULE:</span>
                    <span>{segment.schedule}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1e1b42] dark:text-white uppercase text-[10px] tracking-wider block mb-1">FORMAT:</span>
                    <span>{segment.format}</span>
                  </div>
                </div>
                
                <div className="text-[#1e1b42]/80 dark:text-white/60 leading-relaxed border-l-0 md:border-l border-[#E5E0D2] dark:border-white/10 pl-0 md:pl-8">
                  <span className="font-bold text-[#1e1b42] dark:text-white uppercase text-[10px] tracking-wider block mb-1">PRACTICE GUIDELINES:</span>
                  <p className="font-semibold dark:font-light">{segment.guidance}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-2.5 rounded-full border border-gold-primary/30 text-[#1e1b42] dark:text-white hover:border-gold-primary hover:bg-gold-primary/10 text-xs font-sans tracking-[0.15em] uppercase font-bold dark:font-semibold transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Register Interest
                </button>
              </div>

            </div>
          ))}
        </section>

      </main>

      <Contact />
    </div>
  );
}

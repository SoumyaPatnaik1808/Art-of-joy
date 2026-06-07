"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Link from "next/link";

export default function CommunityPage() {
  const segments = [
    {
      id: "meditation-circle",
      title: "Meditation Circles",
      tag: "Weekly Collective Silence",
      description: "Our weekly meditation circles are the heartbeat of the fellowship. We gather to anchor ourselves in the silent presence that underlies the noise of our daily thoughts. Sessions are open to all seekers, from beginners to experienced practitioners.",
      schedule: "Wednesdays, 7:00 - 8:15 PM EST",
      format: "Hybrid: Online via Zoom & In-Person at the Catskill Sanctuary",
      guidance: "Includes 15 minutes of guided pranayama (breath control), 40 minutes of silent meditation (Dhyana), and 20 minutes of shared readings and community inquiry.",
    },
    {
      id: "satsang",
      title: "Spiritual Satsang & Chanting",
      tag: "Monthly Gathering of Hearts",
      description: "Satsang literally means 'association with truth'. In these monthly gatherings, we elevate our emotional energies into devotion. Chanting sacred mantras (Kirtan) is a fast and joyful way to quieten the ego's analytical mind and experience unified love.",
      schedule: "First Sunday of every month, 10:00 AM - 12:30 PM EST",
      format: "In-Person (followed by shared organic vegetarian lunch)",
      guidance: "Begins with traditional chants, followed by scripture reading, questions and answers, and concludes with a community meal.",
    },
    {
      id: "retreat",
      title: "Silent Nature Retreats",
      tag: "Seasonal Immersive Contemplation",
      description: "Four times a year, during the equinoxes and solstices, we host residential retreats at our mountain ashram. Participants observe absolute silence, stepping out of their daily roles and routines to sit face-to-face with their true identity.",
      schedule: "Next Retreat: Autumn Equinox, September 18-22, 2026",
      format: "Residential (requires pre-application)",
      guidance: "Features daily yoga, intensive silent sitting, individual guidance from swamis, organic farm-to-table vegetarian meals, and forest walking meditations.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            SACRED GATHERINGS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Shared Presence & Fellowship
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            We walk the path together. Satsang, or keeping spiritual company, provides the acceleration and strength needed to break through deep-seated ego habits.
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

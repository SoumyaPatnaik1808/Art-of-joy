import React from "react";
import Link from "next/link";

export default function Community() {
  const events = [
    {
      title: "Meditation Circles",
      schedule: "Every Wednesday, 7:00 PM EST",
      format: "Online & In-Person",
      description: "Join our global collective for weekly group meditations. Includes breathwork, silent sitting, and a shared space for reflections.",
      actionLabel: "Join Circle",
      link: "/Landing/community#meditation-circle",
    },
    {
      title: "Spiritual Satsang",
      schedule: "First Sunday of the Month, 10:00 AM EST",
      format: "Hybrid Gathering",
      description: "Gather for devotional chanting, scripture readings, and a spiritual discourse. A wonderful space to ask questions and connect.",
      actionLabel: "Register Free",
      link: "/Landing/community#satsang",
    },
    {
      title: "Silent Nature Retreat",
      schedule: "Autumn Equinox, Sept 18-22, 2026",
      format: "Residential Retreat",
      description: "Spend four days in absolute silence in the Catskill Mountains. Organic meals, daily yogic practice, and deep contemplation.",
      actionLabel: "Apply Today",
      link: "/Landing/community#retreat",
    },
  ];

  return (
    <section id="community" className="w-full bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white py-20 md:py-28 relative overflow-hidden border-t border-[#E5E0D2] dark:border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-3">
            COMMUNITY GATHERINGS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e1b42] dark:text-white tracking-wide">
            Shared Presence & Satsang
          </h2>
          
          <div className="flex items-center gap-3 my-5 w-40">
            <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent to-gold-primary/40" />
            <span className="text-gold-dark dark:text-gold-accent text-xs">✦</span>
            <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent to-gold-primary/40" />
          </div>

          <p className="text-sm md:text-base font-serif text-[#1e1b42] dark:text-white/80 max-w-lg font-semibold dark:font-light leading-relaxed">
            Spiritual growth is accelerated in the presence of like-minded seekers. Explore our weekly gatherings and immersive retreats.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-[#1e1b42]/5 dark:bg-white/5 p-8 md:p-10 rounded-[2rem] border border-gold-primary/10 dark:border-white/10 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:border-gold-primary/20 hover:scale-[1.02]"
            >
              <div>
                <span className="text-[9px] font-sans text-gold-dark dark:text-gold-accent tracking-wider font-bold uppercase">
                  {event.format}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1e1b42] dark:text-white mt-2 mb-4">
                  {event.title}
                </h3>
                <div className="text-[11px] font-sans text-[#1e1b42] dark:text-white/90 font-bold tracking-wide mb-6">
                  {event.schedule}
                </div>
                <p className="text-xs md:text-sm font-sans text-[#1e1b42] dark:text-white/70 font-semibold dark:font-light leading-relaxed mb-8">
                  {event.description}
                </p>
              </div>

              <Link
                href={event.link}
                className="w-full py-3 text-center rounded-full border border-[#1e1b42]/40 dark:border-white/20 text-[#1e1b42] dark:text-white hover:bg-[#1e1b42] dark:hover:bg-gold-primary hover:text-white text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 font-bold shadow-sm"
              >
                {event.actionLabel}
              </Link>
            </div>
          ))}
        </div>

        {/* Global Satsang CTA */}
        <div className="mt-16 md:mt-24 text-center border-t border-[#E5E0D2] dark:border-white/10 pt-12">
          <p className="font-serif text-sm italic text-[#1e1b42] dark:text-white/70 font-semibold dark:font-light mb-4">
            Looking for something daily? Join our online meditation space, open 24/7.
          </p>
          <Link
            href="/Landing/community#daily-space"
            className="text-xs font-sans tracking-[0.25em] text-gold-dark dark:text-gold-accent font-bold hover:text-[#1e1b42] dark:hover:text-white transition-colors duration-300 uppercase inline-flex items-center gap-2"
          >
            ENTER THE ONLINE SATSANG HALL
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>

  );
}

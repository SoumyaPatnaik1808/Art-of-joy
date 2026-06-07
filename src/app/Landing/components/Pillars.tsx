import React from "react";

export default function Pillars() {
  const pillarsList = [
    {
      title: "ANCIENT WISDOM",
      description: "Timeless teachings from the Upanishads and Bhagavad Gita.",
      // Custom SVG: Compass / Crosshair target
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-gold-dark/80 group-hover:text-gold-primary transition-colors duration-300">
          <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
          {/* External satellite circle */}
          <circle cx="50" cy="22" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "INNER TRANSFORMATION",
      description: "Meditation, self-inquiry and awareness to know your true Self.",
      // Custom SVG: Concentric circles with dot
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-gold-dark/80 group-hover:text-gold-primary transition-colors duration-300">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "DEVOTION & LOVE",
      description: "The path of Bhakti to open the heart and dissolve the ego.",
      // Custom SVG: Hollow heart
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-gold-dark/80 group-hover:text-gold-primary transition-colors duration-300">
          <path
            d="M50 82C50 82 15 56 15 34C15 19.5 26.5 15 36.5 15C43.5 15 47.5 20 50 24.5C52.5 20 56.5 15 63.5 15C73.5 15 85 19.5 85 34C85 56 50 82 50 82Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "LIVING AWARENESS",
      description: "Awaken clarity, purpose and inner freedom in every moment.",
      // Custom SVG: Sun with rays
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-gold-dark/80 group-hover:text-gold-primary transition-colors duration-300">
          <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Sun Rays */}
          <line x1="50" y1="12" x2="50" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="78" x2="50" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="50" x2="22" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="78" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="23.5" y1="23.5" x2="30.5" y2="30.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="69.5" y1="69.5" x2="76.5" y2="76.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="76.5" y1="23.5" x2="69.5" y2="30.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="30.5" y1="69.5" x2="23.5" y2="76.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pillars" className="w-full bg-[#FAF9F6] dark:bg-[#0D0F12] text-[#111111] dark:text-white/90 py-16 md:py-24 border-t border-[#E5E0D2] dark:border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D2] dark:divide-gold-primary/10">
          {pillarsList.map((pillar, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-8 transition-all duration-500 hover:bg-[#EAE5DB]/30 dark:hover:bg-white/5"
            >
              {/* Icon Container */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#000000] dark:text-white mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm font-sans text-[#222222] dark:text-white/70 font-semibold dark:font-light leading-relaxed max-w-[240px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

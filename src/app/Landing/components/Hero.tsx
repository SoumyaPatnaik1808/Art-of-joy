import React from "react";
import Image from "next/image";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-dark-bg text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-img-1.png"
          alt="Art of Living Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-105 animate-fade-in"
        />
        {/* Subtle radial/linear gradient overlay to darken top and bottom, and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-16 flex flex-col items-start justify-center">
        <div className="max-w-xl text-left select-none animate-fade-in-up">
          {/* Main Typography Title */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light tracking-tight leading-[1.05] text-white">
            Hero Heading
            <span className="block mt-1">Sub-heading Text</span>
            <span className="block mt-2 italic text-gold-accent font-normal font-serif">
              Italic Heading
            </span>
          </h1>

          {/* Star Divider Section */}
          <div className="flex items-center gap-4 my-8 md:my-10 w-full max-w-md">
            <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent to-gold-primary/60" />
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 text-gold-accent animate-pulse" 
              fill="currentColor"
            >
              <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
            </svg>
            <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent to-gold-primary/60" />
          </div>

          {/* Hero Description */}
          <p className="text-base md:text-lg lg:text-xl font-serif text-white/80 leading-relaxed font-light max-w-lg mb-8 tracking-wide">
            Hero description text goes here. This is a descriptive paragraph placeholder.
          </p>
          
          {/* Scroll Call to Action */}
          <button
            onClick={onExploreClick}
            className="group flex items-center gap-3 text-gold-accent hover:text-white transition-colors duration-300 font-sans text-xs tracking-[0.25em] bg-transparent border-none cursor-pointer mt-4"
          >
            <span>BUTTON TEXT</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

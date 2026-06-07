import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white py-20 md:py-28 relative overflow-hidden border-t border-[#E5E0D2] dark:border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Container (Image) - 5 Cols */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elegant double-border gold frame around image */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border border-gold-primary/20">
              {/* Gold Inner Frame overlay on hover */}
              <div className="absolute inset-4 border border-gold-accent/40 rounded-[1.5rem] z-10 pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-gold-primary" />
              
              <Image
                src="/hero-img-2.png"
                alt="Philosophy of Consciousness"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
            </div>
            
            {/* Background floating geometric element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold-primary/10 rounded-full pointer-events-none -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gold-primary/10 rounded-full pointer-events-none -z-10" />
          </div>

          {/* Text Content - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-[10px] font-sans tracking-[0.3em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-3">
              THE MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e1b42] dark:text-white tracking-wide leading-tight mb-6">
              The Path to Joyful Awakening
            </h2>
            
            <p className="text-xl md:text-2xl font-serif italic text-gold-dark dark:text-gold-accent font-medium leading-relaxed mb-8 border-l-2 border-gold-primary pl-6 my-4">
              "Your true nature is not sorrow, agitation, or fear. You are the deep space of silence, clarity, and limitless joy."
            </p>

            <div className="space-y-6 text-sm md:text-base font-serif text-[#1e1b42] dark:text-white/70 leading-relaxed font-semibold dark:font-light">
              <p>
                We believe that modern life, with all its speeds and stimulations, can often overshadow the natural radiance of the mind. By integrating the timeless philosophy of non-duality (Advaita), the active devotion of Bhakti, and the silent, structured paths of meditation, we guide you back to your true self.
              </p>
              <p>
                Our mission is simple: to make the deepest spiritual truths accessible, practical, and livable. We do not ask you to withdraw from the world, but to enter it fully, with a heart overflowing with love and a mind rooted in clarity.
              </p>
            </div>

            {/* Signature or decorative emblem */}
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/Landing/about"
                className="px-8 py-3 rounded-full bg-[#1e1b42] dark:bg-gold-primary hover:bg-gold-dark dark:hover:bg-gold-accent text-white transition-all duration-300 text-xs font-sans tracking-[0.2em] uppercase shadow-lg font-bold"
              >
                Read Our Story
              </Link>
              
              <div className="flex flex-col text-left font-serif text-xs md:text-sm italic text-[#1e1b42]/80 dark:text-white/60">
                <span className="font-bold text-[#1e1b42] dark:text-white">Art of Living Fellowship</span>
                <span>Est. 2026</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

  );
}

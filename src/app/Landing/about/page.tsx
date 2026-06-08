"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            SECTION SUBTITLE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Section Heading Text
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Section description paragraph text goes here. This introduces the page content.
          </p>
        </section>

        {/* Core Philosophy Section */}
        <section className="bg-[#1e1b42]/5 dark:bg-white/5 py-20 border-t border-b border-gold-primary/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-light text-gold-dark dark:text-gold-accent mb-6">
                  Section Heading Text
                </h2>
                <div className="space-y-6 text-sm font-sans text-[#1e1b42] dark:text-white/70 leading-relaxed font-semibold dark:font-light">
                  <p>
                    Paragraph text placeholder for the first block. This describes the core concept details and **Bold Text Highlight** features.
                  </p>
                  <p>
                    Paragraph text placeholder for the second block. This explains other **Bold Text Highlight** details, **Bold Text Highlight** elements, and **Bold Text Highlight** targets.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-gold-primary/20">
                <Image
                  src="/hero-img-2.png"
                  alt="Placeholder Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Pillars of Practice */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-serif font-light text-center text-[#1e1b42] dark:text-white mb-16">
            Section Heading Text
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stream 1 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                CARD TAG ONE
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#1e1b42] dark:text-white">Card Title One</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                Card description text placeholder goes here. This explains the specific focus and context of the card details.
              </p>
            </div>

            {/* Stream 2 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                CARD TAG TWO
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#1e1b42] dark:text-white">Card Title Two</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                Card description text placeholder goes here. This explains the specific focus and context of the card details.
              </p>
            </div>

            {/* Stream 3 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                CARD TAG THREE
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#1e1b42] dark:text-white">Card Title Three</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                Card description text placeholder goes here. This explains the specific focus and context of the card details.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}

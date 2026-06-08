"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32">
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-16 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            SECTION SUBTITLE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Section Heading Text
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Section description paragraph text goes here. This introduces the contact options below.
          </p>
        </section>

        {/* Support Options */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card p-8 rounded-3xl border border-[#E5E0D2] dark:border-white/5">
              <h3 className="text-xl font-serif font-light text-gold-dark dark:text-gold-accent mb-4">Card Title One</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed mb-4 font-semibold dark:font-light">
                Card description text placeholder goes here. This explains the specific focus and context of the card details.
              </p>
              <ul className="space-y-2 text-xs font-sans text-[#1e1b42] dark:text-white/80 font-semibold dark:font-light">
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-[#E5E0D2] dark:border-white/5">
              <h3 className="text-xl font-serif font-light text-gold-dark dark:text-gold-accent mb-4">Card Title Two</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed mb-4 font-semibold dark:font-light">
                Card description text placeholder goes here. This explains the specific focus and context of the card details.
              </p>
              <ul className="space-y-2 text-xs font-sans text-[#1e1b42] dark:text-white/80 font-semibold dark:font-light">
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
                <li>• **Bold Item**: Descriptive list item text placeholder goes here.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Embed Contact Form & Footer */}
        <Contact />

      </main>
    </div>
  );
}

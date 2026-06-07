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
            SUPPORT & ACCESS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Digital Support & Media Center
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Have questions about our digital courses, audio libraries, or subscription plans? Our media support team is ready to assist you on your spiritual path.
          </p>
        </section>

        {/* Support Options */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card p-8 rounded-3xl border border-[#E5E0D2] dark:border-white/5">
              <h3 className="text-xl font-serif font-light text-gold-dark dark:text-gold-accent mb-4">Devotional Media Support</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed mb-4 font-semibold dark:font-light">
                Need help accessing your audio downloads, chanting audio streams, or video files? Or having issues with your member dashboard?
              </p>
              <ul className="space-y-2 text-xs font-sans text-[#1e1b42] dark:text-white/80 font-semibold dark:font-light">
                <li>• **Instant Streaming**: Accessible 24/7 on desktop and mobile web.</li>
                <li>• **Offline Downloads**: High-fidelity FLAC & MP3 files available for offline practice.</li>
                <li>• **Account Access**: Assistance with passwords, subscriptions, and billing queries.</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-[#E5E0D2] dark:border-white/5">
              <h3 className="text-xl font-serif font-light text-gold-dark dark:text-gold-accent mb-4">Group Licensing & Media Kits</h3>
              <p className="text-xs font-sans text-[#1e1b42] dark:text-white/60 leading-relaxed mb-4 font-semibold dark:font-light">
                We offer discounted bulk licenses and physical resource packages for temples, spiritual centers, schools, and study groups.
              </p>
              <ul className="space-y-2 text-xs font-sans text-[#1e1b42] dark:text-white/80 font-semibold dark:font-light">
                <li>• **Group Discounts**: Custom pricing for orders of 10+ course enrollments.</li>
                <li>• **Media Kits**: High-quality physical CDs, USB drives, and booklets for distribution.</li>
                <li>• **Public Broadcasts**: Inquire about using our chants in public yoga sessions or gatherings.</li>
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

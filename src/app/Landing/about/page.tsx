"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] dark:bg-[#0D0F12] text-[#111111] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#0D0F12]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            ABOUT THE FELLOWSHIP
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#111111] dark:text-white tracking-wide mb-6">
            Awakening to Your True Nature
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#222222] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Founded with a vision to integrate ancient Himalayan wisdom into the fabric of modern life, the Art of Living Fellowship is a sanctuary for seekers of clarity, love, and inner freedom.
          </p>
        </section>

        {/* Core Philosophy Section */}
        <section className="bg-[#EAE5DB]/40 dark:bg-[#12161A] py-20 border-t border-b border-gold-primary/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-light text-gold-dark dark:text-gold-accent mb-6">
                  Our Spiritual Philosophy
                </h2>
                <div className="space-y-6 text-sm font-sans text-[#222222] dark:text-white/70 leading-relaxed font-semibold dark:font-light">
                  <p>
                    We teach the non-dual truth of **Advaita Vedanta**—that there is only one source of consciousness, and your true self (Atman) is identical to it. Sorrow and distress arise from the illusion of separation.
                  </p>
                  <p>
                    Rather than an intellectual philosophy, we present this as a lived reality. Through **Meditation (Dhyana)**, we stabilize the mind to witness this truth; through **Devotion (Bhakti)**, we melt the emotional boundaries of the ego; and through **Action (Karma)**, we express this unity in selfless service to the world.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-gold-primary/20">
                <Image
                  src="/hero-img-2.png"
                  alt="Silent Meditation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Pillars of Practice */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-serif font-light text-center text-[#111111] dark:text-white mb-16">
            The Three Streams of the Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stream 1 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                01. DHYANA YOGA
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#111111] dark:text-white">Silent Meditation</h3>
              <p className="text-xs font-sans text-[#222222] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                The practice of sitting in stillness and drawing the attention inward. By observing the thoughts without judgment, the mind settles into its source, revealing the underlying peace of pure awareness.
              </p>
            </div>

            {/* Stream 2 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                02. JNANA YOGA
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#111111] dark:text-white">Self-Inquiry</h3>
              <p className="text-xs font-sans text-[#222222] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                Investigating the question "Who am I?". Through systematic study of the Upanishads and guided contemplation, we dissect the layers of the ego to discover the unshakeable witness within.
              </p>
            </div>

            {/* Stream 3 */}
            <div className="glass-card p-8 rounded-3xl text-left border border-[#E5E0D2] dark:border-white/5 hover:border-gold-primary/25 transition-all duration-300">
              <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest font-bold dark:font-semibold uppercase mb-4 block">
                03. BHAKTI YOGA
              </span>
              <h3 className="text-xl font-serif font-light mb-4 text-[#111111] dark:text-white">Devotional Union</h3>
              <p className="text-xs font-sans text-[#222222] dark:text-white/60 leading-relaxed font-semibold dark:font-light">
                Channeling human emotions into divine love. Through kirtan (devotional singing), prayer, and centering the heart on the divine presence in all beings, the ego's isolation naturally dissolves.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}

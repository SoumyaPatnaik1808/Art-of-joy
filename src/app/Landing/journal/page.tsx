"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export default function JournalPage() {
  const essays = [
    {
      id: "silence",
      title: "The Art of Meditation: Entering the Silence Within",
      subtitle: "Meditation is not about forcing the mind to be quiet; it is about discovering the silence that is already present.",
      author: "Swami Priyananda",
      date: "June 1, 2026",
      readTime: "6 min read",
      content: [
        "Many seekers approach meditation as a battle. They sit down, close their eyes, and immediately try to wage war against their thoughts. When the thoughts persist, they conclude that they are 'bad at meditation' and give up. But this approach is based on a fundamental misunderstanding.",
        "The mind, by its very nature, produces thoughts. Expecting it to stop producing thoughts is like expecting the ocean to stop producing waves. Meditation is not about forcing the waves to subside; it is about shifting your identification from the wave to the deep water underneath.",
        "Underneath every thought, there is a space of silent awareness. This silence is not an empty void; it is a full, vibrant, and peaceful presence. It is your true nature (Atman). When you sit for meditation, instead of fighting the thoughts, simply observe them. Let them arise, let them play, and let them go. Become the witness of the thoughts, rather than their owner.",
        "As you anchor yourself in the position of the witness, you will notice that the space between thoughts begins to widen. In that space, the natural silence of your consciousness shines through. This silence does not depend on external conditions. It is present in the middle of noise, in the middle of work, and in the middle of life. It is your ultimate sanctuary.",
      ],
    },
    {
      id: "bhakti-surrender",
      title: "Bhakti: The Path of Pure Heart-Centered Surrender",
      subtitle: "How devotional practices, chanting, and opening the heart can dissolve the ego and connect us to universal consciousness.",
      author: "Ma Sharada",
      date: "May 24, 2026",
      readTime: "8 min read",
      content: [
        "The path of Jnana (wisdom) is often described as a sharp razor's edge. It requires a highly refined intellect and intense mental discipline. But for many seekers, the intellect can become a cage, full of arguments, debates, and dry concepts. This is where Bhakti, the path of devotion, offers a sweet and direct alternative.",
        "Bhakti does not ask you to suppress or analyze your emotions. Instead, it asks you to channel them completely toward the divine. Whether you feel love, longing, or even anger, you offer those feelings to the source of all being. In Bhakti, the emotion is not the obstacle; it is the vehicle.",
        "Chanting the sacred names (Kirtan) is a central practice of Bhakti. When we chant, the repetitive, rhythmic vibration of the sound bypasses the logical mind and goes straight to the heart. The boundaries of the ego—the sense of 'I' and 'mine'—begin to soften. We feel ourselves expanding into a larger field of collective love.",
        "Surrender (Prapatti) is the final stage of Bhakti. It is the understanding that our small, separate ego is not the doer. When we surrender our actions, our fears, and our lives to the divine presence, a profound relaxation occurs. We no longer have to carry the weight of the universe. We realize that we are held, loved, and guided at every moment.",
      ],
    },
    {
      id: "advaita-daily",
      title: "Advaita in Daily Life: Finding the Silent Witness",
      subtitle: "Discover how non-dual wisdom can be practiced in the middle of office chaos, busy cities, and normal relationships.",
      author: "Acharya Chinmayan",
      date: "May 15, 2026",
      readTime: "10 min read",
      content: [
        "Advaita Vedanta is often criticized as being too abstract and detached. It is easy to feel the unity of all things while sitting in a cave in the Himalayas, but what happens when you are stuck in traffic, or when your boss is yelling at you? Can Advaita be practiced in the market?",
        "The answer is yes. In fact, if Advaita cannot be practiced in the market, it is not a complete philosophy. The core teaching of Advaita is that the world is a play of names and forms (Maya), but the underlying substance of everything is the same consciousness (Brahman).",
        "In daily life, this translation means practicing the 'witness state' (Sakshi Bhava). When you are in a stressful meeting, notice the physical sensations of stress arising in your body. Notice the thoughts of anger or defensiveness arising in your mind. But do not identify with them. Do not say, 'I am angry.' Say, 'I observe anger arising in the mind.'",
        "This simple shift in language creates a space of freedom. You realize that you are not the changing states of the mind; you are the unchanging space in which the mind arises. From this perspective, the meeting, the traffic, and the boss are all temporary waves on the surface of your vast, silent awareness. You can participate in the world fully, without losing your peace.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            SACRED REFLECTIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            The Journal Essays
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Curated essays, dialogues, and insights from our teachers, designed to inspire your daily practice and contemplation.
          </p>
        </section>

        {/* Essays List */}
        <section className="max-w-3xl mx-auto px-6 space-y-20 mb-20">
          {essays.map((essay) => (
            <article 
              key={essay.id} 
              id={essay.id}
              className="border-t border-[#E5E0D2] dark:border-white/10 pt-16 text-left"
            >
              {/* Meta details */}
              <div className="flex items-center gap-4 text-[10px] font-sans text-gold-dark dark:text-gold-accent font-bold dark:font-semibold tracking-wider mb-6">
                <span>BY {essay.author.toUpperCase()}</span>
                <span className="w-1.5 h-1.5 bg-[#1e1b42]/20 dark:bg-white/20 rounded-full" />
                <span className="text-[#1e1b42]/70 dark:text-white/50">{essay.date}</span>
                <span className="w-1.5 h-1.5 bg-[#1e1b42]/20 dark:bg-white/20 rounded-full" />
                <span className="text-[#1e1b42]/70 dark:text-white/50">{essay.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug mb-4 text-[#1e1b42] dark:text-white">
                {essay.title}
              </h2>

              {/* Subtitle */}
              <p className="text-sm md:text-base font-serif italic text-[#1e1b42] dark:text-white/70 leading-relaxed font-semibold dark:font-light mb-8 pl-4 border-l border-gold-primary/30">
                {essay.subtitle}
              </p>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-sm md:text-base font-serif text-[#1e1b42] dark:text-white/85 leading-relaxed font-semibold dark:font-light">
                {essay.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

      </main>

      <Contact />
    </div>
  );
}

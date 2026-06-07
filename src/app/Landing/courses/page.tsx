"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Image from "next/image";

export default function CoursesPage() {
  const coursesDetail = [
    {
      id: "upanishads",
      title: "The Upanishads: Philosophy of Non-Duality",
      subtitle: "Study of Mandukya, Katha, and Isha Upanishads",
      image: "/upanishad.png",
      tag: "12-Week Immersion",
      overview: "The Upanishads represent the peak of ancient Indian philosophical thought, focusing on the nature of reality and the self. In this course, we examine three core Upanishads line-by-line, exploring non-dual realization (Advaita) in a practical, experiential way.",
      modules: [
        "Introduction to Vedanta and the four Vedas",
        "The Katha Upanishad: Dialogue with Death and the nature of the Soul",
        "The Isha Upanishad: Seeing the Divine in everything",
        "The Mandukya Upanishad: The four states of consciousness (Om)",
      ],
      instructor: "Swami Priyananda",
      schedule: "Tuesdays, 7:30 - 9:00 PM EST",
    },
    {
      id: "gita",
      title: "The Bhagavad Gita: Science of Self-Realization",
      subtitle: "Integrating Karma, Jnana, and Bhakti Yoga in Daily Life",
      image: "/bhagvat-gita.png",
      tag: "16-Week Foundation",
      overview: "Set on the battlefield of Kurukshetra, the Bhagavad Gita is a metaphor for the inner battles we face every day. This course decodes Sri Krishna's teachings on selfless action, mental equilibrium, and absolute surrender, giving you a roadmap for peaceful living in a chaotic world.",
      modules: [
        "Chapter 1 & 2: The crisis of Arjuna and the immortality of the Self",
        "Karma Yoga: The secret of work without binding attachment",
        "Jnana Yoga: Discerning the real from the unreal",
        "Bhakti Yoga & Meditation: Cultivating focus and divine connection",
      ],
      instructor: "Acharya Chinmayan",
      schedule: "Thursdays, 8:00 - 9:30 PM EST",
    },
    {
      id: "bhakti",
      title: "Bhakti Traditions: The Path of Devotion & Love",
      subtitle: "Satsang, Kirtan, and Heart-Centered Wisdom",
      image: "/bhakti.png",
      tag: "8-Week Journey",
      overview: "Bhakti Yoga is the path of refining our emotional energy into supreme love. This course studies the lives of great Bhakti saints (Rumi, Mirabai, Kabir, Chaitanya) and teaches devotional practices, including mantra chanting, storytelling, and sacred art, to open the spiritual heart.",
      modules: [
        "The psychology of devotion: From ego-love to divine-love",
        "Nine forms of Bhakti (Nava Vidha Bhakti)",
        "The lives and songs of the mystic poets",
        "Kirtan and the power of sacred sound vibration",
      ],
      instructor: "Ma Sharada & Kirtan Collective",
      schedule: "Saturdays, 10:30 AM - 12:30 PM EST",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EBE2] dark:bg-[#101119] text-[#1e1b42] dark:text-white overflow-x-hidden selection:bg-gold-primary selection:text-[#1e1b42]">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase mb-4 block">
            WISDOM TRANSMISSION
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Scripture & Study Programs
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Our structured courses combine intellectual study with deep experiential practice. Browse our active curriculums and find your study path.
          </p>
        </section>

        {/* Detailed Courses Sections */}
        <section className="space-y-24 max-w-6xl mx-auto px-6 mb-20">
          {coursesDetail.map((course, idx) => (
            <div 
              key={course.id} 
              id={course.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#E5E0D2] dark:border-white/10 pt-16 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column - 5 Cols */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-gold-primary/20 shadow-2xl group">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-6 left-6 bg-[#F2EBE2]/80 dark:bg-[#101119]/80 border border-gold-primary/30 text-gold-dark dark:text-gold-accent text-[9px] font-sans tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
                    {course.tag}
                  </span>
                </div>
              </div>

              {/* Text Column - 7 Cols */}
              <div className="lg:col-span-7 flex flex-col text-left">
                <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent tracking-widest uppercase mb-2 font-bold dark:font-normal">
                  {course.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1e1b42] dark:text-white mb-6">
                  {course.title}
                </h2>
                
                <p className="text-xs md:text-sm font-sans text-[#1e1b42] dark:text-white/77 leading-relaxed font-semibold dark:font-light mb-8">
                  {course.overview}
                </p>

                {/* Modules */}
                <h4 className="text-xs font-sans tracking-[0.2em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-4">
                  CURRICULUM OUTLINE
                </h4>
                <ul className="space-y-3 font-serif text-xs md:text-sm text-[#1e1b42] dark:text-white/80 mb-8 pl-4 border-l border-gold-primary/20 font-semibold dark:font-light">
                  {course.modules.map((module, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold-dark dark:text-gold-accent mt-1">✦</span>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>

                {/* Details Footer */}
                <div className="flex flex-wrap items-center justify-between border-t border-[#E5E0D2] dark:border-white/10 pt-6 gap-6">
                  <div className="flex flex-col text-left font-sans text-xs text-[#1e1b42]/60 dark:text-white/50 tracking-wider">
                    <span>INSTRUCTOR: <strong className="text-[#1e1b42] dark:text-white font-bold dark:font-medium">{course.instructor}</strong></span>
                    <span className="mt-1">SCHEDULE: <strong className="text-[#1e1b42] dark:text-white font-bold dark:font-medium">{course.schedule}</strong></span>
                  </div>
                  
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-2.5 rounded-full bg-gold-primary hover:bg-gold-accent text-[#1e1b42] text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-md"
                  >
                    Enroll / Inquire
                  </button>
                </div>
              </div>

            </div>
          ))}
        </section>

      </main>

      <Contact />
    </div>
  );
}

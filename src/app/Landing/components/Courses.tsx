import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const coursesList = [
    {
      title: "The Upanishads",
      subtitle: "The Philosophy of Non-Duality",
      image: "/upanishad.png",
      description: "Delve into the core teachings of Advaita Vedanta. Explore the relationship between the individual soul (Atman) and the ultimate reality (Brahman) to awaken true self-realization.",
      tag: "Wisdom",
      link: "/Landing/courses#upanishads",
    },
    {
      title: "Bhagavad Gita",
      subtitle: "The Science of Self-Realization",
      image: "/bhagvat-gita.png",
      description: "Unravel Sri Krishna's teachings on duty, yoga, and devotion on the battlefield of life. Learn practical wisdom for achieving inner stability, clarity, and peace.",
      tag: "Action",
      link: "/Landing/courses#gita",
    },
    {
      title: "Bhakti Traditions",
      subtitle: "The Path of Devotion & Love",
      image: "/bhakti.png",
      description: "Cultivate pure love and surrender. Connect deeply with the divine through chanting, stories of saints, and heart-centered practices designed to dissolve the separation of the ego.",
      tag: "Devotion",
      link: "/Landing/courses#bhakti",
    },
  ];

  return (
    <section id="courses" className="w-full bg-[#FAF9F6] dark:bg-[#0D0F12] text-[#111111] dark:text-white/90 py-20 md:py-28 relative overflow-hidden border-t border-[#E5E0D2] dark:border-gold-primary/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-[10px] font-sans tracking-[0.3em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-3">
            WISDOM TRANSMISSION
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#000000] dark:text-white tracking-wide">
            Sacred Teachings & Courses
          </h2>
          
          {/* Subtle star line divider */}
          <div className="flex items-center gap-3 my-5 w-40">
            <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent to-gold-primary/40" />
            <span className="text-gold-dark dark:text-gold-accent text-xs">✦</span>
            <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent to-gold-primary/40" />
          </div>
          
          <p className="text-sm md:text-base font-serif text-[#222222] dark:text-white/80 max-w-lg font-semibold dark:font-light leading-relaxed">
            Ancient scriptures translated into practical tools for self-inquiry, mental clarity, and spiritual awakening.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {coursesList.map((course, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full transition-all duration-500 hover:translate-y-[-8px] hover:border-gold-primary/30 hover:shadow-xl"
            >
              {/* Image Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Image dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#EAE5DB] dark:bg-[#0D0F12]/80 border border-gold-primary/30 text-[#000000] dark:text-white text-[9px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                  {course.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[10px] font-sans text-gold-dark dark:text-gold-accent font-bold tracking-widest uppercase mb-1">
                  {course.subtitle}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#000000] dark:text-white mb-4 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-xs md:text-sm font-sans text-[#222222] dark:text-white/70 font-semibold dark:font-light leading-relaxed mb-8 flex-1">
                  {course.description}
                </p>
                
                {/* Learn More link */}
                <Link 
                  href={course.link} 
                  className="flex items-center gap-2 text-[10px] font-sans text-[#111111] dark:text-white/95 tracking-[0.2em] font-bold group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors duration-300 uppercase mt-auto self-start"
                >
                  Explore Teachings
                  <svg 
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}

import React from "react";
import Link from "next/link";

export default function Journal() {
  const articles = [
    {
      title: "The Art of Meditation: Entering the Silence Within",
      subtitle: "Meditation is not about forcing the mind to be quiet; it is about discovering the silence that is already present.",
      date: "June 1, 2026",
      readTime: "6 min read",
      author: "Swami Priyananda",
      category: "MEDITATION",
      link: "/Landing/journal#silence",
    },
    {
      title: "Bhakti: The Path of Pure Heart-Centered Surrender",
      subtitle: "How devotional practices, chanting, and opening the heart can dissolve the ego and connect us to universal consciousness.",
      date: "May 24, 2026",
      readTime: "8 min read",
      author: "Ma Sharada",
      category: "BHAKTI",
      link: "/Landing/journal#bhakti-surrender",
    },
    {
      title: "Advaita in Daily Life: Finding the Silent Witness",
      subtitle: "Discover how non-dual wisdom can be practiced in the middle of office chaos, busy cities, and normal relationships.",
      date: "May 15, 2026",
      readTime: "10 min read",
      author: "Acharya Chinmayan",
      category: "PHILOSOPHY",
      link: "/Landing/journal#advaita-daily",
    },
  ];

  return (
    <section id="journal" className="w-full bg-[#FAF9F6] dark:bg-[#0D0F12] text-[#111111] dark:text-white py-20 md:py-28 relative overflow-hidden border-t border-[#E5E0D2] dark:border-gold-primary/10">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-primary/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E5E0D2] dark:border-white/10 pb-8">
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-sans tracking-[0.3em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-3">
              CONTEMPLATIVE READS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#000000] dark:text-white tracking-wide">
              The Devotional Journal
            </h2>
          </div>
          <Link
            href="/Landing/journal"
            className="group mt-4 md:mt-0 flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-gold-dark dark:text-gold-accent hover:text-[#000000] dark:hover:text-white transition-colors duration-300 uppercase self-start font-bold"
          >
            View All Essays
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Newspaper Layout Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E0D2] dark:divide-white/10">
          {articles.map((article, idx) => (
            <article 
              key={idx} 
              className={`flex flex-col justify-between group ${
                idx > 0 ? "pt-10 lg:pt-0 lg:pl-8" : "pb-10 lg:pb-0"
              }`}
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] font-sans text-gold-dark dark:text-gold-accent font-bold tracking-wider mb-4">
                  <span>{article.category}</span>
                  <span className="w-1.5 h-1.5 bg-[#1E1A15]/20 dark:bg-white/20 rounded-full" />
                  <span className="text-[#5A5245] dark:text-white/50">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold leading-snug mb-4 text-[#000000] dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors duration-300">
                  <Link href={article.link}>
                    {article.title}
                  </Link>
                </h3>

                {/* Subtitle */}
                <p className="text-xs md:text-sm font-sans text-[#222222] dark:text-white/70 font-semibold dark:font-light leading-relaxed mb-8">
                  {article.subtitle}
                </p>
              </div>

              {/* Author & Date */}
              <div className="flex items-center justify-between border-t border-[#E5E0D2] dark:border-white/10 pt-6 mt-4">
                <div className="flex flex-col text-left">
                  <span className="text-xs font-serif text-[#000000] dark:text-white font-bold">{article.author}</span>
                  <span className="text-[10px] font-sans text-[#5A5245] dark:text-white/50 font-semibold tracking-wider mt-0.5">{article.date}</span>
                </div>
                <Link
                  href={article.link}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#1E1A15]/20 dark:border-white/20 group-hover:border-gold-dark dark:group-hover:border-gold-accent text-[#1E1A15] dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-accent transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>


  );
}

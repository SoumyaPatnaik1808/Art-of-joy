"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export default function JournalPage() {
  const essays = [
    {
      id: "silence",
      title: "Article Title One",
      subtitle: "Article Subtitle One. Description for the first article layout goes here.",
      author: "Author Name",
      date: "Date",
      readTime: "Duration",
      content: [
        "Paragraph text placeholder for the first article. This is the first paragraph describing the details of the layout.",
        "Paragraph text placeholder for the first article. This is the second paragraph describing the details of the layout.",
        "Paragraph text placeholder for the first article. This is the third paragraph describing the details of the layout.",
        "Paragraph text placeholder for the first article. This is the fourth paragraph describing the details of the layout.",
      ],
    },
    {
      id: "bhakti-surrender",
      title: "Article Title Two",
      subtitle: "Article Subtitle Two. Description for the second article layout goes here.",
      author: "Author Name",
      date: "Date",
      readTime: "Duration",
      content: [
        "Paragraph text placeholder for the second article. This is the first paragraph describing the details of the layout.",
        "Paragraph text placeholder for the second article. This is the second paragraph describing the details of the layout.",
        "Paragraph text placeholder for the second article. This is the third paragraph describing the details of the layout.",
        "Paragraph text placeholder for the second article. This is the fourth paragraph describing the details of the layout.",
      ],
    },
    {
      id: "advaita-daily",
      title: "Article Title Three",
      subtitle: "Article Subtitle Three. Description for the third article layout goes here.",
      author: "Author Name",
      date: "Date",
      readTime: "Duration",
      content: [
        "Paragraph text placeholder for the third article. This is the first paragraph describing the details of the layout.",
        "Paragraph text placeholder for the third article. This is the second paragraph describing the details of the layout.",
        "Paragraph text placeholder for the third article. This is the third paragraph describing the details of the layout.",
        "Paragraph text placeholder for the third article. This is the fourth paragraph describing the details of the layout.",
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
            SECTION SUBTITLE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide mb-6">
            Section Heading Text
          </h1>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto my-6" />
          <p className="text-base md:text-lg font-serif text-[#1e1b42] dark:text-white/80 leading-relaxed font-semibold dark:font-light">
            Section description paragraph text goes here. This introduces the list of articles.
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

"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit formState to a backend
    console.log("Submitted Inquiries:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", interest: "general", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full bg-[#F2EBE2] text-[#1e1b42] dark:bg-[#101119] dark:text-white py-20 md:py-28 relative overflow-hidden border-t border-[#E5E0D2] dark:border-gold-primary/10">
      {/* Background visual element */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gold-primary/3 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold-primary/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context Info - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-[10px] font-sans tracking-[0.3em] text-gold-dark dark:text-gold-accent font-bold uppercase mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1e1b42] dark:text-white tracking-wide leading-tight mb-6">
              Begin the Journey
            </h2>
            <p className="text-sm md:text-base font-serif text-[#1e1b42]/80 dark:text-white/70 leading-relaxed font-light mb-8 max-w-sm">
              If you feel called to explore these devotional media downloads, online courses, or audio packages, we are here to support your practice.
            </p>

            <div className="space-y-6 font-sans text-xs md:text-sm text-[#1e1b42]/80 dark:text-white/60 tracking-wider">
              {/* Store & Support */}
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-dark dark:text-gold-accent mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#1e1b42] dark:text-white">Devotional Bookstore & Media</span>
                  <span>Online Store Support</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-dark dark:text-gold-accent mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#1e1b42] dark:text-white">Media Support Email</span>
                  <a href="mailto:support@artofliving.org" className="hover:text-gold-dark dark:hover:text-gold-accent transition-colors duration-300">support@artofliving.org</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Inquiry Form - 7 Cols */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#1e1b42]/5 border border-gold-primary/10 dark:bg-white/5 dark:border-white/10 p-8 md:p-10 rounded-[2rem] shadow-xl backdrop-blur-md">
              {submitted ? (
                <div className="py-16 text-center animate-fade-in">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-gold-dark dark:text-gold-accent mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-serif text-[#1e1b42] dark:text-white mb-2">Inquiry Received</h3>
                  <p className="text-xs md:text-sm font-sans text-[#1e1b42]/80 dark:text-white/60">
                    Thank you for reaching out. Our support team will review your inquiry and reply soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-[10px] font-sans tracking-widest text-gold-dark dark:text-gold-accent font-semibold uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-[#E5E0D2] text-[#1e1b42] dark:bg-white/5 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold-primary transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-[10px] font-sans tracking-widest text-gold-dark dark:text-gold-accent font-semibold uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-[#E5E0D2] text-[#1e1b42] dark:bg-white/5 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold-primary transition-colors duration-300"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Topic */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="interest" className="text-[10px] font-sans tracking-widest text-gold-dark dark:text-gold-accent font-semibold uppercase mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#E5E0D2] text-[#1e1b42] dark:bg-black/90 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold-primary transition-colors duration-300 cursor-pointer"
                    >
                      <option value="general">General Support</option>
                      <option value="courses">Online Course Enrollment</option>
                      <option value="audio">Audio & Chant Downloads</option>
                      <option value="subscriptions">Subscriptions & Memberships</option>
                      <option value="bookstore">Bookstore Orders & Bulk Discounts</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="message" className="text-[10px] font-sans tracking-widest text-gold-dark dark:text-gold-accent font-semibold uppercase mb-2">
                      Message / Question
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-[#E5E0D2] text-[#1e1b42] dark:bg-white/5 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold-primary transition-colors duration-300 resize-none"
                      placeholder="Share what brought you here..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-primary hover:bg-gold-accent text-[#1e1b42] font-semibold text-xs font-sans tracking-[0.25em] rounded-xl transition-all duration-300 uppercase shadow-lg shadow-gold-primary/10 hover:shadow-gold-primary/20 cursor-pointer"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Global Footer Area */}
        <footer className="mt-20 md:mt-28 border-t border-[#E5E0D2] dark:border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-[#1e1b42]/70 dark:text-white/50 tracking-wider">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="w-6 h-6 text-gold-dark dark:text-gold-accent">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>© 2026 Art of Living Fellowship.</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <Link href="/Landing/about" className="hover:text-gold-dark dark:hover:text-gold-accent transition-colors duration-300">ABOUT</Link>
            <Link href="/Landing/courses" className="hover:text-gold-dark dark:hover:text-gold-accent transition-colors duration-300">COURSES</Link>
            <Link href="/Landing/community" className="hover:text-gold-dark dark:hover:text-gold-accent transition-colors duration-300">COMMUNITY</Link>
            <Link href="/Landing/journal" className="hover:text-gold-dark dark:hover:text-gold-accent transition-colors duration-300">JOURNAL</Link>
          </div>

          <span className="text-[10px] text-gold-dark dark:text-gold-accent font-semibold tracking-[0.15em]">
            AWAKEN TO YOUR TRUE NATURE
          </span>
        </footer>

      </div>
    </section>
  );
}

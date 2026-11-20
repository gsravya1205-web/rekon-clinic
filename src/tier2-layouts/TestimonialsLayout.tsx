"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Lakshmi Narayana",
      location: "Ram Talkies Road, Visakhapatnam",
      treatment: "Bilateral Total Knee Replacement",
      rating: 5,
      story:
        "For over three years, severe osteoarthritis made even walking in my own house an agonizing struggle. Consulting Dr. B.V.R.N. Varma at Rekon Centre was the best healthcare decision of my life. The surgical precision, transparent explanations, and dedicated physiotherapy follow-up allowed me to walk pain-free within weeks.",
    },
    {
      name: "K. Appala Swamy",
      location: "Gajuwaka, Visakhapatnam",
      treatment: "Complex Revision Hip Replacement",
      rating: 5,
      story:
        "After a failed hip procedure done elsewhere, I was referred to Dr. Varma for a revision surgery. His senior clinical experience and thorough pre-op assessment gave my family immense confidence. Today, I have regained complete mobility without limp or discomfort.",
    },
    {
      name: "S. Rama Rao",
      location: "Dwarakanagar, Visakhapatnam",
      treatment: "Sports Injury & Trauma",
      rating: 5,
      story:
        "My son dislocated his shoulder during a sports match. Dr. Varma and the team at Rekon Centre attended to him swiftly. They stabilized the joint quickly with great care. Their responsiveness and professionalism are commendable.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }, [reviews.length]);

  // Auto-sliding Carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-tr from-blue-50/50 to-teal-50/50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Stories of Healing and Hope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Patient Stories That Inspire Us Daily
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-base">
            Every recovery is a milestone. Read firsthand experiences from patients who entrusted their mobility and joint health to Rekon Centre.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-150 dark:border-zinc-800 relative"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-blue-100 dark:text-zinc-800 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-zinc-200 text-lg sm:text-xl font-normal leading-relaxed italic mb-8">
                &ldquo;{reviews[current].story}&rdquo;
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-6">
                <div>
                  <h4 className="font-extrabold text-[#0B1F3A] dark:text-white text-base sm:text-lg">
                    {reviews[current].name}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-zinc-500 mt-0.5">
                    {reviews[current].location}
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  {reviews[current].treatment}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    current === idx ? "w-8 bg-blue-600" : "w-2.5 bg-gray-300 dark:bg-zinc-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

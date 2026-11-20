"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQData {
  headline: string;
  subtext: string;
  items: FAQItem[];
}

interface FAQProps {
  data: FAQData;
}

export default function FAQ({ data }: FAQProps) {
  const faqs = data.items;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 scroll-mt-28 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Unified FAQ Box Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-[28px] sm:rounded-[36px] border border-gray-150 dark:border-zinc-800 shadow-xl p-5 sm:p-7 lg:p-8 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* Left Column: Header and Description */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md inline-block mb-2">
                Got Questions?
              </span>
              <h2 className="text-2xl lg:text-3xl font-sans text-gray-900 dark:text-white font-extrabold tracking-tight leading-[1.15] mb-2">
                {data.headline.split(' ').map((word: string, i: number) => (
                  <span key={i}>
                    {word}{i === 0 && <br className="hidden lg:block" />}{' '}
                  </span>
                ))}
              </h2>
              <div className="h-1 w-14 bg-blue-500 mb-3 rounded-full" />
              <p className="text-xs sm:text-[13px] text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md" dangerouslySetInnerHTML={{__html: data.subtext}}></p>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 border-t border-gray-200 dark:border-zinc-800">
              <div className="flex flex-col">
                {faqs.map((faq: FAQItem, idx: number) => {
                  const isOpen = activeIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-gray-200 dark:border-zinc-800"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between py-3.5 text-left group"
                      >
                        <span
                          className={cn(
                            "text-xs sm:text-[13px] font-bold transition-colors pr-4",
                            isOpen
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-900 dark:text-zinc-100 group-hover:text-blue-600"
                          )}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={cn(
                            "h-5 w-5 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0",
                            isOpen
                              ? "rotate-180 bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                              : "text-gray-400 group-hover:bg-gray-100 dark:group-hover:bg-zinc-800"
                          )}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-3.5 text-xs sm:text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed font-normal">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

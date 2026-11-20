"use client";

import { motion } from "framer-motion";

export interface ReasonItem {
  title: string;
  desc: string;
}

export interface WhyChooseUsData {
  headline: string;
  reasons: ReasonItem[];
}

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  const reasons = data.reasons;

  return (
    <section
      id="why-choose-us"
      className="bg-transparent text-black px-3 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 px-2">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md inline-block mb-1.5">
            Key Advantages
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-snug">
            {data.headline}
          </h2>
          <div className="h-1 w-14 sm:w-16 bg-blue-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 w-full">
          {reasons.map((reason: ReasonItem, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex gap-3 sm:gap-3.5 items-start p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-zinc-700 transition-all"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold">
                  0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A] dark:text-white mb-1 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-gray-500 dark:text-zinc-400">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

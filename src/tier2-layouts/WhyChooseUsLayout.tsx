"use client";

import { motion } from "framer-motion";

interface WhyChooseUsProps {
  data: any;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  const reasons = data.reasons;

  return (
    <section
      id="why-choose-us"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 scroll-mt-28 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md inline-block mb-1.5">
            Key Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {data.headline}
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* 2x2 Grid: All 4 Reasons visible together without scrolling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
          {reasons.map((reason: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex gap-3.5 items-start p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-zinc-700 transition-all"
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

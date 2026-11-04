"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Microscope, Hospital, Ambulance, Heart } from "lucide-react";

interface FacilitiesProps {
  data: any;
}

export default function Facilities({ data }: FacilitiesProps) {
  const items = data.items.map((item: any, i: number) => {
    const icons = [<Bone className="h-7 w-7" />, <Stethoscope className="h-7 w-7" />, <Microscope className="h-7 w-7" />, <Hospital className="h-7 w-7" />, <Ambulance className="h-7 w-7" />, <Heart className="h-7 w-7" />];
    return { ...item, icon: icons[i] || <Heart className="h-7 w-7" /> };
  });

  return (
    <section
      id="facilities"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 scroll-mt-28 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md inline-block mb-1.5">
            {data.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {data.headline}
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full" />
          <p className="text-xs sm:text-[13px] text-gray-500 dark:text-zinc-400 mt-2 max-w-xl mx-auto">
            {data.subtext}
          </p>
        </div>

        {/* Custom Context Cards Grid (All 6 cards visible together) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-4 sm:p-5 border border-gray-150 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-start"
            >
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0B1F3A] dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

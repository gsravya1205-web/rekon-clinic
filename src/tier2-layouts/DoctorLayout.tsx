"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

interface DoctorProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Doctor({ onOpenBooking, data }: DoctorProps) {
  return (
    <section
      id="doctor"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 scroll-mt-28 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-[28px] sm:rounded-[36px] border border-gray-150 dark:border-zinc-800 shadow-xl p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Compact Doctor Framed Portrait (4 of 12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-amber-200/60 dark:border-zinc-700 bg-gradient-to-b from-amber-50/50 to-white dark:from-zinc-800/80 dark:to-zinc-900 shadow-lg p-2.5 w-full max-w-[240px] sm:max-w-[260px]">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  <img
                    src={data.image || "/images/dr_varma.png"}
                    alt={data.headline || "Dr. B. V. R. N. Varma"}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Doctor Info Badge Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#112338]/95 backdrop-blur-md text-white py-2 px-3 rounded-lg text-center shadow border border-white/10">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-tight tracking-tight">
                      {data.headline}
                    </h4>
                    <p className="text-[10px] text-teal-300 font-medium mt-0.5">
                      {data.qualifications}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Matter / Background, Philosophy, Quote & Credentials (8 of 12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              {/* Header / Role */}
              <div className="mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md inline-block mb-1">
                  {data.badge || "MEET THE DOCTOR"}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-snug">
                  {data.designation || "Consultant Orthopedic & Joint Replacement Surgeon"}
                </h3>
                {data.experience && (
                  <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mt-0.5">
                    ★ {data.experience}
                  </p>
                )}
              </div>

              {/* Side-by-side or stacked compact Background & Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="bg-slate-50/70 dark:bg-zinc-800/40 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-700/50">
                  <h4 className="text-[11px] font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-1">
                    {data.backgroundTitle || "Professional Background"}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
                    {data.backgroundDesc}
                  </p>
                </div>
                <div className="bg-slate-50/70 dark:bg-zinc-800/40 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-700/50">
                  <h4 className="text-[11px] font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-1">
                    {data.philosophyTitle || "Philosophy"}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
                    {data.philosophyDesc}
                  </p>
                </div>
              </div>

              {/* Highlight Quote Card */}
              {data.quote && (
                <div className="mb-3 bg-amber-50/70 dark:bg-zinc-800/60 border-l-3 border-amber-500 py-2 px-3 rounded-r-xl">
                  <p className="text-[11px] sm:text-xs italic text-gray-800 dark:text-zinc-200 leading-relaxed font-serif">
                    &ldquo;{data.quote}&rdquo;
                  </p>
                  <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 mt-0.5">
                    {data.quoteAuthor}
                  </p>
                </div>
              )}

              {/* Checklist Credentials in 2 Columns */}
              {data.checklist && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 mb-3.5">
                  {data.checklist.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs font-medium text-gray-700 dark:text-zinc-200">
                      <Check className="h-3.5 w-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#0B1F3A] hover:bg-navy-950 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {data.ctaButton || "Book Appointment"}
                </button>
                {data.practoLink && (
                  <a
                    href={data.practoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-gray-300 dark:border-zinc-700 hover:border-blue-500 bg-white dark:bg-zinc-800 text-gray-800 dark:text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all hover:text-blue-600"
                  >
                    <span>{data.practoButton || "View Practo Profile"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";

export interface DoctorData {
  badge?: string;
  headline?: string;
  designation?: string;
  experience?: string;
  image?: string;
  qualifications?: string;
  backgroundTitle?: string;
  backgroundDesc?: string;
  philosophyTitle?: string;
  philosophyDesc?: string;
  quote?: string;
  quoteAuthor?: string;
  checklist?: string[];
  ctaButton?: string;
  practoButton?: string;
  practoLink?: string;
}

interface DoctorProps {
  onOpenBooking: () => void;
  data: DoctorData;
}

export default function Doctor({ onOpenBooking, data }: DoctorProps) {
  return (
    <section
      id="doctor"
      className="bg-transparent text-black px-3 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-[36px] border border-gray-150 dark:border-zinc-800 shadow-xl p-3.5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            
            {/* Doctor Framed Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-amber-200/60 dark:border-zinc-700 bg-gradient-to-b from-amber-50/50 to-white dark:from-zinc-800/80 dark:to-zinc-900 shadow-lg p-2 sm:p-2.5 w-full max-w-[210px] xs:max-w-[240px] sm:max-w-[260px]">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  <img
                    src={data.image || "/images/dr_varma.png"}
                    alt={data.headline || "Dr. B. V. R. N. Varma"}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Doctor Info Badge Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 bg-[#112338]/95 backdrop-blur-md text-white py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg text-center shadow border border-white/10">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-tight tracking-tight">
                      {data.headline}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-teal-300 font-medium mt-0.5">
                      {data.qualifications}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Doctor Background, Philosophy, Quote & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              {/* Header / Role */}
              <div className="mb-3 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md inline-block mb-1">
                  {data.badge || "MEET THE DOCTOR"}
                </span>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-snug">
                  {data.designation || "Consultant Orthopedic & Joint Replacement Surgeon"}
                </h3>
                {data.experience && (
                  <p className="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mt-0.5">
                    ★ {data.experience}
                  </p>
                )}
              </div>

              {/* Side-by-side or stacked Background & Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-3">
                <div className="bg-slate-50/70 dark:bg-zinc-800/40 p-2.5 sm:p-3 rounded-xl border border-gray-100 dark:border-zinc-700/50">
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-1">
                    {data.backgroundTitle || "Professional Background"}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
                    {data.backgroundDesc}
                  </p>
                </div>
                <div className="bg-slate-50/70 dark:bg-zinc-800/40 p-2.5 sm:p-3 rounded-xl border border-gray-100 dark:border-zinc-700/50">
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-1">
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
                  <p className="text-[9px] sm:text-[10px] font-bold text-amber-700 dark:text-amber-400 mt-0.5">
                    {data.quoteAuthor}
                  </p>
                </div>
              )}

              {/* Checklist Credentials */}
              {data.checklist && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 mb-3.5">
                  {data.checklist.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs font-medium text-gray-700 dark:text-zinc-200">
                      <Check className="h-3.5 w-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons (Practo profile button removed as requested) */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-2.5 pt-1">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 xs:flex-initial flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-navy-950 text-white font-bold text-xs py-3 px-6 rounded-xl shadow transition-all active:scale-98 min-h-[44px]"
                >
                  <Calendar className="h-3.5 w-3.5 text-teal-300" />
                  <span>{data.ctaButton || "Book Appointment"}</span>
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Award } from "lucide-react";

export interface HeroData {
  headline: string;
  subtext: string;
  cta?: string;
  emergency?: string;
}

interface HeroProps {
  onOpenBooking: () => void;
  data: HeroData;
}

export default function Hero({ onOpenBooking, data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[520px] sm:min-h-[60vh] lg:min-h-[68vh] w-full flex flex-col overflow-hidden bg-white px-2.5 sm:px-6 pt-2.5 sm:pt-3 pb-2.5 sm:pb-3"
    >
      {/* Background Image Container */}
      <div className="absolute inset-x-2.5 inset-y-2.5 sm:inset-x-6 sm:inset-y-3 lg:bottom-4 z-0 rounded-2xl sm:rounded-[32px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        >
          {/* Soft overlay to make white text pop */}
          <div className="absolute inset-0 bg-black/25 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-[#0B1F3A]/70 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 sm:pt-28 pb-14 sm:pb-20 px-3 sm:px-4 w-full h-full text-center my-auto">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
        >
          <Award className="h-3.5 w-3.5 text-teal-300" />
          <span>27+ Years Experience • Visakhapatnam</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-medium tracking-tight text-white leading-[1.2] max-w-5xl break-words"
        >
          {data.headline}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-white/90 max-w-2xl font-light leading-relaxed px-2"
        >
          {data.subtext}
        </motion.p>

        {/* Hero Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md px-2"
        >
          <button
            onClick={onOpenBooking}
            className="w-full xs:w-auto min-w-[160px] flex items-center justify-center gap-2 rounded-full bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-3.5 shadow-xl shadow-teal-500/25 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span>{data.cta || "Book Appointment"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="tel:+919849146668"
            className="w-full xs:w-auto min-w-[160px] flex items-center justify-center gap-2 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm px-5 py-3.5 shadow-lg transition-all"
          >
            <Phone className="h-4 w-4 text-teal-300" />
            <span>{data.emergency || "Call: +91 98491 46668"}</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Award } from "lucide-react";

export interface HeroData {
  headline: string;
  highlight?: string;
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
      className="relative min-h-[580px] sm:min-h-[85vh] lg:min-h-[calc(100vh-2rem)] w-full flex flex-col justify-center overflow-hidden bg-white p-2.5 sm:p-4 lg:p-5 mb-4 sm:mb-8"
    >
      {/* Background Image Container */}
      <div className="absolute inset-2.5 sm:inset-4 lg:inset-5 z-0 rounded-2xl sm:rounded-[32px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        >
          {/* Soft overlay to make white text pop */}
          <div className="absolute inset-0 bg-black/25 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-[#0B1F3A]/70 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 px-3 sm:px-6 w-full h-full text-center my-auto">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
        >
          <Award className="h-3.5 w-3.5 text-teal-300" />
          <span>27+ Years Experience • Visakhapatnam</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-white leading-[1.08] max-w-5xl break-words drop-shadow-lg"
        >
          {data.headline}
        </motion.h1>

        {/* Highlighted Line matching Rekon Clinic name prominence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-2.5 sm:mt-4 max-w-4xl px-2"
        >
          <span className="inline-block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold tracking-tight text-teal-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-snug">
            {data.highlight || "Centre for Robotic Joint Replacement Surgery and Orthopaedic"}
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl font-normal leading-relaxed px-2 drop-shadow"
        >
          {data.subtext}
        </motion.p>

        {/* Hero Quick Action Buttons (Number guaranteed in 1 straight line) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg px-2"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-w-[170px] flex items-center justify-center gap-2 rounded-full bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-3.5 shadow-xl shadow-teal-500/25 transition-all whitespace-nowrap shrink-0"
          >
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{data.cta || "Book Appointment"}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>

          <a
            href="tel:+919849146668"
            style={{ whiteSpace: "nowrap" }}
            className="w-full sm:w-auto min-w-max flex items-center justify-center gap-2 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm px-6 py-3.5 shadow-lg transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="h-4 w-4 text-teal-300 shrink-0" />
            <span style={{ whiteSpace: "nowrap" }} className="whitespace-nowrap inline-block tracking-tight">Call:&nbsp;+91&nbsp;98491&nbsp;46668</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}

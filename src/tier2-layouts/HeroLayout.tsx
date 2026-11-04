"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Hero({ onOpenBooking, data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh] w-full flex flex-col overflow-hidden bg-white px-3 sm:px-6 pt-3 pb-3"
    >
      {/* Background Image Container */}
      <div className="absolute inset-x-3 inset-y-3 sm:inset-x-6 sm:inset-y-3 lg:bottom-4 z-0 rounded-[32px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        >
          {/* Soft overlay to make white text pop */}
          <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-[#0B1F3A]/60 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 w-full h-full text-center my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-tight text-white leading-[1.15] max-w-5xl"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light"
        >
          {data.subtext}
        </motion.p>
      </div>

    </section>
  );
}

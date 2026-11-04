"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Bone,
  Activity,
  Stethoscope,
  Scissors,
  UserCheck,
  Eye,
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Services({ onOpenBooking, data }: ServicesProps) {
  const specialties = data.specialties;

  return (
    <section
      id="services"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 flex flex-col items-center px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6B7280] mb-3">
            {data.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-[#111111] tracking-tight leading-[1.1] max-w-5xl text-center">
            {data.headline}
          </h2>
          {data.subtext && (
            <p className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base max-w-3xl text-center mt-3">
              {data.subtext}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="w-full mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {specialties.map((spec: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                }}
                className="group relative h-[320px] sm:h-[360px] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${spec.image})` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-start w-full">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-3">
                    {data.itemBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {spec.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

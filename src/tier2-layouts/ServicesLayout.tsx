"use client";

import { motion } from "framer-motion";

export interface SpecialtyItem {
  title: string;
  image: string;
}

export interface ServicesData {
  badge?: string;
  headline: string;
  subtext?: string;
  itemBadge?: string;
  specialties: SpecialtyItem[];
}

interface ServicesProps {
  onOpenBooking: () => void;
  data: ServicesData;
}

export default function Services({ onOpenBooking, data }: ServicesProps) {
  const specialties = data.specialties;

  return (
    <section
      id="services"
      className="bg-transparent text-black px-3 sm:px-6 lg:px-8 py-8 sm:py-14 scroll-mt-20 sm:scroll-mt-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 flex flex-col items-center px-2 sm:px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#6B7280] font-semibold mb-2 sm:mb-3">
            {data.badge}
          </span>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-[#111111] tracking-tight leading-[1.15] max-w-5xl text-center">
            {data.headline}
          </h2>
          {data.subtext && (
            <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-3xl text-center mt-2.5 sm:mt-3 leading-relaxed">
              {data.subtext}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="w-full mt-2 sm:mt-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {specialties.map((spec: SpecialtyItem, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                }}
                onClick={onOpenBooking}
                className="group relative h-[230px] xs:h-[260px] sm:h-[320px] lg:h-[350px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-4 sm:p-6"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${spec.image})` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-start w-full">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white mb-2 sm:mb-2.5">
                    {data.itemBadge || "Service"}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
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

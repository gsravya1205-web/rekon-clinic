"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Clock, Phone } from "lucide-react";

interface ContactProps {
  data: any;
}

export default function Contact({ data }: ContactProps) {
  const handleDirectionsClick = () => {
    window.open(data.map.linkUrl, "_blank");
  };

  return (
    <section id="contact" className="bg-transparent font-sans px-4 sm:px-6 lg:px-8 py-4 sm:py-6 scroll-mt-28 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md">
            {data.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white mt-1 tracking-tight">
            {data.headline}
          </h2>
          <div className="h-1 w-14 bg-blue-500 mx-auto mt-1.5 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-1 text-xs sm:text-[13px]">
            {data.subtext}
          </p>
        </div>

        {/* Unified Merged Box Container (Compact fit for window) */}
        <div className="bg-white dark:bg-zinc-900 rounded-[28px] sm:rounded-[36px] border border-gray-150 dark:border-zinc-800 shadow-xl p-4 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Left Column: Compact Map (6 of 12 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full h-[250px] sm:h-[290px] lg:h-full min-h-[250px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800 bg-gray-100 group">
                <iframe
                  src={data.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rekon Centre Google Map"
                  className="transition-transform duration-700 group-hover:scale-[1.01]"
                ></iframe>
                
                {/* Overlay floating action to open Google Maps */}
                <div className="absolute bottom-3 right-3 z-20">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleDirectionsClick}
                    className="flex items-center gap-1.5 bg-[#0B1F3A] hover:bg-navy-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md transition-colors border border-navy-800"
                  >
                    <span>{data.map.btnText}</span>
                    <ExternalLink className="h-3 w-3" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Column: Clinic Address + Consulting Hours (6 of 12 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
              
              {/* Top: Clinic Address */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                    {data.addressCard.title}
                  </h3>
                </div>
                
                <address className="not-italic text-[11px] sm:text-xs text-[#0B1F3A] dark:text-zinc-200 font-semibold leading-relaxed bg-gray-50 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-gray-150 dark:border-zinc-700/60">
                  {data.addressCard.addressLines.map((line: string, i: number) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </address>

                <div className="mt-2">
                  <button
                    onClick={handleDirectionsClick}
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] py-1.5 px-3 rounded-lg shadow-sm transition-colors"
                  >
                    <span>{data.addressCard.btnText}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Bottom: CONSULTING HOURS */}
              <div className="border-t border-gray-200 dark:border-zinc-800 pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex-shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">
                      Consulting Hours
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#0B1F3A] dark:text-white leading-tight">
                      Mon - Sat: 12:00 PM – 03:00 PM &amp; 06:00 PM – 08:00 PM
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50/60 dark:bg-zinc-800/40 p-2.5 rounded-xl border border-blue-100 dark:border-zinc-700/50 space-y-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-semibold">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>Emergency Orthopedic Care: Attended Promptly</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700 dark:text-zinc-300 font-medium pt-1 border-t border-blue-100 dark:border-zinc-700/40">
                    <div>Fee: <span className="font-bold text-[#0B1F3A] dark:text-white">₹500</span></div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-zinc-400">
                      <Clock className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                      <span>Sunday: <span className="font-bold text-[#0B1F3A] dark:text-white">By Appointment</span></span>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5">
                  <a
                    href="tel:+919849146668"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 shadow transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Clinic Directly (+91 98491 46668)</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


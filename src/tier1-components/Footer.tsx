"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

interface FooterProps {
  data: any;
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1626] text-slate-300 font-sans border-t border-slate-800/80 relative overflow-hidden py-3 sm:py-4">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-3">

        {/* Main Content Row */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-6 py-1">

          {/* Hospital Logo & Title with dedicated padding to avoid overlapping */}
          <div className="flex items-center gap-3 shrink-0 pr-6 lg:pr-10">
            <img
              src="/logo.svg"
              alt={`${data.brand.title} Logo`}
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
            <div className="h-5 w-[1px] bg-slate-700/50 hidden sm:block shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide max-w-sm sm:max-w-md xl:max-w-lg leading-snug">
              {data.brand.title}
            </span>
          </div>

          {/* Contact & Location Details + Action Button */}
          <div className="flex flex-wrap items-center justify-between xl:justify-end gap-3 sm:gap-x-4 sm:gap-y-2 text-xs text-slate-400 font-medium">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="flex items-center gap-1.5">
                <span>📍</span> {data.reachOut.address.replace(/\n.*/g, '')}
              </span>

              <span className="text-slate-700 hidden md:inline">|</span>

              <a href={data.reachOut.phone1.href} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>☎️</span> {data.reachOut.phone1.display}
              </a>

              <span className="text-slate-700 hidden md:inline">|</span>

              <a href={data.reachOut.phone2.href} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>📱</span> {data.reachOut.phone2.display}
              </a>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex items-center gap-2 shrink-0 ml-auto xl:ml-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={data.reachOut?.phone1?.href || "tel:+919849146668"}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] sm:text-[11px] py-1.5 px-3.5 shadow-sm transition-colors whitespace-nowrap"
              >
                <Phone className="h-3 w-3" />
                <span>Call Now</span>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-slate-800/40 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <p>© {currentYear} {data.legal?.copyright || "Rekon Centre For Joint Replacement Surgery and Orthopedics. All Rights Reserved."}</p>
        </div>

      </div>
    </footer>
  );
}

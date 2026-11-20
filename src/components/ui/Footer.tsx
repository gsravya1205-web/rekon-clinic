"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1626] text-slate-300 font-sans border-t border-slate-800/80 relative overflow-hidden py-4 sm:py-6">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-3.5">

        {/* Header Row: Logo & Title, Call Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-1">
          {/* Hospital Logo & Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
            <img
              src="/logo.png"
              alt="Rekon Clinic Logo"
              className="h-10 sm:h-12 w-auto object-contain shrink-0 rounded-sm"
            />
            <div className="h-5 w-[1px] bg-slate-700/50 hidden sm:block shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-snug break-words">
              Rekon Clinic - Centre for Robotic Joint Replacement Surgery and Orthopaedic
            </span>
          </div>

          {/* Call CTA Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919849146668"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs py-2 px-4 shadow-md shadow-blue-500/20 transition-all border border-blue-400/25 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Now: +91 98491 46668</span>
          </motion.a>
        </div>

        {/* Contact Strip: Location & Consulting Hours */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 py-2.5 px-3 sm:px-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300 backdrop-blur-sm">
          {/* Address */}
          <a
            href="https://maps.google.com/?q=Rekon+Centre+For+Joint+Replacement+Surgery+Dwarakanagar+Visakhapatnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start sm:items-center gap-2 hover:text-white transition-colors group"
            title="Open location in Google Maps"
          >
            <div className="h-5 w-5 rounded bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="h-3 w-3" />
            </div>
            <span className="font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
              48-3-65, B.V.K. College Road, Srinagar, Visakhapatnam
            </span>
          </a>

          {/* Consulting Hours */}
          <div className="inline-flex items-center gap-2 text-slate-400">
            <div className="h-5 w-5 rounded bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="h-3 w-3" />
            </div>
            <span className="font-medium">
              Mon - Sat: 05:00 PM – 08:00 PM
            </span>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-slate-800/40 pt-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-medium text-center sm:text-left">
          <p>© {currentYear} Rekon Clinic - Centre for Robotic Joint Replacement Surgery and Orthopaedic. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Specialties</a>
            <span>•</span>
            <a href="#doctor" className="hover:text-white transition-colors">Specialist</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Location</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

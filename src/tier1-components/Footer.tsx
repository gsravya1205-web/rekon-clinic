"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

interface FooterData {
  brand: {
    title: string;
    description?: string;
    badge?: string;
  };
  reachOut: {
    title?: string;
    address: string;
    phone1?: {
      display: string;
      href: string;
    };
    phone2?: {
      display: string;
      href: string;
    };
    email?: string | null;
  };
  opdTimings?: {
    title?: string;
    regular?: string;
    sunday?: string;
  };
  legal?: {
    copyright?: string;
  };
}

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1626] text-slate-300 font-sans border-t border-slate-800/80 relative overflow-hidden py-3 sm:py-4">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-3">

        {/* Header Row: Logo & Title on Left, Call Action on Right */}
        <div className="flex items-center justify-between gap-3 py-1">
          {/* Hospital Logo & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.svg"
              alt={`${data.brand.title} Logo`}
              className="h-9 sm:h-11 w-auto object-contain shrink-0"
            />
            <div className="h-5 w-[1px] bg-slate-700/50 hidden sm:block shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide max-w-sm sm:max-w-md xl:max-w-xl leading-snug">
              {data.brand.title}
            </span>
          </div>

          {/* Call CTA Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={data.reachOut?.phone1?.href || "tel:+919849146668"}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs py-1.5 px-3.5 shadow-md shadow-blue-500/20 transition-all border border-blue-400/25 whitespace-nowrap shrink-0"
          >
            <Phone className="h-3 w-3" />
            <span>Call Now</span>
          </motion.a>
        </div>

        {/* Contact Strip: Location & Consulting Hours */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 py-2 px-3 sm:px-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300 backdrop-blur-sm">
          {/* Address */}
          <a
            href="https://maps.google.com/?q=Rekon+Centre+For+Joint+Replacement+Surgery+Dwarakanagar+Visakhapatnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            title="Open location in Google Maps"
          >
            <div className="h-5 w-5 rounded bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
              <MapPin className="h-3 w-3" />
            </div>
            <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
              {data.reachOut.address.replace(/\n.*/g, '')}
            </span>
          </a>

          {/* Consulting Hours */}
          <div className="inline-flex items-center gap-1.5 text-slate-400">
            <div className="h-5 w-5 rounded bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="h-3 w-3" />
            </div>
            <span className="font-medium">
              {data.opdTimings?.regular || "Mon - Sat: 12:00 PM – 03:00 PM & 06:00 PM – 08:00 PM"}
            </span>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-slate-800/40 pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-medium">
          <p>© {currentYear} {data.legal?.copyright || "Rekon Centre For Joint Replacement Surgery and Orthopedics. All Rights Reserved."}</p>
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

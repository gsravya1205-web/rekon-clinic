"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface NavLink {
  name: string;
  href: string;
}

export interface NavbarData {
  links?: NavLink[];
  logo?: {
    title: string;
    subtitle: string;
  };
}

interface NavbarProps {
  onOpenBooking: () => void;
  data: NavbarData;
}

export default function Navbar({ onOpenBooking, data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = data.links;

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-3 sm:px-6 lg:px-10 h-16 sm:h-20 lg:h-24 transition-all duration-300 pointer-events-none",
          isScrolled ? "glass-nav" : "bg-transparent"
        )}
      >
        {/* Top White Border Bar */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-2 sm:h-3 bg-white pointer-events-auto z-0 transition-opacity",
          isScrolled ? "opacity-0" : "opacity-100"
        )}></div>

        {/* Left Navigation Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 relative z-10 pointer-events-auto max-w-[40vw] flex-wrap justify-start">
          {navLinks?.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-1.5 xl:px-4 xl:py-2 rounded-full border text-xs xl:text-sm font-semibold transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap",
                isScrolled 
                  ? "border-black/10 text-gray-800 hover:bg-black/5" 
                  : "border-white/40 text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Center Logo Cutout with official new logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
          <div className="navbar-cutout px-3 sm:px-6 lg:px-10 pt-1 sm:pt-2 pb-2 sm:pb-4 pointer-events-auto flex justify-center items-center shadow-sm">
            <a href="#home" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Rekon Clinic"
                className="h-8 sm:h-10 md:h-12 w-auto max-w-[140px] xs:max-w-[170px] sm:max-w-[210px] object-contain hover:scale-[1.02] transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 relative z-10 pointer-events-auto ml-auto">
          {/* Desktop Search Placeholder */}
          <div className={cn(
            "hidden lg:flex items-center backdrop-blur-md rounded-full px-4 py-2 shadow-sm transition-colors border",
            isScrolled ? "bg-black/5 border-black/10" : "bg-white/20 border-white/40"
          )}>
            <span className={cn(
              "text-xs xl:text-sm font-medium mr-4 transition-colors",
              isScrolled ? "text-gray-800" : "text-white/90"
            )}>Search here...</span>
            <div className={cn(
              "rounded-full p-1 shadow-sm transition-colors",
              isScrolled ? "bg-black text-white" : "bg-white text-black"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>

          {/* Book Now Button (Desktop) */}
          <button
            onClick={onOpenBooking}
            className="hidden lg:flex items-center gap-2.5 rounded-full px-5 py-2 xl:px-6 xl:py-2.5 text-xs xl:text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all group bg-black text-white hover:bg-black/80"
          >
            <span>Book Now</span>
            <div className="p-1 rounded-full group-hover:rotate-45 transition-transform bg-white text-black">
              <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "rounded-full p-2.5 sm:p-3 shadow-lg transition-all active:scale-90 flex items-center justify-center",
              isScrolled 
                ? "bg-slate-900 text-white hover:bg-slate-800" 
                : "bg-slate-900/90 text-white backdrop-blur-md border border-white/20 hover:bg-slate-900"
            )}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Full-Featured Mobile Slide-Down Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[95] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-16 sm:top-20 left-3 right-3 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-gray-150 p-4 sm:p-6 flex flex-col gap-4 text-[#0B1F3A]"
            >
              {/* Navigation Links */}
              <nav className="flex flex-col divide-y divide-gray-100">
                {navLinks?.map((link: NavLink) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 px-2 text-sm font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-teal-600 active:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
              </nav>

              {/* Action Buttons in Mobile Menu */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-150">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-700 py-3.5 px-4 text-sm font-bold text-white shadow-md shadow-teal-600/20 active:scale-98 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href="tel:+919849146668"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] hover:bg-navy-950 py-3 px-4 text-sm font-bold text-white shadow active:scale-98 transition-all"
                >
                  <Phone className="h-4 w-4 text-teal-300" />
                  <span>Call Clinic (+91 98491 46668)</span>
                </a>
              </div>

              {/* Clinic Quick Info */}
              <div className="rounded-2xl bg-slate-50 p-3.5 text-xs text-gray-600 space-y-2 border border-gray-100">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Consultation Hours:</span>
                    <span>Mon - Sat: 05:00 PM – 08:00 PM</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-gray-200/60">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">
                    Ram Talkies 40 Feet Rd, Opp. Gouthami Complex, Srinagar, Visakhapatnam
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

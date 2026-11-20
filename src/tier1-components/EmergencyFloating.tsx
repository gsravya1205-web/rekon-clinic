"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

interface EmergencyFloatingProps {
  onOpenBooking: () => void;
}

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export default function EmergencyFloating({ onOpenBooking }: EmergencyFloatingProps) {
  const tabs: TabItem[] = [
    {
      id: "call",
      label: "Call: +91 98491 46668",
      icon: <Phone className="h-4 w-4 text-white" />,
      color: "bg-[#00C2A8] hover:bg-[#00ab94]",
      href: "tel:+919849146668",
    },
    {
      id: "booking",
      label: "Book Appointment",
      icon: <Calendar className="h-4 w-4 text-white" />,
      color: "bg-[#0B1F3A] hover:bg-[#071426]",
      onClick: onOpenBooking,
    },
    {
      id: "emergency",
      label: "Emergency: +91 98491 46668",
      icon: <Phone className="h-4 w-4 text-white animate-pulse" />,
      color: "bg-[#e50914] hover:bg-[#c40811]",
      href: "tel:+919849146668",
    },
  ];

  return (
    <>
      {/* Desktop / Tablet Floating Side Tabs */}
      <aside aria-label="Quick actions" className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 items-end font-sans">
        {tabs.map((tab) => {
          const content = (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={`flex items-center gap-2.5 pl-3 pr-1 py-1 rounded-l-full shadow-lg border-l border-y border-white/10 ${tab.color} text-white transition-all duration-300 group cursor-pointer`}
            >
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-wider transition-all duration-300 group-hover:max-w-[200px] select-none">
                {tab.label}
              </span>
              
              <div className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] shrink-0 transition-transform duration-300 group-hover:scale-105">
                {tab.icon}
              </div>
            </motion.div>
          );

          if (tab.href) {
            return (
              <a
                key={tab.id}
                href={tab.href}
                target={tab.target}
                rel={tab.target ? "noopener noreferrer" : undefined}
                className="outline-none"
                aria-label={tab.label}
              >
                {content}
              </a>
            );
          }

          return (
            <button key={tab.id} onClick={tab.onClick} className="outline-none block" aria-label={tab.label}>
              {content}
            </button>
          );
        })}
      </aside>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] font-sans">
        <div className="flex items-center gap-2 max-w-lg mx-auto">
          {/* Quick Call Button */}
          <a
            href="tel:+919849146668"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 active:scale-95 transition-all text-center min-h-[46px]"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="truncate">Call Clinic</span>
          </a>

          {/* Book Appointment CTA Button */}
          <button
            onClick={onOpenBooking}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#0B1F3A] hover:bg-navy-950 text-white font-bold text-xs shadow-md shadow-navy-900/20 active:scale-95 transition-all text-center min-h-[46px]"
          >
            <Calendar className="h-4 w-4 shrink-0 text-teal-300" />
            <span className="truncate">Book Appointment</span>
          </button>
        </div>
      </div>
    </>
  );
}

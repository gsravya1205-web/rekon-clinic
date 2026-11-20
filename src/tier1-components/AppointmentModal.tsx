"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, User, Stethoscope, Clock, CheckCircle, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "Orthopedics & Joint Replacement",
    date: "",
    time: "Morning",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (step === 1) {
      if (!formData.specialty || !formData.date || !formData.time) {
        alert("Please select specialty, preferred date, and time slot.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.name || !formData.phone) {
        alert("Please enter patient name and valid contact details.");
        return;
      }
      if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      specialty: "Orthopedics & Joint Replacement",
      date: "",
      time: "Morning",
      message: "",
    });
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  const stepsInfo = [
    { num: 1, label: "Consultation" },
    { num: 2, label: "Patient Info" },
    { num: 3, label: "Confirm" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-2.5 xs:p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
          />

          {/* Modal Container (Responsive max-height and scrolling) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-[#0B1F3A] px-4 sm:px-6 py-3.5 sm:py-4 text-white dark:border-zinc-800 relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-500/10 blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 relative z-10">
                <Calendar className="h-5 w-5 text-teal-300" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight">Schedule Consultation</h3>
                  <p className="text-[9px] sm:text-[10px] text-teal-100 uppercase tracking-widest font-semibold">Rekon Centre</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-navy-200 transition-all hover:bg-white/10 hover:text-white relative z-10 min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Step Progress Bar Indicator */}
            {!isSuccess && (
              <div className="bg-gray-50 dark:bg-zinc-850 px-4 sm:px-6 py-2.5 sm:py-3.5 border-b border-gray-100 dark:border-zinc-800 shrink-0">
                <div className="flex items-center justify-between max-w-xs sm:max-w-sm mx-auto relative">
                  {/* Progress Line */}
                  <div className="absolute top-3.5 left-0 w-full h-0.5 bg-gray-200 dark:bg-zinc-700 z-0" />
                  <div 
                    className="absolute top-3.5 left-0 h-0.5 bg-teal-600 dark:bg-teal-500 z-0 transition-all duration-300"
                    style={{ width: `${((step - 1) / (stepsInfo.length - 1)) * 100}%` }}
                  />

                  {stepsInfo.map((s) => (
                    <div key={s.num} className="flex flex-col items-center relative z-10">
                      <div 
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
                          step >= s.num 
                            ? "bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500" 
                            : "bg-white border-gray-200 text-gray-400 dark:bg-zinc-800 dark:border-zinc-700"
                        }`}
                      >
                        {step > s.num ? <CheckCircle className="w-3.5 h-3.5 stroke-[3]" /> : s.num}
                      </div>
                      <span className="text-[9px] xs:text-[10px] font-bold mt-1 uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Body (Scrollable for all mobile viewports) */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {!isSuccess ? (
                <div className="flex flex-col justify-between min-h-[260px]">
                  {/* Form Step Contents with AnimatePresence */}
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-3.5 sm:space-y-4"
                      >
                        <p className="text-xs text-gray-500 dark:text-zinc-400">
                          Select the clinical specialty and your preferred timing slot below.
                        </p>

                        {/* Specialty Selection */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                            Clinical Specialty
                          </label>
                          <div className="relative">
                            <Stethoscope className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                            <select
                              value={formData.specialty}
                              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 sm:py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white appearance-none"
                            >
                              <option value="Orthopedics & Joint Replacement">Orthopedics & Joint Replacement</option>
                              <option value="Primary Knee & Hip Replacement">Primary Knee & Hip Replacement</option>
                              <option value="Arthroscopy & Sports Care">Arthroscopy & Sports Care</option>
                              <option value="Fracture Fixation & Trauma">Fracture Fixation & Trauma Care</option>
                            </select>
                          </div>
                        </div>

                        {/* Date Picker */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 sm:py-3 px-3 text-base sm:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white"
                          />
                        </div>

                        {/* Time Preferences */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1.5">
                            Preferred Time Slot
                          </label>
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                            {["Morning", "Afternoon", "Evening"].map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setFormData({ ...formData, time: slot })}
                                className={`flex flex-col xs:flex-row items-center justify-center gap-1 rounded-xl border py-2 px-1 text-[11px] sm:text-xs font-bold transition-all min-h-[40px] ${
                                  formData.time === slot
                                    ? "border-teal-600 bg-teal-50 text-teal-800 dark:border-teal-500 dark:bg-teal-900/20 dark:text-teal-400"
                                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                                }`}
                              >
                                <Clock className="h-3.5 w-3.5 shrink-0" />
                                <span>{slot}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-3.5 sm:space-y-4"
                      >
                        <p className="text-xs text-gray-500 dark:text-zinc-400">
                          Please enter the patient details for confirmation.
                        </p>

                        {/* Name Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                            Patient Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ramesh Kumar"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 sm:py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white"
                            />
                          </div>
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                            Contact Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                            <input
                              type="tel"
                              required
                              pattern="[0-9]{10}"
                              placeholder="10-digit mobile number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 sm:py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white"
                            />
                          </div>
                        </div>

                        {/* Message Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                            Brief Symptoms / Condition (Optional)
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Brief description of joint, knee, or bone symptoms..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-base sm:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white resize-none"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-3 sm:space-y-4"
                      >
                        <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-3.5 sm:p-4 dark:border-teal-900/20 dark:bg-teal-950/10">
                          <h4 className="text-[11px] sm:text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verify Details</span>
                          </h4>

                          <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-zinc-300">
                            <div className="flex justify-between border-b border-gray-100/60 pb-1.5">
                              <span className="text-gray-500 text-xs">Patient</span>
                              <span className="font-bold text-gray-900 dark:text-white truncate max-w-[180px]">{formData.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/60 pb-1.5">
                              <span className="text-gray-500 text-xs">Phone</span>
                              <span className="font-bold text-gray-900 dark:text-white">+91 {formData.phone}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/60 pb-1.5">
                              <span className="text-gray-500 text-xs">Specialty</span>
                              <span className="font-bold text-teal-700 dark:text-teal-400 truncate max-w-[180px]">{formData.specialty}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/60 pb-1.5">
                              <span className="text-gray-500 text-xs">Date</span>
                              <span className="font-bold text-gray-900 dark:text-white">{formData.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500 text-xs">Slot</span>
                              <span className="font-bold text-gray-900 dark:text-white">{formData.time} Slot</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[10px] text-gray-500 dark:text-zinc-500 leading-relaxed text-center">
                          Our clinic desk will contact you at +91 {formData.phone} to confirm your consulting appointment.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error message */}
                  {error && (
                    <p className="text-xs text-red-500 font-semibold text-center mt-2">{error}</p>
                  )}

                  {/* Navigation Buttons inside Modal */}
                  <div className="flex gap-2.5 pt-4 border-t border-gray-150 dark:border-zinc-800 mt-3">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 flex items-center justify-center gap-1 rounded-xl border border-gray-200 py-3 text-xs sm:text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 min-h-[44px]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-gray-200 py-3 text-xs sm:text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50 min-h-[44px]"
                      >
                        Cancel
                      </button>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-[2] flex items-center justify-center gap-1 rounded-xl bg-teal-600 hover:bg-teal-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-teal-600/20 active:scale-98 transition-all min-h-[44px]"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-[2] rounded-xl bg-teal-600 hover:bg-teal-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-teal-600/20 active:scale-98 transition-all disabled:opacity-50 min-h-[44px]"
                      >
                        {isSubmitting ? "Submitting..." : "Confirm & Send"}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <div className="mb-3 rounded-full bg-emerald-50 p-3 text-emerald-600">
                    <CheckCircle className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-1.5">Request Received!</h4>
                  <p className="max-w-xs text-xs text-gray-500 dark:text-zinc-400 mb-5 leading-relaxed">
                    Thank you, <strong className="text-gray-800 dark:text-white">{formData.name}</strong>. We have registered your request for <strong className="text-gray-800 dark:text-white">{formData.specialty}</strong> on <strong className="text-gray-800 dark:text-white">{formData.date}</strong>. Our clinic team will call you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full max-w-[180px] rounded-xl bg-[#0B1F3A] hover:bg-navy-950 py-3 text-xs sm:text-sm font-bold text-white transition-all active:scale-98 min-h-[44px]"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

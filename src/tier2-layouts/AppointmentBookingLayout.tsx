"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Stethoscope, CheckCircle } from "lucide-react";

export interface BookingFormConfig {
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  deptLabel: string;
  doctorLabel: string;
  dateLabel: string;
  submitText: string;
  submittingText: string;
  successTitle: string;
  successSubtext: string;
  successButton: string;
}

export interface BookingData {
  badge: string;
  headline: string;
  subtext: string;
  form: BookingFormConfig;
}

interface BookingProps {
  data: BookingData;
}

export default function AppointmentBooking({ data }: BookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopedics & Joint Replacement",
    doctor: "Dr. B. V. R. N. Varma",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
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
      department: "Orthopedics & Joint Replacement",
      doctor: "Dr. B. V. R. N. Varma",
      date: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="booking-section" className="bg-transparent font-sans px-3 sm:px-6 lg:px-8 py-6 sm:py-10 scroll-mt-20 sm:scroll-mt-24 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] rounded-2xl sm:rounded-[40px] overflow-hidden bg-transparent pt-2 sm:pt-4 pb-4 sm:pb-6">
        <div className="mx-auto max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md inline-block">
              {data.badge}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-3 tracking-tight leading-snug">
              {data.headline}
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mt-3 rounded-full" />
            <p className="text-gray-500 dark:text-zinc-400 mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
              {data.subtext}
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-2xl mx-auto w-full bg-white dark:bg-zinc-850 p-4 xs:p-6 sm:p-10 rounded-2xl sm:rounded-[36px] border border-gray-150 dark:border-zinc-800 shadow-xl">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                    {data.form.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                    {data.form.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder={data.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Department & Doctor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Department */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                      {data.form.deptLabel}
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Orthopedics & Joint Replacement">Orthopedics & Joint Replacement</option>
                        <option value="Knee & Hip Replacement">Knee & Hip Replacement</option>
                        <option value="Arthroscopy & Sports Care">Arthroscopy & Sports Care</option>
                        <option value="Fracture & Trauma Care">Fracture & Trauma Care</option>
                      </select>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                      {data.form.doctorLabel}
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-base sm:text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Dr. B. V. R. N. Varma">Dr. B. V. R. N. Varma (Lead Specialist)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-1">
                    {data.form.dateLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 px-4 text-base sm:text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-xs text-red-500 font-semibold text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all active:scale-98 disabled:opacity-50 mt-2 min-h-[48px] flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{isSubmitting ? data.form.submittingText : data.form.submitText}</span>
                </button>
              </form>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 sm:py-8 text-center"
              >
                <div className="mb-4 rounded-full bg-emerald-50 p-3.5 sm:p-4 text-emerald-600">
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] mb-2">{data.form.successTitle}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
                  {data.form.successSubtext.replace('{name}', formData.name).replace('{doctor}', formData.doctor).replace('{department}', formData.department).replace('{date}', formData.date)}
                </p>
                <button
                  onClick={handleReset}
                  className="w-full max-w-[200px] rounded-xl bg-[#0B1F3A] py-3 px-4 text-sm font-bold text-white transition-all hover:bg-navy-900 active:scale-98"
                >
                  {data.form.successButton}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

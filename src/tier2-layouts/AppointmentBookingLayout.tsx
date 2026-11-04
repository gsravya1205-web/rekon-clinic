"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Stethoscope, Clock, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";

interface BookingProps {
  data: any;
}

export default function AppointmentBooking({ data }: BookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopedics",
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
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      department: "Orthopedics",
      doctor: "Dr. B. V. R. N. Varma",
      date: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="booking-section" className="bg-transparent font-sans px-0 sm:px-4 py-8 sm:py-10 scroll-mt-24 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1440px] rounded-[0px] sm:rounded-[40px] overflow-hidden bg-transparent pt-4 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            {data.headline}
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            {data.subtext}
          </p>
        </div>

        {/* Centered Appointment Form Container (Consulting hours removed and moved to Contact section) */}
        <div className="max-w-2xl mx-auto w-full bg-white dark:bg-zinc-850 p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border border-gray-150 dark:border-zinc-800 shadow-xl">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
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
                    className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
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
                    className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Department & Doctor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Department */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {data.form.deptLabel}
                  </label>
                  <div className="relative">
                    <Stethoscope className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                    >
                      <option value="Orthopedics & Joint Replacement" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Orthopedics & Joint Replacement</option>
                      <option value="Knee & Hip Replacement" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Knee & Hip Replacement</option>
                      <option value="Arthroscopy & Sports Care" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Arthroscopy & Sports Care</option>
                      <option value="Fracture & Trauma Care" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Fracture & Trauma Care</option>
                    </select>
                  </div>
                </div>

                {/* Doctor */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {data.form.doctorLabel}
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                    >
                      <option value="Dr. B. V. R. N. Varma" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. B. V. R. N. Varma (Lead Specialist)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  {data.form.dateLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-98 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? data.form.submittingText : data.form.submitText}
              </button>
            </form>
          ) : (
            /* Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="mb-4 rounded-full bg-emerald-50 p-4 dark:bg-emerald-950/20 text-emerald-600">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-extrabold text-[#0B1F3A] mb-2">{data.form.successTitle}</h4>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mb-6">
                {data.form.successSubtext.replace('{name}', formData.name).replace('{doctor}', formData.doctor).replace('{department}', formData.department).replace('{date}', formData.date)}
              </p>
              <button
                onClick={handleReset}
                className="w-full max-w-[200px] rounded-xl bg-[#0B1F3A] py-3 text-sm font-bold text-white transition-all hover:bg-navy-900 active:scale-98"
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

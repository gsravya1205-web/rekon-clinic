"use client";

import React, { useState } from "react";
import Navbar, { NavbarData } from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import HeroLayout, { HeroData } from "@/tier2-layouts/HeroLayout";
import ServicesLayout, { ServicesData } from "@/tier2-layouts/ServicesLayout";
import DoctorLayout, { DoctorData } from "@/tier2-layouts/DoctorLayout";
import WhyChooseUsLayout, { WhyChooseUsData } from "@/tier2-layouts/WhyChooseUsLayout";
import FacilitiesLayout, { FacilitiesData } from "@/tier2-layouts/FacilitiesLayout";
import AppointmentBookingLayout, { BookingData } from "@/tier2-layouts/AppointmentBookingLayout";
import ContactLayout, { ContactData } from "@/tier2-layouts/ContactLayout";
import AppointmentModal from "@/tier1-components/AppointmentModal";
import EmergencyFloating from "@/tier1-components/EmergencyFloating";
import Preloader from "@/tier1-components/Preloader";

export interface PageContentData {
  layout: {
    seo?: { title: string; description: string };
    navbar: NavbarData;
    hero?: HeroData;
    services?: ServicesData;
    doctor?: DoctorData;
    whyChooseUs?: WhyChooseUsData;
    facilities?: FacilitiesData;
    booking?: BookingData;
    contact?: ContactData;
    footer: {
      brand: { title: string; description?: string; badge?: string };
      reachOut: {
        title?: string;
        address: string;
        phone1?: { display: string; href: string };
        phone2?: { display: string; href: string };
        email?: string | null;
      };
      opdTimings?: { title?: string; regular?: string; sunday?: string };
      legal?: { copyright?: string };
    };
  };
}

interface StandardPageTemplateProps {
  content: PageContentData;
}

export default function StandardPageTemplate({ content }: StandardPageTemplateProps) {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative mesh-bg overflow-x-hidden w-full">
      {/* Background Mesh Overlay */}
      <div className="fixed inset-0 bg-transparent medical-grid pointer-events-none z-0" />

      {/* Sticky Navigation bar */}
      <Navbar onOpenBooking={openBooking} data={content.layout.navbar} />

      {/* Main content with bottom padding for mobile sticky action bar */}
      <main className="flex-1 pb-16 md:pb-0 relative z-10 w-full overflow-x-hidden">
        {content.layout.hero && <HeroLayout onOpenBooking={openBooking} data={content.layout.hero} />}
        {content.layout.services && <ServicesLayout onOpenBooking={openBooking} data={content.layout.services} />}
        {content.layout.doctor && <DoctorLayout onOpenBooking={openBooking} data={content.layout.doctor} />}
        {content.layout.whyChooseUs && <WhyChooseUsLayout data={content.layout.whyChooseUs} />}
        {content.layout.facilities && <FacilitiesLayout data={content.layout.facilities} />}
        {content.layout.booking && <AppointmentBookingLayout data={content.layout.booking} />}
        {content.layout.contact && <ContactLayout data={content.layout.contact} />}
      </main>

      <Footer data={content.layout.footer} />
      <EmergencyFloating onOpenBooking={openBooking} />

      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
      />
    </div>
  );
}

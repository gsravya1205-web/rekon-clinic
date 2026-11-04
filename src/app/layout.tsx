import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import content from "@/tier3-content/content.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.layout.seo.title,
  description: content.layout.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://rekonclinic.com/#clinic",
        "name": "Rekon Centre for Joint Replacement Surgery and Orthopedics",
        "alternateName": "Rekon Clinic",
        "telephone": "+91 98491 46668",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "48-3-65, B.V.K. College Road, Srinagar, Ram Talkies 40 Feet Road, opposite Gouthami Complex",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530016",
          "addressCountry": "IN"
        },
        "medicalSpecialty": [
          "Orthopedic",
          "JointReplacement"
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://rekonclinic.com/#doctor",
        "name": "Dr. B. V. R. N. Varma",
        "jobTitle": "Orthopedic & Joint Replacement Surgeon",
        "medicalSpecialty": "Orthopedic",
        "worksFor": {
          "@id": "https://rekonclinic.com/#clinic"
        },
        "image": "/images/dr_varma.png"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

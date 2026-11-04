/**
 * Rekon Centre Clinic Configuration File
 * Easily update verified clinic details here.
 * Fields with null values are awaiting official confirmation from the clinic.
 */

export interface ClinicConfig {
  clinicName: string;
  doctorName: string;
  qualifications: string;
  designation: string;
  doctorPhoto: string;
  phone: string;
  phoneDisplay: string;
  email: string | null;            // Pending official clinic email address
  whatsappNumber: string | null;   // Pending official WhatsApp Business number
  foundingYear: number | null;     // Pending verified clinic founding year
  experienceYears?: number;        // 27 years
  consultationFee: number | null;  // ₹500
  consultationHours: string;
  languages?: string[];
  emergencyCare: string;
  practoUrl?: string;
  googleMapsUrl: string;
  appointmentEndpoint: string | null; // Real backend submission destination (when configured)
  address: {
    doorNo: string;
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
}

export const clinicConfig: ClinicConfig = {
  clinicName: "Rekon Centre for Joint Replacement Surgery and Orthopedics",
  doctorName: "Dr. B. V. R. N. Varma",
  qualifications: "MBBS, Diploma in Orthopaedics (D. Ortho)",
  designation: "Orthopedic & Joint Replacement Surgeon",
  doctorPhoto: "/images/dr_varma.png",
  phone: "+919849146668",
  phoneDisplay: "+91 98491 46668",
  email: null,            // Keep null until official clinic email is verified
  whatsappNumber: null,   // Keep null until official WhatsApp Business number is verified
  foundingYear: null,     // Do not invent or estimate
  experienceYears: 27,
  consultationFee: 500,
  consultationHours: "Mon - Sat: 12:00 PM – 03:00 PM & 06:00 PM – 08:00 PM",
  languages: ["English", "Telugu", "Hindi"],
  emergencyCare: "Orthopedic emergencies attended promptly",
  practoUrl: "https://www.practo.com/visakhapatnam/doctor/dr-b-v-r-n-varma-1-orthopedist",
  googleMapsUrl: "https://maps.google.com/?q=Rekon+Centre+For+Joint+Replacement+Surgery+Dwarakanagar+Visakhapatnam",
  appointmentEndpoint: null, // Will connect when official booking API or email service is ready
  address: {
    doorNo: "48-3-65",
    street: "Srinagar, Ram Talkies 40 Feet Road",
    landmark: "Opposite Gouthami Complex, B.V.K. College Road",
    area: "Dwarakanagar",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530016",
    country: "India",
    fullFormatted: "48-3-65, B.V.K. College, Srinagar, Ram Talkies 40 Feet Road, opposite Gouthami Complex, Visakhapatnam, Andhra Pradesh 530016"
  }
};

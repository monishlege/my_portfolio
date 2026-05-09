export interface CareerItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  link?: string;
}

export const education: CareerItem[] = [
  {
    role: "BE in Computer Science Engineering",
    company: "CITNC, Bangalore",
    duration: "2025-2029",
    description: "Pursuing a Bachelor of Engineering in Computer Science, focusing on AI, modular systems, and biometric platforms.",
  },
  {
    role: "GenAI & AI Certifications",
    company: "IBM & Outskill",
    duration: "2024",
    description: "Completed IBM Applied AI Certificate and Outskill GenAI Accelerator, mastering prompt engineering and AI-driven workflows.",
  },
];

export const experience: CareerItem[] = [
  {
    role: "Chairman",
    company: "IEEE CITNC PHOTONICS SOCIETY",
    duration: "MARCH 2026 - PRESENT",
    description: "Leading the IEEE Photonics Society at CITNC, driving innovation in optical technologies and coordinating technical events.",
    link: "https://ieee.citnc.co.in/photonics",
  },
  {
    role: "Webmaster",
    company: "IEEE CITNC AESS Society",
    duration: "JAN 2026 - MARCH 2026",
    description: "Managed web assets and digital presence for the IEEE Aerospace and Electronic Systems Society at CITNC.",
  },
];

import React from 'react'
import FireHydrantSystem from './FireHydrantSystem'
export const metadata = {
  title: "Fire Hydrant System Installation & Maintenance, Delhi NCR | Adhunik FireXpert",

  description: "Top fire hydrant system contractor in Delhi NCR. We offer installation, testing, and maintenance of internal and external fire hydrant systems. Get a reliable quote!",
  
  keywords: [
    "fire hydrant system installation",
    "fire hydrant contractor",
    "fire hydrant pump installation",
    "fire hydrant testing and maintenance",
    "fire fighting hydrant system",
    "fire hydrant system Delhi NCR",
    "fire hydrant installation Gurgaon",
    "fire hydrant maintenance Noida",
    "industrial fire hydrant systems",
    "commercial fire hydrant systems",
    "Adhunik FireXpert",
  ],

  
  robots: "index, follow",

  // --- Open Graph Metadata ---
  openGraph: {
    title: "Reliable Fire Hydrant System Installation & Maintenance | Adhunik FireXpert",

    description: "Your trusted contractor in Delhi NCR for designing, installing, and maintaining robust internal and external fire hydrant systems for maximum fire protection.",

    // **IMPORTANT**: Update the URL to match the new page's slug
    url: "https://www.adhunikfirexpert.com/fire-hydrant-system", 
    type: "website",

    images: [
      {
        // **IMPORTANT**: Use an image relevant to a Fire Hydrant System
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300836/hydrant_system_yvuuue.webp", 
        width: 1200, 
        height: 630, 
        alt: "A clearly visible, well-maintained red fire hydrant system outdoors.",
      },
    ],
  },

  // --- Canonical Tag ---
  alternates: {
    // **IMPORTANT**: Set the canonical URL for this specific page
    canonical: "https://www.adhunikfirexpert.com/fire-hydrant-system", 
  },

  // --- Twitter Card Metadata ---
  twitter: {
    card: "summary_large_image",
    title: "Reliable Fire Hydrant System Installation & Maintenance | Adhunik FireXpert",
    description: "Your trusted contractor in Delhi NCR for designing, installing, and maintaining robust internal and external fire hydrant systems for maximum fire protection.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300836/hydrant_system_yvuuue.webp", 
  },

};

export default function page() {
  return (
    <>

<FireHydrantSystem/>
    </>
  )
}

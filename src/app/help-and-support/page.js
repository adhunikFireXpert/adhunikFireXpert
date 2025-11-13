import React from 'react'
import HelpSupport from './HelpSupport'

export const metadata = {
  title: "Top Fire Fighting Company in Delhi NCR | Adhunik FireXpert",

  description: "Adhunik FireXpert offers complete fire safety solutions including installation, maintenance, and supply of fire extinguishers, suppression systems, and fire doors in Delhi NCR.",

  keywords: [
    "fire safety systems Delhi NCR",
    "fire suppression systems",
    "fire extinguisher supply",
    "fire door service",
    "commercial fire safety",
    "industrial fire solutions",
    "Adhunik FireXpert",
    "fire protection services",
  ],

  robots: "index, follow",

  alternates: {
    // Assuming this metadata is for the main home page or a primary contact page
    canonical: "https://www.adhunikfirexpert.com/help-and-support",
  },

  openGraph: {
    title: "Adhunik FireXpert - Comprehensive Fire Safety Solutions",
    description: "Your trusted partner for fire safety and protection systems across Delhi, Gurugram, and Noida. We provide certified installation and maintenance services.",
    type: "website",
    url: "https://www.adhunikfirexpert.com/help-and-support",
    siteName: "Adhunik FireXpert",
    locale: "en_IN",
    creator: "Adhunik FireXpert",

    images: [
      {
        // Replace with your actual logo or primary hero image URL for best results
        url: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755763611/next2_d1l72h.webp",
        width: 1200,
        height: 630,
        alt: "Adhunik FireXpert Logo - Fire Safety Experts in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adhunik FireXpert - Comprehensive Fire Safety Solutions",
    description: "Your trusted partner for fire safety and protection systems across Delhi, Gurugram, and Noida. We provide certified installation and maintenance services.",
    image: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755763611/next2_d1l72h.webp", // Use the same OpenGraph image for consistency
  },
}
export default function page() {
  return (
    <>

        <HelpSupport />
        
    </>
  )
}

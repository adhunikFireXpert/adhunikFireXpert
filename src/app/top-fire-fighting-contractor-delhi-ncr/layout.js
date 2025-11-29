import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikfirexpert.com'),

  title: "Top Fire Fighting Contractor in Delhi NCR: A 5-Point Guide",
  description: "Choosing a fire fighting contractor in Delhi NCR? Our 5-point guide covers turnkey solutions, Fire NOC, AMCs, and why a legacy of trust matters.",

  keywords: [
    "fire fighting contractor in Delhi NCR",
    "top fire fighting contractor in Delhi",
    "fire fighting company in Noida",
    "fire safety contractor Gurugram",
    "turnkey fire safety solutions",
    "Fire NOC consultancy",
    "fire suppression system",
    "fire hydrant installation",
    "fire alarm system",
    "Adhunik Firexpert",
    "Adhunik Powertech"
  ],

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/top-fire-fighting-contractor-delhi-ncr",
  },

  openGraph: {
    title: "Top Fire Fighting Contractor in Delhi NCR: A 5-Point Guide",
    description: "Choosing a fire fighting contractor in Delhi NCR? Our 5-point guide covers turnkey solutions, Fire NOC, AMCs, and why a legacy of trust matters.",
    url: "https://www.adhunikfirexpert.com/top-fire-fighting-contractor-delhi-ncr",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/djablkulv/image/upload/v1762253754/Top_Fire_Fighting_Contractor_In_Delhi_NCR_Adhunik_FireXpert_n8gxyv.webp", // IMPORTANT: Create and upload an image for this
        width: 1200,
        height: 630,
        alt: "A compliant fire hydrant and sprinkler system in a commercial building in Delhi NCR.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Top Fire Fighting Contractor in Delhi NCR: A 5-Point Guide",
    description: "Choosing a fire fighting contractor in Delhi NCR? Our 5-point guide covers turnkey solutions, Fire NOC, AMCs, and why a legacy of trust matters.",
    image: "https://res.cloudinary.com/djablkulv/image/upload/v1762253754/Top_Fire_Fighting_Contractor_In_Delhi_NCR_Adhunik_FireXpert_n8gxyv.webp", // IMPORTANT: Use the same image
  },
};

export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}

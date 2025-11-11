import React from 'react'
import KitchenFireSuppression from './KitchenFireSuppression'
export const metadata = {

  title: "Kitchen Fire Suppression System Installation | Adhunik FireXpert",

  description: "Specialized kitchen fire suppression system contractor in Delhi NCR. We install UL/FM approved wet chemical systems for commercial kitchens and restaurants. Ensure safety and compliance.",
  
  keywords: [
    "kitchen fire suppression system installation",
    "wet chemical fire suppression",
    "commercial kitchen fire safety",
    "restaurant fire suppression system",
    "kitchen hood fire system",
    "modular fire suppression system",
    "fire suppression contractor Delhi NCR",
    "kitchen fire suppression Gurgaon",
    "fire NOC compliance for kitchens",
    "Adhunik FireXpert",
  ],

  
  robots: "index, follow",

  // --- Open Graph Metadata ---
  openGraph: {
    title: "Commercial Kitchen Fire Suppression Systems | Adhunik FireXpert",

    description: "Expert installation and maintenance of wet chemical fire suppression systems for commercial kitchens, ensuring maximum safety and regulatory compliance in Delhi NCR.",

    // **IMPORTANT**: Update the URL to match the new page's slug
    url: "https://www.adhunikfirexpert.com/kitchen-suppression-system", 
    type: "website",

    images: [
      {
        // **IMPORTANT**: Use an image relevant to a Kitchen Suppression System
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1748498085/kitchen_supression_bzvbhu.webp", 
        width: 1200, 
        height: 630, 
        alt: "A wet chemical fire suppression system installed above a commercial kitchen hood and range.",
      },
    ],
  },

  // --- Canonical Tag ---
  alternates: {
    // **IMPORTANT**: Set the canonical URL for this specific page
    canonical: "https://www.adhunikfirexpert.com/kitchen-suppression-system", 
  },

  // --- Twitter Card Metadata ---
  twitter: {
    card: "summary_large_image",
    title: "Commercial Kitchen Fire Suppression Systems | Adhunik FireXpert",
    description: "Expert installation and maintenance of wet chemical fire suppression systems for commercial kitchens, ensuring maximum safety and regulatory compliance in Delhi NCR.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1748498085/kitchen_supression_bzvbhu.webp", 
  },

};
export default function page() {
  return (

    <>

<KitchenFireSuppression/>

    </>

  )
}

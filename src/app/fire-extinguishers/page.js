import React from 'react'
import FireExtinguisher from './FireExtinguisher'



export const metadata = {
  // Primary Title: More emphasis on 'Supplier' and 'Delhi NCR' for broader reach
  title: "Ceasefire & Kanex Fire Extinguisher Supplier in Delhi NCR | Adhunik FireXpert",
  
  // Description: Clearer call to action and emphasis on the full service lifecycle
  description: "Authorized dealers and suppliers of certified fire extinguishers (Ceasefire, Kanex) in Delhi NCR. Get installation, annual maintenance contract (AMC), and refilling services. Contact for a quote!",
  
  keywords: [
    // Brand/Location Focus (Keep highly specific)
    "Ceasefire fire extinguisher dealer Delhi NCR",
    "Kanex fire extinguisher supplier Gurgaon",
    "Ceasefire fire extinguisher price", // Added a search intent keyword
    "Kanex fire extinguisher refilling", // Added a service intent keyword
    
    // Service Focus (Expanded & Clarified)
    "fire extinguisher refilling service Delhi",
    "fire extinguisher AMC services",
    "fire extinguisher installation commercial",
    "fire fighting equipment supplier Delhi NCR",
    
    // Product Type Focus (Maintain variety)
    "ABC powder fire extinguisher",
    "CO2 fire extinguisher supplier",
    "Clean Agent fire extinguishers",
    "Wet Chemical kitchen fire extinguisher",
    "Adhunik FireXpert",
  ],

  robots: "index, follow",

  openGraph: {
    // Open Graph Title: Punchier and uses the 'Authorized' status for trust
    title: "Authorized Supplier of Ceasefire & Kanex Fire Extinguishers | Adhunik FireXpert",
    
    // Open Graph Description: Concise, trust-building, and lists key services
    description: "Your trusted source in Delhi NCR for top fire extinguisher brands like Ceasefire & Kanex. We offer certified products, installation, refilling, and AMC services.",
    
    url: "https://www.adhunikfirexpert.com/fire-extinguishers",
    type: "website",
    siteName: "Adhunik FireXpert", // Added siteName for professional presentation
    
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1755670654/wet_chemical_oucpzt.webp",
        width: 1200,
        height: 630,
        alt: "Ceasefire and Kanex Fire Extinguishers supplied by Adhunik FireXpert in a commercial setting.", // Improved alt text
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-extinguishers",
  },

  twitter: {
    card: "summary_large_image",
    title: "Authorized Supplier of Ceasefire & Kanex Fire Extinguishers | Adhunik FireXpert",
    description: "Your trusted source in Delhi NCR for top fire extinguisher brands like Ceasefire & Kanex. We offer certified products, installation, refilling, and AMC services.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1755670654/wet_chemical_oucpzt.webp",
  },
};


export default function page() {
  return (
    <>

        <FireExtinguisher/>
        
    </>
  )
}

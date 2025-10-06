import React from 'react'
import FireExtinguisher from './FireExtinguisher'



export const metadata = {

  title: "Ceasefire & Kanex Fire Extinguisher Dealer | Adhunik FireXpert",
  description: "Leading fire extinguisher dealers & suppliers in Delhi. We provide certified brands like Ceasefire & Kanex, plus refilling, installation & AMC services.",
  
  keywords: [
    "Ceasefire fire extinguisher dealer", 
    "Ceasefire fire extinguisher supplier",
    "Kanex fire extinguisher supplier",
    "Kanex fire extinguisher dealer",
    "fire extinguisher dealers in Delhi",
    "fire extinguisher suppliers in Gurgaon",
    "Adhunik FireXpert", 
    "ABC fire extinguisher",
    "CO2 fire extinguisher",
    "Clean Agent extinguishers",
    "Wet Chemical extinguishers",
    "Class D fire extinguisher", 
    "fire extinguisher refilling Delhi",
    "fire extinguisher installation",
    "fire extinguisher AMC", 
    "fire fighting equipment",
    "industrial fire extinguishers",
    "commercial fire safety",

  ],

  robots: "index, follow",

  openGraph: {
    title: "Authorized Ceasefire & Kanex Fire Extinguisher Dealer in Delhi | Adhunik FireXpert",
    description: "Your trusted source in Delhi NCR for top fire extinguisher brands like Ceasefire & Kanex. We offer a full range of products, plus installation, refilling, and AMC services.",
    url: "https://www.adhunikfirexpert.com/fire-extinguishers",  
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1755670654/wet_chemical_oucpzt.webp", 
        width: 1200, 
        height: 630, 
        alt: "Ceasefire and Kanex Fire Extinguishers supplied by Adhunik FireXpert.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-extinguishers",
  },

  twitter: {
    card: "summary_large_image",
    title: "Authorized Ceasefire & Kanex Fire Extinguisher Dealer in Delhi | Adhunik FireXpert",
    description: "Your trusted source in Delhi NCR for top fire extinguisher brands like Ceasefire & Kanex. We offer a full range of products, plus installation, refilling, and AMC services.",
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

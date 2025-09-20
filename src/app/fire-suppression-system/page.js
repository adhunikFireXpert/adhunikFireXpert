import React from 'react'
import FireSuppressionPage from './FireSuppression'


export const metadata = {

  title: "Fire Suppression System in Delhi NCR | Adhunik FireXpert",

  description:
    " Expert fire suppression contractor in Delhi NCR. We install clean agent, CO2 & kitchen systems to protect your critical assets. 19+ years of trust. Get a quote! ",

  keywords: [
    "fire suppression system",
    "fire suppression contractor",
    "clean agent system installation",
    "CO2 suppression system",
    "kitchen fire suppression system",
    "gas suppression system",
    "fire suppression Delhi NCR",
    "fire suppression company Gurgaon",
    "fire suppression Noida",
    "data center fire suppression",
    "server room fire protection",
    "industrial fire suppression",
    "electrical panel fire protection",
    "vehicle fire suppression",
    "Adhunik FireXpert",
    "19+ years legacy",
    "NFPA standards",
  ],


  robots: "index, follow",

  openGraph: {
    title: "Advanced Fire Suppression Systems | Adhunik FireXpert",
    description:
      "Protect your critical assets with our expert-designed fire suppression systems. We specialize in clean agent, CO2, and kitchen solutions for facilities in Delhi NCR.",
    url: "https://www.adhunikfirexpert.com/fire-suppression-system",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618768/fire-suppression-system-2_wgxcfe.jpg",
        width: 1200,
        height: 630,
        alt: "A clean agent fire suppression system installed in a data center.",
      },
    ],
  },

  alternates: {

    canonical: "https://www.adhunikfirexpert.com/fire-suppression-system",

  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Fire Suppression Systems | Adhunik FireXpert",
    description:
      "Protect your critical assets with our expert-designed fire suppression systems. We specialize in clean agent, CO2, and kitchen solutions for facilities in Delhi NCR.",
    images: [
      "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618768/fire-suppression-system-2_wgxcfe.jpg",
    ],
  },
  
};


export default function page() {
  return (

    <>

    <FireSuppressionPage/>
    
    </>
  )
}

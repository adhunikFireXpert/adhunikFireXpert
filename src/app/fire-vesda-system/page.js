import React from 'react'
import VesdaSystem from './VesdaSystem'


export const metadata = {

  title: "VESDA Smoke Detection, Delhi NCR | Adhunik FireXpert",
  description: "Protect your data center or cleanroom with a VESDA system. Adhunik FireXpert are expert installers of aspirating smoke detection in Delhi NCR. Get a quote!",
  
  keywords: [ 

    "VESDA system",
    "aspirating smoke detection",
    "early warning smoke detection",
    "ASD system",
    "air sampling smoke detector",
    "VESDA system Delhi NCR",
    "aspirating smoke detection Gurgaon",
    "early warning system Noida",
    "data center fire protection",
    "cleanroom smoke detection",
    "server room fire safety",
    "mission critical facility protection",
    "hospital smoke detection",
    "Adhunik FireXpert",
    "expert VESDA installers",
    "certified VESDA installation",

  ],

  

  openGraph: {

    title: "VESDA : The Earliest Warning Smoke Detection | Adhunik FireXpert",
    description: "Discover how aspirating smoke detection (ASD) provides the earliest possible warning of a fire, protecting your most critical assets long before traditional alarms.",
    url: "https://www.adhunikfirexpert.com/fire-vesda-system", 
    type: "article", 
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618666/Zedexfire4_wz58ui.webp", 
        width: 1200, 
        height: 630, 
        alt: "A VESDA aspirating smoke detection unit protecting a data center.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-vesda-system",  
  },

  twitter: {
    card: "summary_large_image",
    title: "VESDA: The Earliest Warning Smoke Detection | Adhunik FireXpert",
    description: "Discover how aspirating smoke detection (ASD) provides the earliest possible warning of a fire, protecting your most critical assets long before traditional alarms.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618666/Zedexfire4_wz58ui.webp",  
  },
};


export default function page() {
  return (
    
    <>
    
    <VesdaSystem/>
    
    </>
  )
}

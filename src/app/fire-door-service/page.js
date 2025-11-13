import React from 'react'
import FireDoor from './FireDoor'

export const metadata = {
  title: "Fire Door Installation & Maintenance Service in Delhi NCR | Adhunik FireXpert",
  description: "Adhunik FireXpert provides professional fire door installation, repair, and maintenance services across Delhi NCR. Ensure building safety and compliance. Get a free quote!",

  keywords: [
    "fire door service",
    "fire door installation",
    "fire door maintenance",
    "fire door repair",
    "fire rated doors",
    "industrial fire doors",
    "fire door inspection",
    "building fire safety",
    "fire door Delhi NCR",
    "fire door Gurgaon",
    "fire door Noida",
    "Adhunik FireXpert",
    "expert fire door installers",
    "certified fire door service",
    "fire safety compliance",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Certified Fire Door Services for Commercial Buildings | Adhunik FireXpert",
    description: "Protect your property and occupants with our certified fire door installation and maintenance services in Delhi NCR, ensuring regulatory compliance and maximum safety.",
    url: "https://www.adhunikfirexpert.com/fire-door-service",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp", // Placeholder URL - replace with an actual fire door image URL
        width: 1200,
        height: 630,
        alt: "A modern, high-quality fire rated door in a commercial building hallway.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-door-service",
  },

  twitter: {
    card: "summary_large_image",
    title: "Certified Fire Door Services for Commercial Buildings | Adhunik FireXpert",
    description: "Protect your property and occupants with our certified fire door installation and maintenance services in Delhi NCR, ensuring regulatory compliance and maximum safety.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp", // Placeholder URL - replace with an actual fire door image URL
  },
};


export default function page() {
  return (
    <>
    
<FireDoor/>

    </>
  )
}

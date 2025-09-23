import React from 'react'
import FireDoor from './FireDoor'


export const metadata = {
  title: "Fire Door Supplier & Installer in Delhi NCR | Adhunik FireXpert",
  description: "Adhunik FireXpert is the top supplier & installer of certified fire doors in Delhi NCR. We offer steel and wooden doors with expert service. Get a free quote!",
  
  keywords: [

    "fire door installation",
    "fire door supplier",
    "fire door service",
    "certified fire doors",
    "fire rated doors",
    "fire doors Delhi",
    "fire door installer Gurgaon",
    "fire door supplier Noida",
    "Delhi NCR",
    "steel fire doors",
    "wooden fire doors",
    "fire rated glass doors",
    "commercial fire doors",
    "industrial fire doors",
    "fire door maintenance",
    "Adhunik FireXpert",
    "expert fire door installers",
    "CBRI certified doors",

  ],
  
  robots: "index, follow",
  
  openGraph: {
    title: "Certified Fire Door Installation & Service | Adhunik FireXpert",
    description: "A certified fire door is a critical life-saving system. Discover how Adhunik FireXpert protects facilities in Delhi NCR with expert supply, installation, and maintenance services.",
    url: "https://www.adhunikfirexpert.com/fire-door-service",  
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp",  
        width: 1200, 
        height: 630, 
        alt: "A certified steel fire door installed in a commercial building corridor.",
      },
    ],
  },
  
  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-door-service",  
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Certified Fire Door Installation & Service | Adhunik FireXpert",
    description: "A certified fire door is a critical life-saving system. Discover how Adhunik FireXpert protects facilities in Delhi NCR with expert supply, installation, and maintenance services.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp", 
  },
};


export default function page() {
  return (
    <>
    
<FireDoor/>

    </>
  )
}

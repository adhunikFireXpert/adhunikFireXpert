import React from 'react'
import FireAlarm from './FireAlarm'


export const metadata = {

  title: "Addressable Fire Alarm Systems, Delhi NCR | Adhunik FireXpert ",

  description: "Expert installation of addressable fire alarm systems in Delhi NCR. Learn the benefits vs. conventional alarms & ensure your facility's safety. Get a free quote!",
  
  keywords: [ 

    "addressable fire alarm system",
    "fire alarm system installation",
    "fire alarm contractor",
    "intelligent fire detection",
    "conventional vs addressable fire alarm",
    "fire alarm system Delhi NCR",
    "fire alarm installation Gurgaon",
    "fire alarm company Noida",
    "fire alarm for hospitals",
    "data center fire alarm system",
    "industrial fire alarm",
    "commercial building fire alarm",
    "Adhunik FireXpert",

  ],

  

  openGraph: {
    title: "Intelligent Fire Detection: Addressable Fire Alarm Systems | Adhunik FireXpert",
    description: "Discover the critical difference between conventional and intelligent addressable fire alarm systems. Learn why precision detection is essential for modern facilities.",

    url: "https://www.adhunikfirexpert.com/addressable-fire-alarm-system-in-delhi-ncr",

    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-alarm-system_02_uzvg1k.webp",
        width: 1200, 
        height: 630, 
        alt: "An addressable fire alarm system control panel.",
      },
    ],
    
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/addressable-fire-alarm-system-in-delhi-ncr",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intelligent Fire Detection: Addressable Fire Alarm Systems | Adhunik FireXpert",
    description: "Discover the critical difference between conventional and intelligent addressable fire alarm systems. Learn why precision detection is essential for modern facilities.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-alarm-system_02_uzvg1k.webp",
  },
};


export default function page() {
  return (
    <>
    
    <FireAlarm/>
    
    </>
  )
}

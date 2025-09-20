import React from 'react'
import AntiRodentSystem from './AntiRodentSystem'


export const metadata = {

  title: "Ultrasonic Rodent Repellent, Delhi NCR | Adhunik FireXpert",
  description: "Stop rodent damage & fire risks in Delhi NCR. We install ultrasonic anti-rodent systems for industrial & commercial facilities. Get a free site assessment today!",
  
  keywords: [ 

    "ultrasonic rodent repellent",
    "anti-rodent system",
    "electronic pest control",
    "rodent control system",
    "humane rodent control", 
    "rodent control Delhi NCR",
    "pest control Gurgaon for industry",
    "anti-rodent system Noida", 
    "data center rodent protection",
    "warehouse rodent control",
    "server room pest control",
    "industrial pest management",
    "commercial rodent repellent", 
    "prevent rodent wire damage",
    "stop electrical fires from rats",
    "chemical-free pest control", 
    "Adhunik FireXpert",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Advanced Ultrasonic Anti-Rodent Systems | Adhunik FireXpert",
    description: "Protect your critical infrastructure from rodent damage and fire risks with our humane, chemical-free ultrasonic repellent systems. Ideal for industrial & commercial facilities in Delhi NCR.",
    url: "https://www.adhunikfirexpert.com/anti-rodent-system",  

    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/anti-rodent-system1_llhvue.webp",
        width: 1200, 
        height: 630, 
        alt: "An ultrasonic anti-rodent system installed in a commercial facility.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/anti-rodent-system",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced Ultrasonic Anti-Rodent Systems | Adhunik FireXpert",
    description: "Protect your critical infrastructure from rodent damage and fire risks with our humane, chemical-free ultrasonic repellent systems. Ideal for industrial & commercial facilities in Delhi NCR.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/anti-rodent-system1_llhvue.webp",  
  },
};


export default function page() {
  return (
    <>

    <AntiRodentSystem/>
    
    </>
  )
}

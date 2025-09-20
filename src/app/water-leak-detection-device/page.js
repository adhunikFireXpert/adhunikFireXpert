import React from 'react'
import WaterLeakDetection from './WaterLeakDetection'


export const metadata = {

  title: "Water Leak Detection System, Delhi NCR | Adhunik FireXpert",
  description: "Protect your data center & server room from water damage. We install advanced water leak detection (WLD) systems in Delhi NCR. 19+ years of trust. Get a quote!",
  
  keywords: [ 

    "water leak detection system",
    "WLD system installation",
    "water leak sensor",
    "leak detection contractor",
    "flood prevention system", 
    "water leak detection Delhi NCR",
    "WLD system Gurgaon",
    "leak detection company Noida", 
    "data center water leak detection",
    "server room leak detection",
    "protect critical facilities",
    "industrial water leak sensor",
    "BMS integration", 
    "prevent water damage",
    "early warning leak detection", 
    "Adhunik FireXpert",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Protect Critical Assets with Water Leak Detection | Adhunik FireXpert",
    description: "Prevent catastrophic downtime. We install advanced Water Leak Detection (WLD) systems for data centers, server rooms, and critical facilities in Delhi NCR.",
    url: "https://www.adhunikfirexpert.com/water-leak-detection-device",  
    type: "website",
    images: [
      {
        url: "https://www.adhunikfirexpert.com/images/wld-system-preview.jpg",  
        width: 1200, 
        height: 630, 
        alt: "A water leak detection sensor cable installed in a data center.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/water-leak-detection-device",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Protect Critical Assets with Water Leak Detection | Adhunik FireXpert",
    description: "Prevent catastrophic downtime. We install advanced Water Leak Detection (WLD) systems for data centers, server rooms, and critical facilities in Delhi NCR.",
    image: "https://www.adhunikfirexpert.com/images/wld-system-preview.jpg", 
  },
};


export default function page() {
  return (
    <>

<WaterLeakDetection/>

    </>
  )
}

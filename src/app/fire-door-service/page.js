import React from 'react'
import FireDoor from './FireDoor'

export const metadata = {

  title: "Kitchen Fire Suppression System in Delhi NCR | Adhunik FireXpert",
  description: "Adhunik FireXpert installs kitchen fire suppression systems in Delhi NCR. Protect your restaurant or hotel with automatic grease fire protection. Get a free quote!",
  
  keywords: [
    
    "kitchen fire suppression system",
    "automatic fire suppression",
    "wet chemical fire system",
    "Class K fire system",
    "grease fire protection",
    "commercial kitchen fire safety",
    "kitchen fire system Delhi",
    "restaurant fire safety Gurgaon",
    "hotel fire protection Noida",
    "Delhi NCR",
    "restaurant fire suppression",
    "hotel kitchen safety",
    "cloud kitchen fire system",
    "hospital kitchen fire protection",
    "industrial kitchen safety",
    "Adhunik FireXpert",
    "expert fire system installers",
    "certified kitchen fire system",

  ],
  
  robots: "index, follow",
  
  openGraph: {
    title: "Automatic Fire Protection for Commercial Kitchens | Adhunik FireXpert",
    description: "Grease fires can be devastating. Learn how our automatic wet chemical systems protect restaurants, hotels, and cloud kitchens in Delhi NCR, ensuring safety and minimizing downtime.",
    url: "https://www.adhunikfirexpert.com/kitchen-fire-suppression-system",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618659/kitchenfire_biq0pf.webp",
        width: 1200, 
        height: 630, 
        alt: "An automatic kitchen fire suppression system with nozzles aimed at commercial cooking appliances.",
      },
    ],
  },
  
  alternates: {
    canonical: "https://www.adhunikfirexpert.com/kitchen-fire-suppression-system",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Automatic Fire Protection for Commercial Kitchens | Adhunik FireXpert",

    description: "Grease fires can be devastating. Learn how our automatic wet chemical systems protect restaurants, hotels, and cloud kitchens in Delhi NCR, ensuring safety and minimizing downtime.",

    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618659/kitchenfire_biq0pf.webp",
  },
};


export default function page() {
  return (
    <>
    
<FireDoor/>

    </>
  )
}

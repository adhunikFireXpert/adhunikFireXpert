import React from 'react'
import OurCompany from './OurCompany'


export const metadata = {
  title: "Our Story : A 19+ Year Legacy in Fire Safety | Adhunik FireXpert",
  description: "Learn about Adhunik FireXpert. We are a specialized fire safety company born from the 19+ year engineering legacy of Adhunik Powertech. Read our story & mission.",
  
  keywords: [ 
    "about Adhunik FireXpert",
    "fire safety company India",
    "fire protection experts",
    "Adhunik Powertech legacy",
    "Adhunik Guds & Services", 
    "fire safety legacy",
    "turnkey fire solutions",
    "fire safety mission",
    "fire safety vision",
    "industrial fire safety",
    "commercial fire protection",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Our Story: A Legacy of Engineering Safety | Adhunik FireXpert",
    description: "Discover the story behind Adhunik FireXpert. Learn how our 19+ year legacy from Adhunik Powertech shapes our mission to be India's most trusted fire safety partner.",
    url: "https://www.adhunikfirexpert.com/our-company",  
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618609252884-c29e29b32205?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        width: 1200, 
        height: 630, 
        alt: "The Adhunik FireXpert team, committed to engineering safety.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com/our-company",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Story: A 19+ Year Legacy of Engineering Safety | Adhunik FireXpert",
    description: "Discover the story behind Adhunik FireXpert. Learn how our 19+ year legacy from Adhunik Powertech shapes our mission to be India's most trusted fire safety partner.",
    image: "https://images.unsplash.com/photo-1618609252884-c29e29b32205?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
};



export default function page() {
  return (
    <>
    <OurCompany/>
    </>
  )
}

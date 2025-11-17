import React from 'react'
import AdhunikLegacy from './AdhunikLegacy'


export const metadata = {

  title: "Adhunik FireXpert : The Legacy of Adhunik Powertech",
  description: "Adhunik Powertech's expert fire safety division is now Adhunik FireXpert. Discover our new company focused on turnkey fire protection solutions for industrial & commercial clients.",
  
  keywords: [ 

    "Adhunik FireXpert",
    "Adhunik Powertech legacy",
    "Adhunik Guds & Services",
    "new fire safety company", 
    "turnkey fire protection",
    "fire safety solutions",
    "fire hydrant systems",
    "fire sprinkler installation",
    "fire alarm systems",
    "fire NOC consultancy",
    "fire safety AMC", 
    "industrial fire safety",
    "commercial fire protection",
    "fire safety for factories", 
    "fire safety India",
    "fire protection engineering",

  ],

  robots: "index, follow",

  openGraph: {
    title: "A Legacy of Trust, A Future of Safety : Introducing Adhunik FireXpert",
    description: "Discover the next chapter in our 19+ year engineering legacy. Adhunik FireXpert is the new, specialized company born from Adhunik Powertech's proven fire safety expertise.",
    url: "/blog/adhunik-firexpert-the-legacy-of-adhunik-powertech",  
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        width: 1200, 
        height: 630, 
        alt: "The official launch of Adhunik FireXpert, a specialized fire safety company.",
      },
    ],
  },

  alternates: {
    canonical: "/adhunik-firexpert-the-legacy-of-adhunik-powertech",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Adhunik FireXpert: The Legacy of Adhunik Powertech",
    description: "Adhunik Powertech's expert fire safety division is now Adhunik FireXpert. Discover our new company focused on turnkey fire protection solutions.",
    image: "https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  },
};

export default function page() {
  return (
    <>

<AdhunikLegacy/>

    </>
  )
}

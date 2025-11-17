import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikfirexpert.com'),

  // Adjusted title to match the "Why Choosing a Certified Fire Contractor Matters" blog post
  title: "Why Choosing a Certified Fire Contractor Matters: Protecting Lives and Assets",
  description: "Learn the critical difference between a general and a certified fire contractor. Expertise, regulatory compliance (NBC, Fire NOC), and quality workmanship ensure your system works when it counts.",

  // Keywords tailored to the certified contractor content
  keywords: [
    "certified fire contractor",
    "fire protection contractor expertise",
    "Fire NOC compliance",
    "NFPA standards India",
    "fire safety quality management",
    "Adhunik FireXpert",
    "UL listed FM approved equipment",
    "fire safety investment"
  ],

  // Adjusted canonical URL to match the blog content's likely path
  alternates: {
    canonical: "/why-choosing-a-certified-fire-contractor-matters",
  },

  openGraph: {
    title: "Why Choosing a Certified Fire Contractor Matters: Protecting Lives and Assets",
    description: "Learn the critical difference between a general and a certified fire contractor. Expertise, regulatory compliance (NBC, Fire NOC), and quality workmanship ensure your system works when it counts.",
    url: "/blog/why-choosing-a-certified-fire-contractor-matters",
    type: "article",
    images: [
      {
        // Reusing the general image URL but updating the alt text
        url: "https://res.cloudinary.com/djablkulv/image/upload/v1763366956/Choosinga_Certified_Fire_Contractor_Matters_rcyzir.webp",
        width: 1200,
        height: 630,
        alt: "A certified fire safety system installation in a commercial building in Delhi NCR.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Why Choosing a Certified Fire Contractor Matters: Protecting Lives and Assets",
    description: "Learn the critical difference between a general and a certified fire contractor. Expertise, regulatory compliance (NBC, Fire NOC), and quality workmanship ensure your system works when it counts.",
    image: "https://res.cloudinary.com/djablkulv/image/upload/v1763366956/Choosinga_Certified_Fire_Contractor_Matters_rcyzir.webp",
  },
};
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
import React from 'react'
import GlowSignEmergencyLight from './GlowSignEmergencyLight'
export const metadata = {
  // Primary page title for search engine results
  title: "Glow Sign Emergency Light Installation & Service | Adhunik FireXpert",
  
  // Concise description for search engine snippet
  description: "Adhunik FireXpert offers professional installation, testing, and maintenance of Glow Sign Emergency Lights for clear evacuation routes in Delhi NCR. Ensure compliance.",

  // Relevant keywords for search engine context
  keywords: [
    "glow sign emergency light",
    "emergency exit light installation",
    "fire exit signage service",
    "glow sign maintenance",
    "emergency light testing",
    "fire safety lighting",
    "glow sign Delhi NCR",
    "Adhunik FireXpert",
    "emergency lighting compliance",
    "exit sign installation",
  ],

  // Instructs search engines to index and follow links on the page
  robots: "index, follow",

  // Open Graph protocol for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Reliable Glow Sign Emergency Light Services | Adhunik FireXpert",
    description: "Secure your evacuation paths with certified Glow Sign Emergency Light installation and maintenance services in Delhi NCR. Maximize safety and meet all regulations.",
    url: "https://www.adhunikfirexpert.com/glow-signage-&-emergency-lights",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1707234377854-69d1f130b4ff?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder URL - *Replace with an actual image of a glow sign/exit light*
        width: 1200,
        height: 630,
        alt: "A clear, illuminated green glow sign indicating an emergency exit in a dark hallway.",
      },
    ],
  },

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.adhunikfirexpert.com/glow-signage-&-emergency-lights",
  },

  // Twitter Card for optimal display when the page is shared on X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Reliable Glow Sign Emergency Light Services | Adhunik FireXpert",
    description: "Secure your evacuation paths with certified Glow Sign Emergency Light installation and maintenance services in Delhi NCR. Maximize safety and meet all regulations.",
    image: "https://images.unsplash.com/photo-1707234377854-69d1f130b4ff?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // *Ensure this URL matches the Open Graph image URL*
  },
};














export default function page() {
  return (
    <>

<GlowSignEmergencyLight/>

    </>
  )
}

import React from 'react';

// SEO Metadata for the Fire Hydrant System Blog Post
export const metadata = {
  metadataBase: new URL('https://www.adhunikfirexpert.com'),

  title: "Why Your Fire Hydrant System is Your Most Critical Investment | Adhunik FireXpert",
  description: "The Fire Hydrant System is the backbone of fire safety. Learn why proper installation, compliance, and maintenance are non-negotiable for industrial and commercial facilities.",

  keywords: [
    "Fire Hydrant System installation",
    "fire hydrant contractor Delhi NCR",
    "industrial fire protection",
    "Fire NOC compliance",
    "NFPA fire standards",
    "fire hydrant maintenance",
    "wet riser system",
    "dry riser system",
    "Adhunik Firexpert"
  ],

  // IMPORTANT: Update the canonical path for this specific blog post
  alternates: {
    canonical: "https://www.adhunikfirexpert.com/fire-hydrant-system-installation",
  },

  openGraph: {
    title: "The Unseen Backbone: Why Your Fire Hydrant System is Critical",
    description: "The Fire Hydrant System is the backbone of fire safety. Learn why proper installation, compliance, and maintenance are non-negotiable for industrial and commercial facilities.",
    url: "https://www.adhunikfirexpert.com/fire-hydrant-system-installation",
    type: "article",
    images: [
      {
        // IMPORTANT: Use the image relevant to the Fire Hydrant blog post
        url: "https://res.cloudinary.com/djablkulv/image/upload/v1762858929/fire-hydrant_wro1oi.webp",
        width: 1200,
        height: 630,
        alt: "A large, industrial fire hydrant and hose reel system ready for use.",
      },
    ],
  },
   robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "The Unseen Backbone: Why Your Fire Hydrant System is Critical",
    description: "The Fire Hydrant System is the backbone of fire safety. Learn why proper installation, compliance, and maintenance are non-negotiable for industrial and commercial facilities.",
    image: "https://res.cloudinary.com/djablkulv/image/upload/v1762858929/fire-hydrant_wro1oi.webp",
  },
};

export default function BlogLayout({ children }) {
  // This layout simply wraps the page content (the blog component)
  return (
    <>{children}</>
  );
}

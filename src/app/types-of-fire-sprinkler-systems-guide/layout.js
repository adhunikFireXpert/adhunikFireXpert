import React from 'react';

// SEO Metadata for this blog post
export const metadata = {
  metadataBase: new URL('https://www.adhunikfirexpert.com'),

  title: "Types of Fire Sprinkler Systems: Which is Best for Your Building in 2025?",
  description: "Compare Wet, Dry, Pre-action, & Deluge systems. Learn which fire sprinkler system is best for your building in 2025 with Adhunik Firexperts.",

  keywords: [
    "fire sprinkler systems types",
    "wet pipe sprinkler system",
    "dry pipe sprinkler system",
    "pre-action fire sprinkler",
    "deluge sprinkler system",
    "ESFR sprinkler system",
    "water mist suppression",
    "fire protection systems 2025",
    "Adhunik Firexperts",
    "fire suppression installation Delhi NCR"
  ],

  alternates: {
    canonical: "/types-of-fire-sprinkler-systems-guide",
  },

  openGraph: {
    title: "Types of Fire Sprinkler Systems: Which is Best for Your Building in 2025?",
    description: "Compare Wet, Dry, Pre-action, & Deluge systems. Learn which fire sprinkler system is best for your building in 2025 with Adhunik Firexperts.",
    url: "/blog/types-of-fire-sprinkler-systems-guide",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/djablkulv/image/upload/v1764048353/fire-sprinklers-blog_l1zgdj.webp", // IMPORTANT: Ensure you upload a relevant image and update this link
        width: 1200,
        height: 630,
        alt: "2025 guide to fire sprinkler types displayed next to an active fire sprinkler releasing water for fire protection.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Types of Fire Sprinkler Systems: Which is Best for Your Building in 2025?",
    description: "Compare Wet, Dry, Pre-action, & Deluge systems. Learn which fire sprinkler system is best for your building in 2025 with Adhunik Firexperts.",
    image: "https://res.cloudinary.com/djablkulv/image/upload/v1764048353/fire-sprinklers-blog_l1zgdj.webp", // IMPORTANT: Use the same image
  },
};

export default function BlogLayout({ children }) {
  return (
    <>{children}</>
  );
}
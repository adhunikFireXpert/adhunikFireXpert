import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatsapButton from "@/components/watsap";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {

   title: {

    default: "Adhunik FireXpert: Top Fire Contractor in Delhi NCR",
    template: "%s"

  },

  
  description: "Top fire fighting contractor in Delhi NCR & India. We provide turnkey solutions from risk audits to installation & NOC consultancy. 19+ years of proven excellence.",
  
  keywords: [ 
    "fire fighting contractor",
    "fire safety solutions",
    "turnkey fire protection",
    "fire protection company",
    "fire safety audit",
    "fire NOC consultancy",
    "fire safety AMC", 
    "fire hydrant system installation",
    "fire sprinkler systems",
    "fire alarm and detection system",
    "gas suppression system", 
    "fire contractor in Delhi NCR",
    "fire safety Gurgaon",
    "fire fighting company Noida",
    "fire safety services India", 
    "Adhunik FireXpert",
    "Adhunik Powertech legacy",
    "award-winning fire contractor",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Your Expert Fire Fighting Contractor in Delhi NCR | Adhunik FireXpert",
    description: "Protect your facility with Adhunik FireXpert. We deliver complete, turnkey fire safety solutions built on a 19+ year legacy of engineering excellence. Request a safety audit today.",
    url: "https://www.adhunikfirexpert.com", 
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        width: 1200, 
        height: 630, 
        alt: "Adhunik FireXpert - Comprehensive Fire Safety Solutions",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikfirexpert.com",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Your Expert Fire Fighting Contractor in Delhi NCR | Adhunik FireXpert",
    description: "Protect your facility with Adhunik FireXpert. We deliver complete, turnkey fire safety solutions built on a 19+ year legacy of engineering excellence.",
    image: "https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
  },
};



 



export default function RootLayout({ children }) {
  return (

    <html lang="en">

     <head>

   <meta itemProp="name" content="Adhunik FireXpert" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adhunik FireXpert",
              "url": "https://www.adhunikfirexpert.com",
              "alternateName": "Adhunik FireXpert",
            }),
          }}
        />

  <Script
     async src="https://www.googletagmanager.com/gtag/js?id=G-BL66YEM2XD"
        strategy="afterInteractive"
      />


      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BL66YEM2XD');
        `}
      </Script>

        <GoogleTagManager gtmId="G-BL66YEM2XD" />

        <Script id="google-analytics" >

          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BL66YEM2XD');`}

        </Script>


        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />


        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

      </head>


      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
      
      <Analytics/>

      <SpeedInsights/>

      <WatsapButton phoneNumber="+919599050534" />

      <Header/>
      
        {children}

        <Footer/>
        

      </body>

    </html>
  );
}

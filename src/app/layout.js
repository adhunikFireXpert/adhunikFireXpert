import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatsapButton from "@/components/watsap";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fire Fighting Equipment & Safety Solutions India | Adhunik Firexpert",
  description: "Zedex Fire offers a comprehensive range of high-quality fire fighting equipment, safety solutions, and suppression systems. Protect your assets with our reliable and innovative fire protection technology for commercial, industrial, and residential needs",
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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <WatsapButton phoneNumber="+919599050534" />

      <Header/>

        {children}

        <Footer/>
        
      </body>
    </html>
  );
}

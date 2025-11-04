"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, Award, Users, FileCheck, ShieldCheck, Phone } from "lucide-react";

export default function TopFireContractorBlogPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 5-Point Checklist Data, formatted in your requested style
  const checklistItems = [
    {
      title: "1. A Proven Engineering Legacy, Not Just a Startup",
      icon: <Award className="w-6 h-6" />, // Using Lucide icon
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Fire safety is a life-and-death discipline; it's not the place for a new, untested company. A top contractor has a long, proven history. Adhunik Firexpert is born from the <strong>19+ year engineering legacy of Adhunik Powertech</strong>, inheriting a portfolio of over 600+ delivered projects and an award-winning commitment to quality.
          </p>
        </>
      ),
    },
    {
      title: "2. True Turnkey Solutions (A Single Partner)",
      icon: <Users className="w-6 h-6" />,
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            A top contractor manages the entire project, not just one part. This 'turnkey' approach is a key benefit, providing you with a single point of accountability. Our services cover everything from the initial design and risk assessment to installation, commissioning, and final handover.
          </p>
        </>
      ),
    },
    {
      title: "3. Comprehensive Fire NOC Consultancy",
      icon: <FileCheck className="w-6 h-6" />,
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            The biggest pain point for any business in Delhi NCR is navigating the complex process of obtaining a Fire No Objection Certificate (NOC). A true partner guides you through it. Our team are experts in the compliance process and local building codes, ensuring your design and installation will pass inspection smoothly.
          </p>
        </>
      ),
    },
    {
      title: "4. A Full Spectrum of Solutions",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Your facility has diverse risks. You need a contractor who can handle all of them, not just sell extinguishers. We design and install the full range of fire safety systems: Fire Hydrants, Sprinkler Systems, Advanced Fire Alarms (Addressable & Conventional), and specialized Gas Suppression Systems (FM-200, Novec).
          </p>
        </>
      ),
    },
    {
      title: "5. 24/7 After-Sales Support (AMCs)",
      icon: <Phone className="w-6 h-6" />,
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            A fire system is useless if it fails during an emergency. The relationship must continue after installation. We offer comprehensive Annual Maintenance Contracts (AMCs) and a 24/7 rapid-response team to ensure your systems are always compliant and ready.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/djablkulv/image/upload/v1762253754/Top_Fire_Fighting_Contractor_In_Delhi_NCR_Adhunik_FireXpert_n8gxyv.webp" // IMPORTANT: Upload this image
                alt="A professional fire safety system installation in a commercial building in Delhi NCR."
                width={1260}
                height={750}
                priority
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
                How to Choose the Top Fire Fighting Contractor in Delhi NCR
              </h1>
              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
                For facility managers and business owners in Delhi NCR, fire safety is a non-negotiable legal and moral responsibility. Choosing a <Link href="https://www.adhunikfirexpert.com/" className="text-red py-3"> <strong>fire fighting contractor</strong> </Link> is one of the most critical decisions you will ever make. It’s not just about compliance; it's about protecting lives, property, and your business continuity.
              </p>
              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
                But in a crowded market, how do you distinguish a simple installer from a true, long-term safety partner? This 5-point guide will help you select the best contractor for your needs.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/help-and-support" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Get a Free Safety Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* Adhunik Legacy Connection Section */}
          <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm">
              <div className="flex flex-col items-center">
                <p className="text-sm text-red-900 text-justify">
                  <strong className="text-xl text-red-600 block text-center mb-2">
                    Our Connection: A Direct Legacy of Engineering Excellence
                  </strong>
                  <Link href="https://www.adhunikfirexpert.com/" className="text-red py-3"> <strong>Adhunik FireXpert</strong> </Link> is not a new company; it is the strategic evolution of the proven, award-winning fire safety division of <Link href="https://www.adhunikpowertech.com/" className="text-red py-3"> <strong>Adhunik Powertech</strong> </Link>. For over 19+ years, our team built a reputation for engineering excellence within a larger organization. We've now focused that 19-year legacy and a portfolio of 600+ delivered projects into this single, specialized company. When you hire Adhunik Firexpert, you get the agility of a specialist backed by the 19+ year trust and stability of the Adhunik brand.
                </p>
              </div>
            </div>
          </section>

          {/* 5-Point Checklist Section (Styled like your reference) */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800">What to Look For in a Top Fire Fighting Contractor</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">Use this 5-point checklist to evaluate potential partners in Delhi, Noida, and Gurugram.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col items-start md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 w-full">
                    <div className="bg-red-50 text-red-500 w-12 h-12 items-center rounded-full flex-shrink-0 flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="w-9/12 md:w-full font-bold text-red-700 text-sm text-left mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-justify text-sm text-gray-600">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="mb-30">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="prose prose-red max-w-none"> {/* Assuming you have prose-red or similar */}
                <h2 className="text-2xl text-center font-semibold text-red-800 mt-6 mb-4">The Benefits of a True Turnkey Partner</h2>
                <p>The primary benefit of working with an end-to-end provider like Adhunik Firexpert is <strong>total peace of mind</strong>. You don't have to manage a separate designer, a hardware supplier, an installer, and a maintenance company. We handle it all.</p>
                
                <h3 className="text-xl text-center font-semibold text-red-700 mt-4 mb-2">A Complete Spectrum of Fire Safety Solutions:</h3>
                <ul>
                  <li><strong>Fire Hydrant & Sprinkler Systems:</strong> We design and install robust hydrant systems for manual intervention and automated sprinkler systems (wet, dry, and pre-action) that provide a powerful first line of defense.</li>
                  <li><strong>Fire Alarm & Detection Systems:</strong> We install advanced conventional and addressable fire alarm systems, complete with smoke, heat, and flame detectors for immediate, reliable alerts.</li>
                  <li><strong>Gas Suppression Systems:</strong> For mission-critical assets like data centers, server rooms, and electrical panels, we provide clean agent gas suppression (CO2, FM-200, Novec) that extinguishes fires without damaging sensitive equipment.</li>
                  <li><strong>Fire Extinguishers & Signage:</strong> We supply, install, and service a complete range of commercial and industrial-grade fire extinguishers and ensure your facility is equipped with clear, compliant safety signage.</li>
                </ul>
                <p>This integrated approach, combined with our deep engineering legacy from Adhunik Powertech, ensures every component works together flawlessly as a single, life-saving system.</p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Secure Your Facility with Delhi NCR's Trusted Fire Safety Expert</h2>
              <p className="text-red-100 mb-8 text-sm">Don't compromise on safety. Partner with Adhunik Firexpert and leverage a 19+ year legacy of engineering excellence. Contact our team today for a comprehensive site audit and consultation.</p>
              <div className="flex justify-center">
                <Link href="/help-and-support" className="bg-white text-md font-bold text-red-800 hover:bg-red-100 py-3 px-8 rounded-lg transition duration-300">
                  REQUEST A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

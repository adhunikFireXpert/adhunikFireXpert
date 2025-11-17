"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Award, ShieldCheck, Zap, FileText, Anchor, Activity, FileCheck } from "lucide-react"; // <-- FileCheck added here

export default function CertifiedContractorBlogPage() {
  // Data for the 'Why Certified Matters' section, using Lucide icons
  const whyCertifiedMatters = [
    {
      title: "1. Expertise That Saves Lives",
      icon: <Award className="w-6 h-6" />, // Represents proven qualification
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Fire safety demands a complex blend of engineering, hydraulics, and electrical knowledge. A certified contractor understands the specific fire load and risk profile of your facility to design the correct system (e.g., wet pipe, gas suppression) using precise calculations, adhering to NFPA and NBC codes.
          </p>
        </>
      ),
    },
    {
      title: "2. Uncompromising Regulatory Compliance",
      icon: <FileText className="w-6 h-6" />, // Represents legal and documentation
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Non-compliance is a serious legal and financial risk. A certified contractor is fluent in the National Building Code (NBC) Part 4, State Fire Service rules, and handles all necessary documentation, inspections, and liaison for the Fire No Objection Certificate (Fire NOC).
          </p>
        </>
      ),
    },
    {
      title: "3. Quality Workmanship and Reliability",
      icon: <ShieldCheck className="w-6 h-6" />, // Represents trust and quality
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Certification ensures adherence to an audited quality management system like ISO 9001. Our commitment means using components that meet stringent global standards, including ISI-marked and internationally recognized CE and  UL-listed products, guaranteeing equipment has been tested and verified to perform under fire conditions.
          </p>
        </>
      ),
    },
    {
      title: "4. Long-Term Functionality & Accountability",
      icon: <Activity className="w-6 h-6" />, // Represents maintenance and ongoing function
      desc: (
        <>
          <p className="text-sm text-start text-gray-600">
            Certification covers not just installation but the crucial elements of periodic Inspection, Testing, and Maintenance (ITM). A certified, reputable company carries professional liability insurance, protecting you from financial repercussions if an error occurs.
          </p>
        </>
      ),
    },
  ];

  // Data for the 'Adhunik FireXpert Solution' table
  const adhunikSolutions = [
    {
      category: "Active Systems",
      solution: "Fire Hydrant, Sprinkler Systems, Fire Alarm & Detection, Public Address Systems",
      importance: "Immediate, automated response to detect and suppress fire, protecting both large and complex facilities.",
    },
    {
      category: "Specialized Suppression",
      solution: "Gas Suppression (CO2, FM-200), Kitchen Fire Suppression Systems",
      importance: "Protection for mission-critical assets (data centers) and high-risk areas (commercial kitchens) where water damage is a concern.",
    },
    {
      category: "Consultancy",
      solution: "Fire Risk Audits, Fire NOC Consultancy, System Design",
      importance: "Expert guidance from the conceptual stage, ensuring the system is right for your unique hazard profile.",
    },
    {
      category: "Maintenance",
      solution: "Annual Maintenance Contracts (AMCs), Emergency Support",
      importance: "Guarantees system longevity and operational readiness, maintaining compliance year after year.",
    },
  ];


  return (
    <>
      {/* Outer Container for spacing and background */}
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="w-full md:w-6/12 order-2 md:order-1">
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
                Why Choosing a Certified Fire Contractor Matters: Protecting Lives and Assets with Unwavering Expertise
              </h1>
              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
                In the construction and maintenance of any building—be it a towering commercial complex, a bustling industrial plant, or a cozy residential society—there is no greater priority than fire safety. Yet, when it comes time to install, inspect, or maintain the intricate web of fire protection systems, many property owners face a critical choice: hire a general contractor or entrust the job to a <Link href="https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India" className="text-red-700 hover:text-red-900 font-bold underline">Certified Fire Protection Contractor</Link>.
              </p>

              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left font-semibold">
                The difference is not just a matter of preference; it is the difference between a system that looks compliant and one that is guaranteed to perform perfectly in a life-threatening emergency. Choosing a certified professional is the single most important decision you can make to safeguard your people, property, and business continuity.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/help-and-support" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                 Request Safety Evaluation
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12 order-1 md:order-2">
              <Image
                src="https://res.cloudinary.com/djablkulv/image/upload/v1763366956/Choosinga_Certified_Fire_Contractor_Matters_rcyzir.webp" // Use a relevant fire safety image
                alt="Professional inspection of a complex fire suppression system"
                width={1260}
                height={750}
                priority
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* The Critical Difference Section */}
          <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 text-center mb-8">The Critical Difference: Certified vs. Uncertified</h2>
            <p className="text-md text-gray-700 mb-6 text-center max-w-4xl mx-auto">
              A certified fire contractor is not just a tradesperson; they are a specialist whose qualifications are verified by recognized national and international bodies. This certification is proof of competence, compliance, and commitment to quality.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {whyCertifiedMatters.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 flex flex-col items-start p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-row gap-3 items-center mb-3">
                    <div className="bg-red-50 text-red-500 w-10 h-10 rounded-full flex-shrink-0 flex justify-center items-center">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-red-700 text-lg">
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

          {/* Adhunik FireXpert Introduction */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-red-500 to-red-700 p-6 md:p-10 rounded-xl shadow-xl text-white">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Adhunik FireXpert: Meeting Every Standard, Setting New Benchmarks
                </h2>
                <p className="text-red-100 text-md">
                  When the stakes are this high, you need a partner whose commitment to compliance and quality is proven. Adhunik FireXpert embodies the highest standards of fire safety expertise, leveraging a 19+ year engineering legacy for genuine peace of mind.
                </p>
              </div>
            </div>
          </section>

          {/* Integrated, 360-Degree Portfolio Section (Table) */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 text-center mb-8">Integrated, 360-Degree Firefighting Portfolio</h2>
            <p className="text-md text-gray-700 mb-6 text-center max-w-4xl mx-auto">
              A true expert provides more than a single product; they offer an integrated strategy. We manages the entire lifecycle of your fire protection needs with a single point of accountability.
            </p>
            <div className="overflow-x-auto shadow-lg rounded-xl border border-red-100">
              <table className="min-w-full divide-y divide-red-200">
                <thead className="bg-red-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">Service Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">Adhunik FireXpert Solution</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">Why it Matters</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {adhunikSolutions.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{row.solution}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.importance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The Takeaway & CTA */}
          <section className="mb-30">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-2xl border-t-4 border-red-700">
              <h2 className="text-2xl text-center font-bold text-red-800 mt-2 mb-6">The Takeaway: Invest in Certainty, Not Chance</h2>
              <p className="text-center text-gray-700 mb-6 max-w-4xl mx-auto">
                When you hire a certified fire contractor such as the expertise of Adhunik FireXpert, you are not simply buying pipes, wires, and alarms. You are investing in:
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                <div className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg flex-1 min-w-0">
                  <Zap className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-800">1. Life Safety: Assurance the system will work to maximize safe evacuation.</p>
                </div>
                <div className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg flex-1 min-w-0">
                  <Anchor className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-800">2. Asset Protection: Minimizing property damage and business interruption.</p>
                </div>
                <div className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg flex-1 min-w-0">
                  <FileCheck className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-800">3. Legal & Financial Security: Achieving full regulatory compliance and safeguarding insurance.</p>
                </div>
              </div>

              <p className="text-center text-gray-800 font-semibold mb-8">
                In a world where fire hazards pose an ever-present threat, a certified contractor is your definitive shield. Don't compromise on a service where failure is not an option. Choose the expert—choose the certainty of compliance, quality, and proven performance that Adhunik FireXpert delivers.
              </p>

              {/* Final CTA */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-700 mb-4">Protect Your People, Protect Your Future.</h3>
                <p className="text-gray-600 mb-6">Are you confident your current fire safety system meets every critical standard?</p>
                <Link href="/help-and-support" className="bg-red-700 text-lg font-bold text-white hover:bg-red-800 py-3 px-10 rounded-lg transition duration-300 shadow-md">
                 Get Your Free Fire Risk Audit
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
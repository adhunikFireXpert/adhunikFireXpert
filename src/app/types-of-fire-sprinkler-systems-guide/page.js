"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { 
  Droplets, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Waves, 
  Zap, 
  CloudRain, 
  Activity,
  CheckCircle,
  AlertTriangle,
  FileText, // Added for NFPA 13 Card
  Wrench    // Added for NFPA 25 Card
} from "lucide-react";

export default function FireSprinklerBlogPage() {

  // Data for "The Core Four"
  const sprinklerSystems = [
    {
      title: "1. The Wet Pipe Sprinkler System (The Industry Standard)",
      icon: <Droplets className="w-6 h-6" />,
      desc: (
        <>
          <div className="mb-4 text-center">
             {/* Placeholder for Image */}
             <div className="bg-gray-100 p-4 text-xs text-gray-500 italic rounded border border-dashed border-gray-300">
                            </div>
          </div>
          <p className="text-sm text-start text-gray-600 mb-2">
            The Wet Pipe System is the most common, cost-effective, and straightforward fire sprinkler system in use today.
          </p>
          <ul className="text-sm text-start text-gray-600 list-disc ml-4 space-y-2">
            <li>
              <strong>How it Works:</strong> The piping is permanently charged (filled) with water under pressure. When a fire creates enough heat to reach the activation temperature (typically <strong>135°F to 170°F</strong>), the heat-sensitive element breaks, and water discharges immediately.
            </li>
            <li><strong>Best Used For:</strong> Commercial (Offices, Retail, Schools) and Residential (Apartments).</li>
            <li><strong>Pros:</strong> Fastest response time, lowest cost, and simplest maintenance (NFPA 25 compliance).</li>
            <li><strong>Cons:</strong> Not suitable for freezing temperatures; risk of accidental leaks.</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. The Dry Pipe Sprinkler System (The Cold Climate Solution)",
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      desc: (
        <>
           <div className="mb-4 text-center">
             <div className="bg-gray-100 p-4 text-xs text-gray-500 italic rounded border border-dashed border-gray-300">
                            </div>
          </div>
          <p className="text-sm text-start text-gray-600 mb-2">
            Designed specifically to protect areas where the ambient temperature is not reliably maintained above <strong>40°F</strong>.
          </p>
          <ul className="text-sm text-start text-gray-600 list-disc ml-4 space-y-2">
            <li><strong>How it Works:</strong> Piping is filled with pressurized air/nitrogen. Water is held back by a dry pipe valve. When a head activates, air releases, the valve opens, and water fills the system.</li>
            <li><strong>Best Used For:</strong> Unheated spaces like parking garages, loading docks, and exterior canopies.</li>
            <li><strong>Pros:</strong> Eliminates frozen pipes; reduced water damage risk from minor leaks.</li>
            <li><strong>Cons:</strong> Slower response time (trip time) and higher complexity/cost due to air compressors.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. The Pre-Action Sprinkler System (The Asset Protection Solution)",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: (
        <>
           <div className="mb-4 text-center">
             <div className="bg-gray-100 p-4 text-xs text-gray-500 italic rounded border border-dashed border-gray-300">
                            </div>
          </div>
          <p className="text-sm text-start text-gray-600 mb-2">
            The gold standard for high-value, water-sensitive assets. It requires a two-step activation process.
          </p>
          <ul className="text-sm text-start text-gray-600 list-disc ml-4 space-y-2">
            <li><strong>How it Works:</strong> Pipes are filled with air. <strong>Step 1:</strong> Detection system (smoke/heat) activates valve. <strong>Step 2:</strong> Sprinkler head melts, releasing water.</li>
            <li><strong>Best Used For:</strong> Data centers, server rooms, museums, and archival vaults.</li>
            <li><strong>Pros:</strong> Maximum security against accidental discharge; targeted discharge.</li>
            <li><strong>Cons:</strong> Most expensive and complex installation; maintenance intensive.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. The Deluge Sprinkler System (The High-Hazard Powerhouse)",
      icon: <Waves className="w-6 h-6" />,
      desc: (
        <>
           <div className="mb-4 text-center">
             <div className="bg-gray-100 p-4 text-xs text-gray-500 italic rounded border border-dashed border-gray-300">
                            </div>
          </div>
          <p className="text-sm text-start text-gray-600 mb-2">
            Designed for environments where fire spreads extremely fast, demanding instantaneous, full-coverage saturation.
          </p>
          <ul className="text-sm text-start text-gray-600 list-disc ml-4 space-y-2">
            <li><strong>How it Works:</strong> All heads are open (no heat element). An external detection system triggers a valve that floods the entire zone simultaneously.</li>
            <li><strong>Best Used For:</strong> Aircraft hangars, chemical plants, and power generation facilities.</li>
            <li><strong>Pros:</strong> Maximum suppression and instantaneous full coverage.</li>
            <li><strong>Cons:</strong> High risk of extensive water damage; overkill for standard buildings.</li>
          </ul>
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
          <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-lg overflow-hidden relative">
            {/* Updated Image Component */}
            <img 
              src="https://res.cloudinary.com/djablkulv/image/upload/v1764048353/fire-sprinklers-blog_l1zgdj.webp" 
              alt="Fire protection sprinkler system"
             className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
            The Future of Fire Safety: 2025 & Beyond
          </h1>
          <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
            The fire protection landscape is changing. In 2025, a fire safety system isn&apos;t just a requirement; it&apos;s an <strong>intelligent, critical infrastructure</strong> that protects your most valuable assets—your people, your property, and your operational continuity.
          </p>
          <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
            Choosing the right fire sprinkler system is arguably the most important decision a property owner will make. The best system for a corporate office is drastically different from the ideal system for a data center. Selecting the wrong one can lead to high costs, code non-compliance, or system failure.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="/help-and-support" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center gap-2">
              Get Expert System Guidance
            </a>
          </div>
        </div>
      </section>

          {/* Adhunik Introduction Section */}
          <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm">
              <div className="flex flex-col items-center">
                <p className="text-sm text-red-900 text-justify">
                  <strong className="text-xl text-red-600 block text-center mb-2">
                    Expert Guidance for the Modern Era
                  </strong>
                  At <Link href="https://www.adhunikfirexpert.com/" className="text-red py-3"> <strong>Adhunik Firexperts</strong></Link>, we’ve broken down the four primary types of fire sprinkler systems, explored advanced technologies, and provided a clear guide to help you determine the optimal fire defense strategy for your specific environment in the modern era of building intelligence and stringent codes.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION I: The Core Four Grid */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800">I. The Core Four: Main System Types</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Every water-based fire sprinkler system falls into one of these four primary categories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {sprinklerSystems.map((item, index) => (
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
                  <div className="w-full">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* SECTION II: Advanced Systems */}
          <section className="mb-12">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <div className="prose prose-red max-w-none">
                <h2 className="text-2xl text-center font-semibold text-red-800 mt-2 mb-6">II. Beyond the Basics: Advanced Systems for 2025</h2>
                <p className="text-gray-700 mb-6 text-center">The best system choice often involves modern variations driven by speed and water efficiency.</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* ESFR */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="text-red-600 w-6 h-6" />
                      <h3 className="text-lg font-bold text-red-700">A. Early Suppression, Fast Response (ESFR)</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li><strong>What It Is:</strong> A specialized wet pipe system for Early Suppression, not just control.</li>
                      <li><strong>Key Feature:</strong> Delivers higher water volume with larger droplets and momentum.</li>
                      <li><strong>Best Used For:</strong> High-piled storage warehouses and e-commerce fulfillment.</li>
                      <li><strong>Advantage:</strong> Eliminates costly in-rack sprinklers, allowing flexible layouts.</li>
                    </ul>
                  </div>

                  {/* Water Mist */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                     <div className="flex items-center gap-3 mb-3">
                      <CloudRain className="text-red-600 w-6 h-6" />
                      <h3 className="text-lg font-bold text-red-700">B. Water Mist Suppression</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li><strong>What It Is:</strong> Discharges fine atomized mist instead of droplets.</li>
                      <li><strong>Key Feature:</strong> Efficiently absorbs heat and displaces oxygen.</li>
                      <li><strong>Best Used For:</strong> Cruise ships, museums, historical buildings.</li>
                      <li><strong>Advantage:</strong> Uses up to <strong>90% less water</strong>, minimizing collateral damage.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION III: IoT Trends */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/3">
                   <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                     <Activity /> III. The 2025 Trend: IoT & Predictive Maintenance
                   </h2>
                   <p className="text-sm text-gray-700 mb-4">
                     The biggest trend in 2025 is the integration of <strong>IoT (Internet of Things)</strong>. Modern systems are being fitted with smart sensors connected to a Building Management System (BMS).
                   </p>
                   <ul className="text-sm text-gray-700 space-y-3">
                     <li className="flex items-start gap-2">
                       <CheckCircle className="w-4 h-4 text-red-600 mt-1" />
                       <span><strong>Real-Time Monitoring:</strong> Instant alerts on pressure drops or leaks.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <CheckCircle className="w-4 h-4 text-red-600 mt-1" />
                       <span><strong>Predictive Maintenance:</strong> AI algorithms predict component failure before it happens.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <CheckCircle className="w-4 h-4 text-red-600 mt-1" />
                       <span><strong>Automated Compliance:</strong> Digital records simplify NFPA 25 compliance.</span>
                     </li>
                   </ul>
                </div>
                 {/* Right Side: Image *
                 <div className="w-full md:w-1/3 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="{E3991F6D-B3E2-4DAD-B6AC-4231268B7C22}.png" 
                alt="IoT-enabled fire sprinkler head with sensors" 
                className="w-full h-auto rounded"
              />
            </div> 
          </div>*/}
            
              </div>
            </div>
          </section>

          {/* SECTION IV: Comparison Table */}
          <section className="mb-16">
            <div className="text-center mb-8">
               <h2 className="text-2xl md:text-3xl font-bold text-red-800">IV. Which System is Best for Your Building?</h2>
               <p className="mt-2 text-gray-600 text-sm">Comparing systems by Occupancy and Hazard Classification.</p>
            </div>
            
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-red-800 text-white">
                    <th className="px-5 py-3 border-b-2 border-red-900 text-left text-xs font-semibold uppercase tracking-wider">Building Type</th>
                    <th className="px-5 py-3 border-b-2 border-red-900 text-left text-xs font-semibold uppercase tracking-wider">Hazard Level</th>
                    <th className="px-5 py-3 border-b-2 border-red-900 text-left text-xs font-semibold uppercase tracking-wider">Recommended System</th>
                    <th className="px-5 py-3 border-b-2 border-red-900 text-left text-xs font-semibold uppercase tracking-wider">Rationale</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Corporate Office / School</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Light Hazard</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-bold text-red-700">Wet Pipe</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Lowest cost, fastest response.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Data Center / Museum</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Light Hazard (Asset-Sensitive)</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-bold text-red-700">Double Interlock Pre-Action</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Eliminates accidental water damage.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Unheated Warehouse / Garage</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Ordinary Hazard</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-bold text-red-700">Dry Pipe</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Prevents freezing pipes.</td>
                  </tr>
                   <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Logistics Hub</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Extra Hazard Group 1/2</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-bold text-red-700">ESFR System</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Controls high-stacked commodities.</td>
                  </tr>
                   <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Chemical Plant / Hangar</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Extra Hazard Group 2</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-bold text-red-700">Deluge System</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">Rapid, simultaneous full discharge.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

           {/* UPDATED: Code Compliance Column Cards */}
           <section className="mb-16">
              <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                   <AlertTriangle className="text-yellow-500" /> The Final Step: Code Compliance
                 </h2>
                 <p className="mt-2 text-gray-600 text-sm">No matter the system you choose, these two factors are non-negotiable in 2025.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1: NFPA 13 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
                   <div className="flex items-start gap-4">
                      <div className="bg-yellow-50 p-3 rounded-full text-yellow-600">
                         <FileText className="w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-800 text-lg mb-2">1. Adherence to NFPA 13</h3>
                         <p className="text-sm text-gray-600">Design must match the calculated <strong>hazard level</strong> (Light, Ordinary, or Extra). Your system must be hydraulically calculated to deliver the precise density.</p>
                      </div>
                   </div>
                </div>

                {/* Card 2: NFPA 25 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
                   <div className="flex items-start gap-4">
                      <div className="bg-yellow-50 p-3 rounded-full text-yellow-600">
                         <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-800 text-lg mb-2">2. Lifecycle Maintenance (NFPA 25)</h3>
                         <p className="text-sm text-gray-600">Regular <strong>Inspection, Testing, and Maintenance (ITM)</strong> is a legal responsibility. Partnering with a certified expert is the only way to ensure compliance.</p>
                      </div>
                   </div>
                </div>
              </div>
           </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Secure Your Building with Expert Fire Protection Solutions</h2>
              <p className="text-red-100 mb-6 text-sm">
            Each facility has its own fire risks, so selecting the right sprinkler system starts with a proper evaluation. Our certified fire safety engineers assess your site, identify hazards, and recommend the most effective system to keep your building safe, reliable,and complete compliance for 2025 and beyond.</p><div className="flex justify-center">
                <Link href="/help-and-support" className="bg-white text-md font-bold text-red-800 hover:bg-red-100 py-3 px-8 rounded-lg transition duration-300">
                 REQUEST FREE CONSULTATION
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

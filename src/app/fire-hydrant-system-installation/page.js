"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// FIX: Phone icon must be imported from lucide-react
import { Zap, Scale, Building, Wrench, Package, Phone } from "lucide-react"; 

export default function FireHydrantsBlogPage() {

    // Components of a Robust Hydrant System Data
    const componentItems = [
        {
            title: "1. Fire Pump House (The Engine)",
            icon: <Zap className="w-6 h-6" />,
            desc: "This houses the main pump set, including a main electric pump, a standby diesel pump (for power failure), and a jockey pump (to maintain pressure consistency).",
        },
        {
            title: "2. Water Storage Tank",
            icon: <Package className="w-6 h-6" />,
            desc: "A dedicated water reservoir designed to hold the specific volume required by local fire codes for the duration of a major incident.",
        },
        {
            title: "3. Piping Network (The Lifeline)",
            icon: <Wrench className="w-6 h-6" />,
            desc: "A heavy-duty, corrosion-resistant network of pipes (often MS or galvanized) that reliably connects the pump house to all the hydrant points.",
        },
        {
            title: "4. Landing Valves & Hydrant Points",
            icon: <Building className="w-6 h-6" />,
            desc: "The external connection points where fire hoses are attached. These use standardized fittings for quick interface by the fire service.",
        },
        {
            title: "5. Hose Reels & Hose Boxes",
            icon: <Scale className="w-6 h-6" />,
            desc: "Strategically placed stations containing hoses, nozzles, and necessary tools for immediate use by trained occupants and first responders.",
        },
    ];

    return (
        <>
            <div className="bg-gray-50 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    
                    {/* Hero Section - Blog Title & Intro */}
                    <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
                        <div className="w-full md:w-6/12 order-2 md:order-1">
                            <h1 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-red-800 mb-6 leading-tight">
                                The Unseen Backbone: Why Your Fire Hydrant System Installation is Your Most Critical Investment
                            </h1>
                            {/* UPDATED PARAGRAPH 1 with keyword link */}
                            <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
                                In the world of fire safety, many think of smoke detectors and sprinkler heads, but the true hero—the system that provides the massive water volume needed to combat a large, structural fire—is the Fire Hydrant System. For superior service and expertise, trust the Adhunik Top Fire Contractor, a name synonymous with safety across the region.
                            </p>
                            {/* UPDATED PARAGRAPH 2 with keyword link */}
                            <p className="text-sm text-gray-700 mb-4 text-justify md:text-left">
                                For industrial facilities, high-rise buildings, and commercial complexes, this system is not just an optional safety feature; it is the absolute backbone of fire protection. We specialize in designing, installing, and maintaining robust fire safety infrastructure. We are part of the legacy of the 
                                <Link 
                                    href="https://www.adhunikpowertech.com/top-Fire-Fighting-Company-in-Delhi-NCR-And-India" 
                                    className="text-red-700 hover:text-red-900 font-bold underline"
                                >
                                    Trusted Fire Protection Division of Adhunik Powertech 
                                </Link>
                                , ensuring unmatched quality and compliance.
                            </p>
                            <div className="flex justify-center md:justify-start mt-6">
                                <Link href="/help-and-support" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 order-1 md:order-2">
                            <Image
                                src="https://res.cloudinary.com/djablkulv/image/upload/v1762858929/fire-hydrant_wro1oi.webp" // IMPORTANT: Replace with a specific Hydrant System image
                                alt="A large, industrial fire hydrant and hose reel system ready for use."
                                width={1260}
                                height={750}
                                priority
                                className="w-full h-auto rounded-xl shadow-xl"
                            />
                        </div>
                    </section>

                    {/* Core Problem/Solution Section */}
                    <section className="bg-white p-6 md:p-10 rounded-xl shadow-lg border-t-4 border-red-600 mb-16">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">
                            What Exactly is a Fire Hydrant System?
                        </h2>
                        <p className="text-base text-gray-700 mb-6 text-center max-w-4xl mx-auto">
                            A fire hydrant system is a complex network of piping, pumps, and valves strategically located across a premises. Its primary function is to provide a ready, pressurized supply of water to fire services personnel.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-red-700 mt-8 mb-4 text-center">
                            Why This System is Non-Negotiable
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 bg-red-50 rounded-lg shadow-sm border border-red-200">
                                <p className="font-bold text-red-700 mb-1">Massive Water Flow</p>
                                <p className="text-sm text-gray-600">Sprinklers are for early suppression, but when a fire escalates, fire brigades need the high flow and high-pressure capability that only a professionally installed hydrant system can deliver.</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg shadow-sm border border-red-200">
                                <p className="font-bold text-red-700 mb-1">Compliance & Legal Mandate</p>
                                <p className="text-sm text-gray-600">Local building codes and international standards (like NFPA) strictly mandate these systems. Non-compliance is a legal risk and a major insurance liability, demanding immediate attention to Fire NOC compliance.</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg shadow-sm border border-red-200">
                                <p className="font-bold text-red-700 mb-1">Property Protection</p>
                                <p className="text-sm text-gray-600">By empowering quick and effective firefighting, this system minimizes structural damage, protecting your assets and ensuring business continuity.</p>
                            </div>
                        </div>
                    </section>

                    {/* Component Breakdown Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-red-800">The Critical Components of a Robust Hydrant System</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                                A high-quality fire hydrant system is only as reliable as its weakest link. We ensures every component is top-tier and perfectly integrated.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {componentItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg border border-red-100 shadow-md"
                                >
                                    <div className="bg-red-50 text-red-500 w-12 h-12 rounded-full flex justify-center items-center mb-3 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-red-700 text-base mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-justify text-sm text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Adhunik Difference and Maintenance Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Adhunik Difference */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200">
                                <h2 className="text-2xl font-bold text-red-800 mb-4">The Adhunik FireXperts Difference: Precision & Compliance</h2>
                                <p className="text-gray-700 mb-4 text-sm">
                                    When you partner with Adhunik Fire Xperts, you are choosing an expertise built on rigorous standards and deep industry knowledge. We don't just install equipment; we engineer solutions.
                                </p>
                                <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
                                    <li><strong>Hydraulic Calculation & Design:</strong> We perform detailed hydraulic calculations to determine the exact specifications needed, ensuring 100% compliance with all relevant Indian and international safety norms.</li>
                                    <li><strong>Quality Installation:</strong> We use only certified, high-grade materials and employ experienced technicians, ensuring the system is installed to withstand extreme fire conditions.</li>
                                    <li><strong>Regulatory Documentation:</strong> We manage the complex paperwork, certifications, and approvals required by local fire departments, saving you time and preventing costly project delays.</li>
                                </ul>
                            </div>

                            {/* Maintenance Mandate */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200">
                                <h2 className="text-2xl font-bold text-red-800 mb-4">Installation, Inspection, and Maintenance: Your Mandate</h2>
                                <p className="text-gray-700 mb-4 text-sm">
                                    An installed fire hydrant system is not a 'set-it-and-forget-it' solution. Regular inspection and maintenance are not merely best practice—they are a legal and ethical obligation.
                                </p>
                                <table className="min-w-full divide-y divide-red-200 border border-red-200">
                                    <thead className="bg-red-50">
                                        <tr>
                                            <th className="px-3 py-2 text-left text-xs font-medium text-red-700 uppercase tracking-wider">Frequency</th>
                                            <th className="px-3 py-2 text-left text-xs font-medium text-red-700 uppercase tracking-wider">Service Focus</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600 font-semibold">Weekly Walkthrough</td>
                                            <td className="px-3 py-2 text-sm text-gray-500">Checking pump house environment, fuel levels, and jockey pump pressure.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600 font-semibold">Monthly Detailed Check</td>
                                            <td className="px-3 py-2 text-sm text-gray-500">Running main pump sets, checking flow, voltage, and battery integrity.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600 font-semibold">Annual Comprehensive Test</td>
                                            <td className="px-3 py-2 text-sm text-gray-500">Full system hydro-testing, pressure relief valve checks, and internal pipe inspection.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-xs italic text-gray-500 mt-2">Neglecting maintenance is the same as having no system at all.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Final CTA Section */}
                    <section className="bg-gradient-to-r from-red-700 to-red-900 rounded-xl p-8 text-white shadow-2xl">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-xl md:text-3xl font-bold mb-4">Secure Your Safety, Secure Your Future</h2>
                            <p className="text-red-100 mb-8 text-sm md:text-base">
                                A fully operational fire hydrant system is the ultimate security blanket. Don't risk compliance penalties or human safety. Contact us today—we provide the Xperts you need.
                            </p>
                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                <Link href="/help-and-support" className="bg-white text-md font-extrabold text-red-800 hover:bg-red-100 py-3 px-8 rounded-lg transition duration-300 shadow-md">
                                    REQUEST A FULL SYSTEM AUDIT
                                </Link>
                                {/* PHONE ICON USE - CORRECTLY IMPORTED */}
                                <Link href="tel:+918287885885" className="bg-transparent border-2 border-white text-white text-md font-bold hover:bg-white hover:text-red-800 py-3 px-8 rounded-lg transition duration-300 shadow-md">
                                    <Phone className="w-5 h-5 inline mr-2" /> Talk to our Experts
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AdhunikLegacy() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const energySystems = [

    {

      title: "Fire Risk Assessment & Compliance Consulting",
      desc: (
        <>

        <p className=" text-sm  text-start">
      True safety begins with a deep understanding of your unique risks. Our services start with a thorough on-site risk assessment and safety audit. We identify potential hazards—from flammable materials to complex architectural layouts—and design a strategy that not only mitigates them but also ensures you meet all legal requirements. We are experts in navigating the complexities of local and national regulations and provide complete  <strong>Fire NOC (No Objection Certificate)</strong> consultancy and liaison services to ensure a smooth, hassle-free approval process.
</p>
   

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
      title: "Turnkey System Design & Installation",
      desc: (
        <>

        <p className=" text-sm  text-start">
  We are a leading turnkey contractor for a complete range of fire protection systems. Our services include :
      </p>
        
         <ul>
<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500">Fire Hydrant & Sprinkler Systems : {" "}
</strong> 
          </Link>

 The backbone of any facility's fire defense. We design and install robust hydrant systems for manual intervention and automated sprinkler systems that activate instantly to control fires, tailored to your specific layout and hazard level.



</li>

 
<li>

<Link href="/fire-hydrant-system">
             <strong className=" text-red-500">
         Fire Alarm & Detection Systems : {" "}
             </strong> 
</Link>

 Early detection saves lives. We install advanced, intelligent fire alarm, smoke detection, and heat detection systems that provide immediate, unambiguous alerts to protect your people and property, allowing for swift evacuation and response.

</li>


 


 </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {

      title: "Specialized Suppression Systems",
      desc: (
        <>


        <p className=" text-sm  text-start">
 For high-value or sensitive environments where water can cause as much damage as fire, we offer specialized solutions :
      </p>
        
         <ul>



<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500"> Gas-Based Suppression 
              Systems : {" "}
</strong> 
          </Link>

 Ideal for protecting critical infrastructure like data centers, server rooms, and electrical control panels, these clean agent systems extinguish fires rapidly without leaving any residue or damaging sensitive electronics.



</li>

  

<li>

          <Link href="/fire-sprinkler-system">

              <strong className=" text-red-500">  
             Foam & Chemical Suppression : {" "}
</strong> 
          </Link>

 For high-hazard areas such as ethanol plants, chemical storage facilities, and industrial workshops, we design and install specialized foam and chemical-based systems that are highly effective against flammable liquid fires.


</li>

  

 </ul>

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {

      title: "Annual Maintenance Contracts (AMCs) & Servicing",
      desc: (
        <>
        <p className=" text-sm  text-start">
  A fire safety system is only effective if it's perfectly maintained and ready to perform at a moment's notice. We offer comprehensive and reliable Annual Maintenance Contracts (AMCs) that include regular inspections, testing, and servicing of all your fire protection equipment. Our AMCs ensure your systems remain compliant with all regulations and are always in a state of perfect operational readiness.



      </p>
        
      

        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     

     
  ];

  
  const energySystems2 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
            BIS Certification (IS 15683) : </strong>
 The Bureau of Indian Standards (BIS) certification as per IS 15683 is mandatory for all portable fire extinguishers. This standard ensures the extinguisher meets stringent requirements for extinguishing capacity, discharge time, pressure resistance, and safety.
 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            ISI Mark : </strong>
  Look for the ISI mark on your extinguisher. It is a symbol of BIS certification, guaranteeing that the product is a high-quality, reliable, and compliant fire safety device.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            Fire NOC : 
            </strong>
  For commercial and industrial buildings in Delhi, Gurugram, and Noida, the presence of BIS-certified fire extinguishers is a mandatory requirement for obtaining and maintaining a Fire NOC.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems3 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
            For Homes :  </strong>
 An ABC-rated Dry Powder extinguisher is a versatile choice for most rooms. Keep a Wet Chemical or Class K extinguisher in the kitchen to handle cooking oil fires.

 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            For Offices & Commercial Spaces : </strong>
   Use ABC-rated Dry Powder extinguishers for general use. In server rooms or areas with sensitive electronics, a CO2 or Clean Agent extinguisher is a better choice to avoid damage.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
           For Industrial Facilities :</strong> {" "}
   A thorough assessment by a fire safety professional is essential. You will likely need a combination of Dry Powder, CO2, and specialized Class D extinguishers for specific risks.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems4 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
         P - Pull the Pin :  </strong>
 Pull the pin at the top of the extinguisher to break the tamper seal.

 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
            A - Aim at the Base : </strong>
    Aim the nozzle at the base of the fire, not the flames.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
           S - Squeeze the Handle : </strong> {" "}
   Squeeze the handle to discharge the extinguishing agent.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
          S - Sweep Side-to-Side : </strong> {" "}
   Sweep the nozzle from side to side at the base of the fire until it goes out.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    
  ];


  const energySystems5 = [

    {
      
      desc: (
        <>
         <ul>

            <li>
            <strong className=" text-red-500">
         As a dedicated fire safety contractor  </strong>  we offer turnkey solutions that manage every aspect of your fire protection needs, from consultation to compliance. We understand the stringent regulations of the Haryana Fire Act 2022 and the National Building Code (NBC), and our systems are designed to help you secure your Fire NOC.


 </li>
 
         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
    {
       desc: (
        <>
         <ul>
               <li>
            <strong className=" text-red-500">
         Our strong operational  </strong>
    presence in Delhi, Gurugram, and across the entire Delhi NCR region, combined with our robust network, ensures that we can provide prompt and efficient service for your project in Noida, Ghaziabad, Faridabad, Jaipur, Chandigarh, or any of our service locations.

 </li>
            

         </ul>
        </>
      ),
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },

     
   

     
     
    
  ];


  const faqItems = [
    {
      question:
        "Why is it important to hire a licensed HVAC contractor with commercial specialization?",
      answer:
        "Hiring a contractor with commercial-specific licenses ensures they possess the necessary expertise for complex systems, adhere to stringent building codes, and carry appropriate insurance, protecting your business from operational and legal risks.",
    },
    {
      question:
        "How can I verify a commercial HVAC contractor's experience and reputation?",
      answer:
        "Request detailed client references from similar commercial projects, ask for case studies, and inquire about their safety record (e.g., EMR). While online reviews are helpful, direct commercial client feedback is more valuable.",
    },
    {
      question:
        "Why are energy efficiency services crucial for commercial spaces?",
      answer:
        "Energy efficiency services for commercial HVAC systems can lead to significant reductions in operational costs, lower carbon emissions, and improved compliance with environmental regulations, directly impacting your business's profitability and sustainability.",
    },
    {
      question:
        "What specific types of warranties and guarantees should I inquire about for commercial HVAC?",
      answer:
        "Ask about comprehensive manufacturer equipment warranties, detailed contractor workmanship warranties, and, most importantly, Service Level Agreements (SLAs) that outline guaranteed response times and potential performance guarantees for system uptime and energy consumption.",
    },
    {
      question: "How do commercial maintenance plans benefit businesses?",
      answer:
        "Regular, tailored maintenance plans for commercial HVAC systems prevent costly breakdowns, extend equipment lifespan, optimize energy efficiency, ensure compliance, and provide budget predictability, minimizing operational disruptions and maximizing ROI.",
    },
  ];


  const fireClasses = [
  {
    title: "Fire Risk Assessment & Compliance Consulting",
    description:
      "True safety begins with a deep understanding of your unique risks. Our services start with a thorough on-site risk assessment and safety audit. We identify potential hazards—from flammable materials to complex architectural layouts—and design a strategy that not only mitigates them but also ensures you meet all legal requirements. We are experts in navigating the complexities of local and national regulations and provide complete Fire NOC (No Objection Certificate) consultancy and liaison services to ensure a smooth, hassle-free approval process.",
  },


  {
    title: "Turnkey System Design & Installation",
    description:
      "We are a leading turnkey contractor for a complete range of fire protection systems. Our services include : ",
  },

  {
    title: "Human Error",
    description:
      "From unattended cooking in office pantries to careless smoking and failure to maintain equipment, human error accounts for a substantial percentage of all fire incidents.",
  },

  {
    title: "Mechanical Failures",
    description:
      "Overheating machinery, friction sparks from worn-out parts, and inadequate lubrication in factories and plants can easily ignite combustible materials.",
  },
 
];


  return (
    <>



      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">

            <div className=" w-full  h-96 md:w-6/12">
              <img
                src="https://res.cloudinary.com/djablkulv/image/upload/v1758015802/fire_rkopyo.webp"
                alt=" A Legacy of Trust, A Future of Safety : Introducing Adhunik FireXpert"
                loading="lazy"
                className="w-full h-full  object-center object-contain"
              />
            </div>

            <div className=" w-full md:w-6/12">

              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-red-800 mb-6 leading-tight">
             A Legacy of Trust, A Future of Safety : Introducing Adhunik FireXpert

              </h1>

              <p className="text-sm text-gray-700 mb-4 text-justify md:text-left ">
          In the world of industrial and commercial infrastructure, few responsibilities are as absolute as ensuring safety. A robust, reliable fire protection system is not merely a regulatory requirement; it is the fundamental guardian of your people, your critical assets, and your business's operational continuity. This profound responsibility demands a partner with deep, proven expertise, an unwavering commitment to quality, and a singular focus on protection.
  </p>
            
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800 text-sm font-medium text-justify md:text-left">
               
              
                 For over 19 years, the engineering and project management teams at the renowned    <Link href='https://www.adhunikpowertech.com'>
                   Adhunik Powertech
                 </Link>  built a formidable reputation for delivering on this promise. As an integral part of over 600 complex industrial and commercial projects across India, our team honed its skills in the nation's most demanding environments. This journey, marked by a relentless pursuit of excellence, contributed to a legacy of award-winning quality. Today, that legacy has a new, dedicated home.



                </p>
              </div>

                <p className="text-sm text-gray-700 pt-4 text-justify md:text-left ">

We are proud to introduce Adhunik FireXpert, the specialized fire safety division of Adhunik Guds & Services Private Limited.

              </p>
            </div>
          </section>

          
          <div className="space-y-16">
            
            <section className="bg-white p-3 md:p-8 rounded-xl shadow-md border border-red-100 mb-16">
              

             

              <div className="bg-gradient-to-br from-red-50 to-white p-4 md:p-6 rounded-xl border border-red-200 shadow-sm mb-8">
                <div className="flex flex-col items-center mb-8">
               

                  <p className=" text-sm  text-red-900 ">
                    <strong className=" text-xl text-red-500">
                      {" "}
                Our Connection : A Direct Legacy of Engineering Excellence

                    </strong>{" "} <br />

                Adhunik FireXpert is not simply a new company; it is the strategic evolution of a proven leader. The core team, the deep technical knowledge, the rigorous project management processes, and the unwavering commitment to safety that defined fire protection solutions at Adhunik Powertech have been channeled into this new, focused entity. We are the direct continuation of that 19+ year legacy, reimagined to provide an even greater level of specialized service and client-centric solutions. This transition ensures that the institutional knowledge and hands-on experience gained from hundreds of successful projects form the bedrock of our new company.


                  </p>

               
                  <p className=" pt-2 text-sm  text-red-900 ">
                    <strong className=" text-xl text-red-500">
                      {" "}
              The Purpose : A Singular Focus on Your Safety

                    </strong>{" "} <br />

               The decision to create Adhunik FireXpert was driven by a clear and powerful purpose: in a field as critical as fire safety, our clients deserve the undivided attention of a true specialist. The landscape of fire protection is constantly evolving, with new technologies, more complex industrial processes, and stricter compliance standards. Thriving in this environment requires more than just general knowledge; it requires dedicated expertise.
<br />
 

This new structure allows us to dedicate 100% of our focus to the art and science of fire protection—from staying ahead of the latest revisions to the National Building Code (NBC) to mastering the most advanced gas-based suppression technologies. It ensures our clients receive the agile, expert service that this life-saving discipline demands.


                  </p>

               
                  <p className=" pt-2 text-sm  text-red-900 ">
                    <strong className=" text-xl text-red-500">
                      {" "}
            What We Do : Our Comprehensive Fire Safety Services

                    </strong>{" "} <br />

           Adhunik FireXpert is your end-to-end partner for creating a holistic safety ecosystem. We manage the entire lifecycle of your fire protection needs, ensuring every component works in perfect harmony to provide reliable protection.
 
                  </p>
 
                </div> 
              </div>

              <div className="mb-12">
           
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                  {energySystems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white flex flex-col    items-start  md:text-left text-center p-5 rounded-lg border border-red-100 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="row justify-center items-center flex flex-row gap-2 md:gap-4 ">
                        <div className=" bg-red-50 text-red-500 w-12 h-12 items-center rounded-full flex  justify-center mb-4">
                        
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
                  </svg>

                        </div>

                        <h2 className=" w-9/12 md:w-full font-bold text-red-700 text-sm text-left  mb-2">
                          {system.title}
                        </h2>
                      </div>

                      <div className=" text-justify text-sm text-gray-600">
                        {system.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
         

            



              <div className="mb-12">

               <p className=" text-sm pb-4  text-red-900 ">
                    <strong className=" text-lg text-red-500 ">
                      {" "}
            Adhunik FireXpert : A Legacy of Engineering Excellence


                    </strong> {" "} <br />

While Adhunik FireXpert represents the future of specialized fire safety, our strength comes from a past dedicated to engineering excellence.



  </p>

              
              </div>



            </section>

            {/* CTA Section */}

            <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl  font-bold mb-4">
              Secure Your Property with a Complete Fire Safety Strategy

                </h2>
                <p className="text-red-100 mb-8 text-sm  text-justify ">
       To protect your facility with a team that combines a proven legacy with a singular focus on safety, contact Adhunik FireXpert today for a comprehensive consultation.

                </p>

                <p className=" text-center text-red-100 mb-8 text-sm  ">
      We invite you to learn more about our comprehensive solutions and get in touch with our expert team today to secure a safer future for your business.

                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-red-800 hover:bg-red-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Ready to enhance your fire safety ?
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-red-900 text-sm md:text-md hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-red-700"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>

          


          </div>
        </div>
      </div>
    </>
  );
}

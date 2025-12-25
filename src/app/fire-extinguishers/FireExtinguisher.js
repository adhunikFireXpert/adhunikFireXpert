"use client"

import { useState } from 'react';
 
import { motion } from 'framer-motion';
import Link from 'next/link';
 
export default function FireExtinguisher() {

      const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FireRisks = [
    {
      title: "Ceasefire",
      description: " A pioneer in the industry, known for its innovative and technologically advanced range of fire extinguishers and suppression systems.",
    },
    {
      title: "Kanex",
      description: "A globally recognized brand offering a comprehensive range of fire fighting equipment with international certifications, trusted in the most demanding industrial environments."
    },
    {
      title: "UFS (Universal Fire Safety)",
      description: "A leading Indian manufacturer known for its high-quality, ISI-marked fire extinguishers that offer reliable performance."
    },
    {
      title: "Eversafe",
      description: " A well-established brand providing a wide array of reliable and cost-effective fire extinguishers for all types of applications."
    },
   
  ];

 const ABCChemicalFire = [
  {
    title: "ABC Dry Powder Extinguisher",
    imgsrc: "https://res.cloudinary.com/djablkulv/image/upload/v1765271497/Dry_Powder_uui4br.webp"
  },
  {
    title: "Versatile Protection :",
    description: "The most versatile and widely used fire extinguisher. Its monoammonium phosphate-based agent is highly effective on Class A (solid combustibles), B (flammable liquids), and C (electrical) fires. This makes it the standard, multi-purpose choice for offices, factories, warehouses, and general commercial spaces."
  },
  {
    title: "Key Features :",
    description: "High effectiveness, rapid knockdown, available in various capacities."
  },
  {
    title: "Suitable For :",
    description: "Wood, paper, plastics, flammable liquids, electrical equipment."
  },
  {
    title: (
      <a href="tel:8287885885">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing</button>
      </a>
    )
  },



  {
    title: "CO2 (Carbon Dioxide) Extinguisher",
    imgsrc: "https://res.cloudinary.com/djablkulv/image/upload/v1765271495/co2_d7xi7i.webp"
  },
  {
    title: "Residue-Free Solution : ",
    description: "The perfect choice for protecting sensitive and expensive electronic equipment. The CO2 agent works by displacing oxygen and providing a cooling effect. Crucially, it is electrically non-conductive and leaves no residue, preventing damage to servers, control panels, and delicate machinery. It is primarily used for Class B and C fires."
  },
  {
    title: "Key Features : ",
    description: "Non-conductive, non-corrosive, no clean-up required."
  },
  {
    title: "Suitable For : ",
    description: "Flammable liquids, electrical equipment."
  },
  {
    title: (
      <a href="tel:8287885885">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing</button>
      </a>
    )
  },



  {
    title: "Water & Mechanical Foam (AFFF) Extinguishers",
    imgsrc: "https://res.cloudinary.com/djablkulv/image/upload/v1765271721/water_foam_o9jyhz.webp"
  },
  {
    title: "Effective for Class A/B : ",
    description: "The classic solution for specific fire types. Water-based extinguishers are highly effective for Class A fires by providing a powerful cooling effect. Mechanical Foam (AFFF) extinguishers are designed for Class A and B fires, creating a blanket over flammable liquids to cut off the oxygen supply and prevent re-ignition."
  },
  {
    title: "Key Features : ",
    description: "Cooling and soothing effect."
  },
  {
    title: "Suitable For : ",
    description: "Wood, paper, cloth (Water); Flammable liquids (Foam)."
  },
  {
    title: (
      <a href="tel:8287885885">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing</button>
      </a>
    )
  },


  {
    title: "Wet Chemical Extinguishers (Class K/F)",
    imgsrc: "https://res.cloudinary.com/djablkulv/image/upload/v1765271498/wet_chemical_xvfiyk.webp"
  },
  {
    title: "Kitchen Fire Specialists : ",
    description: "The specialist for commercial kitchens. These extinguishers contain a potassium-based agent that reacts with burning cooking oils and fats in a process called saponification, creating a thick, soapy foam that smothers the fire and prevents dangerous flare-ups. They are indispensable for restaurants and food processing facilities."
  },
  {
    title: "Key Features : ",
    description: "Forms a cooling blanket, prevents re-ignition."
  },
  {
    title: "Suitable For : ",
    description: "Cooking oils and fats."
  },
  {
    title: (
      <a href="tel:8287885885">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing</button>
      </a>
    )
  },



  {
    title: "Clean Agent Fire Extinguishers",
    imgsrc: "https://res.cloudinary.com/djablkulv/image/upload/v1765271543/cleanagent_ljf2uc.webp"
  },
  {
    title: "Sensitive Environment Protection : ",
    description: "Offering the ultimate protection for high-value, irreplaceable assets where even the residue from a dry powder extinguisher is unacceptable. Clean Agent extinguishers use an electrically non-conductive and ozone-friendly gas that is safe for sensitive electronics and documents, making it ideal for data centers, museums, and laboratories. It is effective on Class A, B, and C fires."
  },
  {
    title: "Key Features : ",
    description: "Non-toxic, non-corrosive, electrically non-conductive, ozone-friendly."
  },
  {
    title: "Suitable For : ",
    description: "Server rooms, data centers, museums, art galleries."
  },
  {
    title: (
      <a href="tel:8287885885">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing</button>
      </a>
    )
  },



];

  const Comprehensive = [
   
    {
      title: "Professional Installation",
      description: "Our technicians ensure every extinguisher is installed in a compliant, accessible, and clearly marked location, adhering to all fire safety codes."
    },

    {
      title: "Fire Extinguisher Refilling in Delhi & Gurgaon",
      description: "We offer prompt and certified fire extinguisher refilling and recharging services across Delhi NCR, including hydrostatic testing, to ensure your equipment is always ready for an emergency."
    },
   
    {
      title: "Annual Maintenance Contracts (AMCs)",
      description: "Our comprehensive AMCs include regular inspections, maintenance, and compliance documentation for all your fire extinguishers, taking the burden of regulatory upkeep off your shoulders."
    },
  ];

  const Why = [
    {
      title: "ISO 9001:2008 Certified Quality ",
      description: "All our fire extinguishers and services adhere to stringent international quality management standards."
    },
    {
      title: "Delhi NCR Local Experts  ",
      description: "Our deep understanding of local regulations and rapid response capabilities ensure unmatched service across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad."
    },
    {
      title: "Highly Qualified Team  ",
      description: "Our team of fire safety engineers and technicians is rigorously trained to provide expert advice, seamless installation, and efficient maintenance."
    },
    {
      title: "Comprehensive Solutions  ",
      description: "From product supply to refilling, AMC, training, and NOC consultancy, we are your single point of contact for all fire safety needs."
    },
    {
      title: "Customer-Centric Approach  ",
      description: "We prioritize your safety and satisfaction, offering personalized solutions and dedicated after-sales support."
    },
    {
      title: "Proven Track Record  ",
      description: "As a testament to our dedication, Adhunik FireXpert has successfully secured countless lives and properties, consistently delivering excellence in fire safety for many years."
    }
  ];


  const faqs = [
    {
      question: "What type of fire extinguisher is best for my home in Delhi? ",
      answer: "For most homes, an ABC Dry Chemical extinguisher is recommended due to its versatility against common fire types (wood, paper, liquids, electrical). Our experts can help you choose the right size and placement."
    },
    {
      question: "How often do fire extinguishers in Delhi NCR need to be refilled or serviced?",
      answer: "Fire extinguishers require annual maintenance by a certified professional. They also need refilling immediately after any use, or hydrostatic testing and recharging every 3-5 years, depending on the type."
    },
    {
      question: "Do you provide Fire NOC consultancy services in Delhi?",
      answer: "Yes, Adhunik FireXpert offers comprehensive consultancy to help businesses and residential complexes navigate the Fire No Objection Certificate (NOC) process in Delhi, ensuring full compliance."
    },
    
    {
      question: "What is the cost of fire extinguisher refilling in Delhi NCR?",
      answer: "Costs vary by extinguisher type and capacity. Please contact us for a customized quote."
    },
    {
      question: "Can Adhunik FireXpert conduct fire safety training at my office in Gurgaon?",
      answer: " Absolutely! We offer on-site, hands-on fire safety training programs tailored for businesses and organizations across Delhi NCR."
    },
    
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };


  return (
    <>
    <div className="hero mx-auto">
      {/* Hero Section */}
       <section>

                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">


          
  <div className="box w-full h-full">
                          <img
          src="https://res.cloudinary.com/djablkulv/image/upload/v1766653673/fireext_yku8fy.webp"
          className="hidden md:block h-full w-full object-cover object-center"
          alt="fire extinguishers"
        />
        <img
          src="https://res.cloudinary.com/djablkulv/image/upload/v1766653673/fireext_yku8fy.webp"
          className="md:hidden h-full w-full object-cover object-center"
          alt="Different types of fire extinguishers including CO2, foam, powder, and water models displayed together for safety and fire protection"
        />
                       </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Fire Extinguisher ISI Mark<br />
            <span className=' text-sm'> Home / Fire Extinguisher ISI Mark</span>
          </p>
         
                    </div>
                </div>

            </section>


 

      {/* Main Content */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <motion.div 
            variants={itemVariants}
            className="flex  justify-evenly  flex-col lg:flex-row items-center gap-10 mb-20"
          >
            <div className="lg:w-4/12 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-full border-2 border-red-300 p-2 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="https://res.cloudinary.com/djablkulv/image/upload/v1765271359/main_znheng.webp"
                  alt="Different types of fire extinguishers including CO2, foam, powder, and water models displayed together for safety and fire protection"
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </div>

            <div className="lg:w-5/12 flex justify-center flex-col items-center  md:items-start w-full">
              <motion.h1 
                variants={fadeInVariants}
                className=" text-lg text-center md:text-left md:text-2xl font-bold mb-4 text-gray-800"
              >
               Your Premier Fire Extinguisher Dealer & Supplier in Delhi NCR

              </motion.h1>

              <motion.h2 
                variants={fadeInVariants}
                className="text-sm text-justify font-semibold mb-4 text-red-600 "
              >
             Your First Line of Defense, Engineered for Reliability. Adhunik FireXpert is a leading dealer and supplier for a complete range of ISI-marked fire extinguishers in Delhi, Gurgaon, and Noida. We provide expert solutions for industrial facilities and dedicated support for our network of contractors and partners.

              </motion.h2>
             
               <Link href="/help-and-support">

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
       Get a Free Quote
        </button>
      </Link>
            </div>
          </motion.div>

          {/* Fire Risks Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-2xl font-bold mb-6 text-gray-800"
            >
             More Than a Supplier : A Partner in Safety with a 19+ Year Legacy

            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 text-justify text-sm  leading-relaxed mb-8"
            >
            Choosing a fire extinguisher supplier in Delhi is a critical decision that directly impacts the safety of your facility, your assets, and your people. In a market filled with traders and dealers, Adhunik FireXpert stands apart. We are not just a supplier; we are your long-term safety partner. Our expertise is born from the proven, award-winning project execution legacy of the renowned Adhunik Powertech. This gives us an unmatched, hands-on understanding of the real-world safety challenges faced by industrial and commercial facilities. It allows us to provide expert, practical advice to our direct clients and valuable technical support to our dealer network, ensuring the right solution is chosen and implemented correctly, every time.


            </motion.p>


            <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-2xl font-bold mb-6 text-gray-800"
            >
            Your Direct Supplier for Complete Fire Safety Compliance


            </motion.h2>

            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mb-8 text-sm text-justify"
            >
            As a facility manager or business owner, your priority is ensuring a safe, compliant, and productive environment. You need a supplier who understands your risks and can provide a complete solution, not just a product. Adhunik FireXpert acts as your direct partner, guiding you from initial risk assessment to final installation and ongoing maintenance. We help you navigate the complexities of fire safety regulations, select the appropriate extinguisher types and capacities for each specific area of your facility, and ensure your team is prepared. Our goal is to provide a comprehensive solution that delivers not just equipment, but complete peace of mind.



            </motion.p>



            <motion.h2 
              variants={fadeInVariants}
              className=" text-center md:text-left text-lg md:text-2xl font-bold mb-6 text-gray-800"
            >
       Authorized Supplier & Dealer of India's Top Fire Extinguisher Brands


            </motion.h2>

            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700  text-justify text-sm leading-relaxed mb-8"
            >

         To provide our clients with the best in safety and reliability, we are proud to be authorized dealers and suppliers for India's most trusted fire extinguisher manufacturers. We supply, install, and service equipment from leading brands, ensuring you receive only certified, high-quality products. Our brand portfolio includes :


            </motion.p>




            <div className="grid md:grid-cols-2 gap-6">
              {FireRisks.map((risk, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-500"
                >
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                  {risk.title}
                  </h3>
                  <p className="text-gray-700 text-justify">{risk.description}</p>
                </motion.div>
              ))}
            </div>



      <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-2xl pt-8 font-bold mb-6 text-gray-800"
            >
    A Reliable Partner for HVAC Contractors & Resellers


            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 text-justify text-sm leading-relaxed mb-8"
            >

       For contractors, architects, and safety equipment resellers, a reliable supply chain is critical. You need a master fire extinguisher dealer in Delhi who can provide a wide range of certified products, competitive pricing, and timely delivery. Adhunik FireXpert is that partner. We offer our dealer network access to our extensive inventory of top brands, ensuring you can meet the diverse needs of your clients. We provide the technical backup and product knowledge you need to confidently bid on projects, knowing you have a trusted supplier supporting you at every step.


            </motion.p>

 
          </motion.div>

          {/* Products Section - Zigzag Layout */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-2xl font-bold mb-4 text-gray-800"
            >
            A Complete Product Portfolio for Every Risk

            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700  text-sm text-justify  leading-relaxed mb-8"
            >
            As a premier fire extinguisher dealer in Delhi, we maintain a comprehensive inventory of high-quality, certified fire extinguishers to meet the specific risks of any environment.

            </motion.p>

         <div className="     min-h-screen md:py-6 px-4 md:px-8">
      <div className="container mx-auto">
        {ABCChemicalFire.map((item, index) => {
          // Check if the current item is the start of a new card group (every 5 items)
          if (index % 5 === 0) {
            return (
              <motion.div 
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col py-8 ${index % 10 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:my-12`}
              >
                <div className="md:w-1/2 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full  h-[350px] overflow-hidden rounded-4xl"
                  >
                    <img 
                      src={item.imgsrc}
                      alt={item.title}
                      className="w-full h-full object-contain border rounded-4xl p-4 "
                    />
                  </motion.div>
                </div>

                <div className="md:w-1/2 w-full">

                  <motion.h3 
                    variants={fadeInVariants}
                    className=" text-lg text-center  md:text-left md:text-2xl font-bold text-red-600 mb-4"
                  >
                    {item.title}

                  </motion.h3>

                  {ABCChemicalFire[index + 1] && (
                    <>
                      <motion.h4 
                        variants={fadeInVariants}
                        className=" text-lg  md:text-left text-center md:text-xl font-semibold mb-2"
                      >
                        {ABCChemicalFire[index + 1].title}
                      </motion.h4>
                      <motion.p 
                        variants={fadeInVariants}
                        className="text-gray-700  text-sm text-justify mb-4"
                      >
                        {ABCChemicalFire[index + 1].description}
                      </motion.p>
                    </>
                  )}


                  {ABCChemicalFire[index + 2] && (
                    <>
                      <motion.h4 
                        variants={fadeInVariants}
                        className=" text-lg text-center md:text-left md:text-xl font-semibold mb-2"
                      >
                        {ABCChemicalFire[index + 2].title}
                      </motion.h4>
                      <motion.p 
                        variants={fadeInVariants}
                        className="text-gray-700  md:text-left text-center mb-4"
                      >
                        {ABCChemicalFire[index + 2].description}
                      </motion.p>
                    </>
                  )}


                  {ABCChemicalFire[index + 3] && (
                    <>
                      <motion.h4 
                        variants={fadeInVariants}
                        className=" text-lg text-center md:text-left md:text-xl font-semibold mb-2"
                      >
                        {ABCChemicalFire[index + 3].title}
                      </motion.h4>
                      <motion.p 
                        variants={fadeInVariants}
                        className="text-gray-700 text-sm text-center md:text-left mb-6"
                      >
                        {ABCChemicalFire[index + 3].description}

                      </motion.p>
                    </>
                  )}


                  {ABCChemicalFire[index + 4] && (
                    <motion.div className=' text-center  ' variants={fadeInVariants}>
                      {ABCChemicalFire[index + 4].title}
                    </motion.div>
                  )}


                </div>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </div>
         
          </motion.div>

          {/* Services Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-3xl font-bold mb-6 text-gray-800"
            >
             End-to-End Support for Clients & Partners Across Delhi NCR

            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mb-8"
            >
             As a full-service fire safety company in Delhi, we provide complete support to ensure all equipment is compliant and ready for use.

            </motion.p>

            <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Comprehensive.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white flex md:justify-start justify-center items-center flex-col p-6 rounded-xl shadow-md border border-gray-100 "
                >
                  <h3 className=" text-center md:text-left text-xl font-bold text-red-600 mb-3">
                  {service.title}
                  </h3>

                  {service.description && (
                    <p className="text-gray-700 text-center md:text-left">
                    {service.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        

          {/* Why Choose Us Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className=" text-lg text-center md:text-left md:text-3xl font-bold mb-6 text-gray-800"
            >
              Why Delhi NCR Trusts Adhunik FireXpert : Our Unbeatable Advantages

            </motion.h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Why.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg md:text-xl text-center md:text-left font-bold text-red-600 mb-3">
                  {reason.title}
                  </h3>
                  
                  <p className="text-gray-700  text-sm text-center md:text-left">
                  {reason.description}
                  </p>

                </motion.div>
              ))}
            </div>



          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={itemVariants}
            className="w-full p-7 rounded-xl bg-gradient-to-r from-red-600 to-red-700 mb-20"
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-full flex flex-col justify-center items-center gap-6 text-center text-white">
                <motion.h2 
                  variants={fadeInVariants}
                  className=" text-lg md:text-2xl   font-bold"
                >
             Ensure Your Facility is Protected. Partner with the Experts
  </motion.h2>
                <motion.p 
                  variants={fadeInVariants}
                  className="max-w-2xl text-sm"
                >

           Whether you need to equip a new factory, upgrade your office extinguishers, or source reliable products for your clients, our team is ready to help.


                </motion.p>
                <motion.p 
                  variants={fadeInVariants}
                  className="max-w-2xl text-sm"
                >
Contact us today for a free consultation and a quote on our fire extinguisher solutions and services!


                </motion.p>

                <motion.div variants={fadeInVariants}>
                  <a
                    href="tel:8287885885"
                    className="inline-block rounded-lg relative overflow-hidden group items-center justify-center px-6 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-white active:shadow-none shadow-lg bg-white text-red-600 font-bold hover:bg-gray-50 transition"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-red-100 rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>

                    <span className="relative text-sm">Request a Free Quote Today!</span>
                    
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 text-center mb-8 max-w-2xl mx-auto"
            >
              Here are answers to some common questions about our fire extinguisher products and services in Delhi NCR.
            </motion.p>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="mb-4 overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeIndex === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
</div>
    </>
  )
}

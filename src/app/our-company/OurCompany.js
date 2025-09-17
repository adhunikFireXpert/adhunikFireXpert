"use client"
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 

export default function OurCompany() {
  
 
  return (

    <>


  <div className="relative w-full md:pt-32 py-24  flex flex-col items-center justify-center text-center text-white p-8 overflow-hidden">
         

          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://video.wixstatic.com/video/11062b_7e61ffd6dbb040ee8b0e4dc604e8fd4e/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
          />


         
 
          <div
            className="absolute top-0 left-0 w-full h-full z-5 bg-center bg-repeat"
            style={{ backgroundImage: 'url("/o.png")' }}
          ></div>

          
          <div className="absolute top-0 left-0 w-full h-full  z-1" />
 
          <div className="relative z-20 flex flex-col items-center justify-center">
           <div className="container flex-col-reverse md:flex-row mx-auto flex gap-0 md:gap-16 items-start">
 
        <div className="flex flex-col w-full md:w-6/12   space-y-6">

          <div className="uppercase  pt-4  pl-2 text-lg md:text-2xl   text-center tracking-widest text-gray-600">
            Adhunik FireXpert today
          </div>

          <h2 className=" text-lg md:text-4xl text-gray-700 font-bold leading-tight">
           Engineering Safety, Built on a Legacy of Trust

          </h2>

          <div className="    md:pl-8 border-l-4 text-gray-700 border-gray-400 text-left pl-5 space-y-4">


            <p className=" text-justify px-2 text-lg leading-relaxed ">
            Adhunik FireXpert is a leader in engineering, executing, and managing high-performance fire protection systems for the commercial, industrial, and specialized sectors. We are more than just a service provider; we are end-to-end safety partners dedicated to delivering solutions that protect lives, assets, and operational continuity.

            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
         Our story begins in 2005. For over 19+ years, the team that now forms Adhunik FireXpert was an integral part of the engineering and execution powerhouse behind the renowned Adhunik Powertech. In that time, we didn't just install fire systems; we built a reputation forged in the demanding environments of India's leading industries. As part of an integrated team, we contributed to the success of over 600 complex projects, from safeguarding mission-critical data centers to implementing robust fire safety protocols in heavy manufacturing and automotive facilities.

            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
         Our journey was marked by a relentless pursuit of excellence, contributing to a culture that earned the industry's highest honors, including the India Business Award 2025 for "Best Quality Standards."

            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
          As industries evolved, we recognized a clear need: fire safety is a non-negotiable, specialized field that demands a dedicated expert. From this vision, we distilled our two decades of award-winning experience into a single, focused entity: Adhunik FireXpert.

            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
      Under our new company, Adhunik Guds & Services Private Limited, we were built for a singular purpose: to be the most trusted, expert partner in the fire protection industry. We aren't a new company; we are the culmination of a legacy—reimagined for the future of safety.

            </p>

          </div>

        </div>

   
        <div className="w-full h-full md:w-6/12 ">

        <div className="card md:h-[90vh]  w-full">
 <img
            src="https://images.unsplash.com/photo-1618609252884-c29e29b32205?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Firefighter extinguishing a fire"
            className="w-full h-full object-contain  "
          />

        </div>
         
        </div>

      </div>
          </div>



        </div>
  
  
      <div
        className="relative w-full h-auto bg-fixed bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1575867094974-9e16b6f55360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

 
        
        <div className="relative z-10  p-8 max-w-8xl">
       <div className="   flex items-center justify-center ">
          <div className="container   flex flex-col  md:flex-row-reverse items-center justify-center rounded-xl overflow-hidden ">
            {/* Left Side: Content Box */}
            <div className=" w-full md:w-8/12  p-2 md:p-16    flex flex-col justify-center">
              <h2 className=" md:text-3xl  leading-tight mb-6 ">
            The Adhunik Advantage
 </h2>

              <p className="text-base text-sm   mb-8">
           This is made possible by our unique ecosystem :

              </p>

              <ul className=" list-disc  text-justify  list-outside ps-4">
                <li>
                  <strong className=' text-red-500'>  Project Excellence :  </strong> 
            Our core team continues to deliver the award-winning project management and engineering that defined our legacy.

                </li>

                <li>
                  <strong className=' text-red-500'>  Unwavering Commitment to Quality Equipment : </strong>
                  We have an unwavering commitment to using only the most reliable, certified, and technologically advanced fire safety equipment from leading manufacturers, ensuring every component meets our exacting standards for unmatched reliability.


                </li>
                <li>
                  <strong className=' text-red-500'>
  Integrated Turnkey Solutions : {" "}
                  </strong>
               As part of Adhunik Guds & Services, we collaborate with our sister divisions, Adhunik HVAC Projects and Adhunik Decodive, to provide fully integrated MEP, safety, and interior solutions with a single point of accountability.

                </li>

                <li>
                
<strong className=' text-red-500'> We are not just continuing a legacy ; {" "}</strong>
              we are defining the future of fire safety. Welcome to the next chapter of engineering excellence. Welcome to Adhunik FireXpert.


                </li>
              </ul>


              <Link
                href="/our-company"
                className=" ps-4 group pt-2 flex items-center w-max text-red-600 font-semibold transition-all duration-300 transform hover:translate-x-1"
              >
                Read More

                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
              </Link>


            </div>

            {/* Right Side: Video Container */}
           
          </div>
        </div>
        </div>
      </div>



        <div className="bg-black text-white py-12 md:py-24 flex items-center justify-center p-8">
          <div
           
            className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
          >
            {/* Left Side: Content Box */}
            <div className="w-full md:w-1/2 p-10 md:p-16 border-l border-white h-full">
              <p className="text-sm uppercase tracking-wide opacity-75">
                Our Vision
              </p>
              <h2 className="text-xl md:text-3xl font-bold leading-tight mt-4 mb-6">
              Engineering Safety , Built on a Legacy of Trust ,
               Top Fire Fighting company in Delhi NCR & India

              </h2>
              <p className="md:text-base text-sm text-justify text-gray-300">
        Our vision for the future is to be the undisputed benchmark for quality and integrity in the fire safety industry. We strive to be the company against which all others are measured—leading not just in the scale of our projects, but in the precision of our designs, the reliability of our systems, and the trust we earn from our clients and partners.
<br />
<br />

          We see a future where industrial and commercial spaces are more than just compliant; they are inherently safe environments. They are centers of productivity where risks are proactively managed and where intelligent, reliable safety systems protect people. Adhunik FireXpert aims to be at the forefront of this transformation, pioneering the engineering practices and innovative solutions that will make this vision a reality.

              </p>
            </div>

            {/* Right Side: Image with Scroll Effect */}
            <div className="w-full md:w-1/2 overflow-hidden bg-black rounded-lg shadow-xl relative h-[90vh] ">
              <img
                
                src="https://images.unsplash.com/photo-1634468413956-831adf9d5a06?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A pair of binoculars"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

 


 
        <div className="bg-black text-white py-12 md:py-24 flex items-center justify-center p-8">
          <div
           
            className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
          >
            {/* Left Side: Content Box */}
            <div className="w-full md:w-1/2 p-10 md:p-16 border-l border-white h-full">
              <p className="text-sm uppercase tracking-wide opacity-75">
              Our Mission

              </p>
              <h2 className="text-xl md:text-3xl font-bold leading-tight mt-4 mb-6">
              Engineering Safety , Built on a Legacy of Trust ,
               Top Fire Fighting company in Delhi NCR & India

              </h2>
              <p className="md:text-base text-justify text-sm text-gray-300">
       At the heart of Adhunik FireXpert lies a clear and unwavering mission: to be the most trusted safety partner for our commercial and industrial clients. For us, partnership means going beyond the role of a traditional contractor to become a dedicated ally, deeply invested in protecting the long-term success and safety of every facility we serve.

<br />
<br />

        We achieve this by delivering precisely engineered, compliant, and reliable fire protection solutions. Drawing upon a 19+ year legacy of engineering excellence, our team meticulously plans and executes each installation, from initial risk assessment to final commissioning. We manage every complexity with a relentless focus on quality and durability, ensuring our clients receive a solution that not only works flawlessly on day one but continues to protect for years to come. Our ultimate goal is to deliver not just a finished system, but complete confidence and peace of mind.


              </p>
            </div>

            {/* Right Side: Image with Scroll Effect */}
            <div className="w-full md:w-1/2 overflow-hidden bg-black rounded-lg shadow-xl relative h-[90vh] ">
              <img
                
                src="https://images.unsplash.com/photo-1633092228879-d6a88c22e7bc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A pair of binoculars"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

 



    </>
  )
}

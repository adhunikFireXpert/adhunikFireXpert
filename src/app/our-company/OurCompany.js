"use client"
import React, { useRef, useState } from 'react';

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

          <div className="uppercase md:text-left pl-2 text-lg md:text-2xl   text-center tracking-widest text-gray-600">
            Adhunik FireXpert today
          </div>

          <h2 className=" text-lg md:text-4xl text-gray-700 font-bold leading-tight">
            Creating global quality benchmarks
          </h2>

          <div className="    md:pl-8 border-l-4 text-gray-700 border-gray-400 text-left pl-5 space-y-4">


            <p className=" text-justify px-2 text-lg leading-relaxed ">
              Adhunik FireXpert today is a fast-emerging global fire safety brand that
              protects millions across the globe. The company is one of the
              rarest in the world to have such a diverse fire fighting product
              portfolio as a part of one ecosystem.
            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
              A leading manufacturer of world certified Fire Extinguishers,
              Specialised Suppression Systems, Total Flooding Systems, Kitchen
              Suppression Systems, Alarm Solutions and more, that are
              manufactured at the company's world-class production
              facility in India, the company is setting global benchmarks in
              quality, safety and performance.
            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
              Adhunik FireXpert solutions are today conform to highest quality
              standards in the world and are certified by top-notch, global
              agencies like AS/NZS 1841/4265, EN 3-7/7/866, BSI Australia, PED,
              LPCB, MED, UL, FM Global, VdS, ISO 9001 and more.
            </p>

            <p className="text-justify px-2  text-lg leading-relaxed">
              Adhunik FireXpert today is a proud team of over 2000 people based at
              company offices in India and United Kingdom and works with
              approx 1000 trade partners in India, over 150 in UK and 50+
              worldwide, acquiring over 3000 new customers each month
              and selling a fire product every 61 seconds.
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
        className="relative w-full h-screen bg-fixed bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1575867094974-9e16b6f55360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold">2025</h2>
          <h3 className="text-lg md:text-xl font-medium mt-2">WATERMIST AGENT IS INTRODUCED</h3>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            The cleanest, most green fire fighting agent - Watermist is launched.
            This paves the way forward to making Adhunik FireXpert the most prominent
            brand in the sustainable solutions category in fire segment in the
            years to come.
          </p>
        </div>
      </div>

 
    </>
  )
}

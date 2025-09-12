'use client';
 
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutubeSquare } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

import { TbBrandX } from 'react-icons/tb';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#EDEDED] text-[#000000] py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
        <div className="    flex justify-center items-center mb-5 md:justify-start">
  <img
    src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755763611/next2_d1l72h.webp"
    alt="adhunik firexpert Logo"
    className="  h-14 object-center object-contain"
  />
</div>

          <p className="text-sm mb-4 text-center md:text-left  ">
            At Adhunik FireXpert, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start  py-4">
            <Link href="https://www.instagram.com/adhunikfirexpert/" className="hover:text-orange-500"><Instagram /></Link>
            <Link href="https://www.facebook.com/profile.php?id=61580554204443" className="hover:text-orange-500"><Facebook /></Link>
            <Link href="https://x.com/FireXpertIndia" className="hover:text-orange-500"><Twitter /></Link>
            <Link href="https://www.linkedin.com/in/adhunik-firexpert-38469b383/" className="hover:text-orange-500"><Linkedin /></Link>
            <Link href="https://www.youtube.com/channel/UCcmVB3CludLuUUu3eYWP4Tw" className="hover:text-orange-500  "><Youtube /></Link>
          </div>
        </div>


        <div className=" text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4 md:text-left text-center ">Quick Links</h4>
          <ul className="space-y-2 text-sm md:text-left text-center ">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/our-company" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/our-clients" className="hover:text-orange-500">Clients</Link></li>
            <li><Link href="/help-and-support" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left ">Our Services</h4>
          <ul className="space-y-2 text-sm text-center md:text-left ">
            {[
              'fire-extinguishers',
              'addressable-fire-alarm-system-in-delhi-ncr',
              'fire-sprinkler-system',
              'fire-hydrant-system',
              'fire-suppression-system',
              'anti-rodent-system',
              'water-leak-detection-device',
              'fire-vesda-system',
              'fire-tubing-system',
              'fire-door-service',
              'kitchen-fire-suppression-system',


            ].map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}`} className="hover:text-[#F89A1B] capitalize">
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 md:text-left text-center">Contact Us</h4>

          <ul className="space-y-3 text-sm flex md:justify-center  md:items-start  items-center flex-col">
            <li className="flex  text-center md:text-left  gap-2">
              <BiEnvelope className="mt-1" />
              <a href="mailto:info@adhunikfirexpert.com" className=" w-54">info@adhunikfirexpert.com</a>
            </li>
            <li className="flex md:text-left text-center gap-2">
              <BsFillTelephoneFill className="mt-1 " />
              <a href="tel:8287885885" className=" w-54">8287885885</a>
            </li>
            <li className="flex md:text-left text-center gap-2">
              <IoLocationSharp className="mt-1 " />
              <a className=" w-54">
         Unit No. 6-03B, 6th floor, Reach My Tower,
Sector 70, Gurugram, Pin Code-122101
           </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        © 2025 Adhunik FireXpert All rights reserved.
      </div>
    </footer>
  );
}

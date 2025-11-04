"use client";

import Image from "next/image";
import { lazy, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Repeat, Award, Globe, Link2 } from "lucide-react";

// Register the GSAP ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

import { ArrowRight } from "lucide-react";
import StatsFlip from "./StatsFlip";

export default function HeroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: "/pic.webp",
      img2: "/pic.webp",

      alt: "Addressable Fire Alarm System, Smart Detection , Faster Response , Safer Spaces.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewBoxes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewBoxes.length - 1 : prevIndex - 1
    );
  };

  const slideData = [
    {
      name: "Rahul Verma",
      image: "AboutUs/avatar_ltfwos",
      position: "Mumbai",
      testimonial:
        "Adhunik FireXpert Services provided and installed our entire fire safety system, and we couldn't be happier. Their team was highly knowledgeable, and the equipment installed was top-notch. It's reassuring to know our facility is in safe hands.",
    },
    {
      name: "Sonal Mehta",
      image: "AboutUs/woman_gphihr",
      position: "Delhi",
      testimonial:
        "We recently upgraded our office with fire extinguishers and alarms from Adhunik FireXpert Services. The process was seamless and professional. They conducted a thorough risk assessment and delivered exactly what we needed. Highly reliable service!",
    },
    {
      name: "Deepak Sharma",
      image: "AboutUs/avatar_ltfwos",
      position: "Bangalore",
      testimonial:
        "Adhunik FireXpert Services designed and implemented a custom fire suppression system for our manufacturing unit. The quality of equipment and installation was impressive. They also provided detailed training to our staff. Highly recommended!",
    },
    {
      name: "Nisha Roy",
      image: "AboutUs/woman_gphihr",
      position: "Kolkata",
      testimonial:
        "After a scare last year, we decided to overhaul our fire safety system. Adhunik FireXpert Services delivered a complete package with fire extinguishers, hydrant systems, and emergency signage. Their attention to detail and customer support was exceptional.",
    },
    {
      name: "Ajay Thakur",
      image: "AboutUs/avatar_ltfwos",
      position: "Chandigarh",
      testimonial:
        "Our hotel recently partnered with Adhunik FireXpert Services for an upgrade to our fire alarm and sprinkler systems. They used modern, certified equipment and ensured minimal disruption to our operations. Very professional and efficient team!",
    },
    {
      name: "Meera Joshi",
      image: "AboutUs/woman_gphihr",
      position: "Pune",
      testimonial:
        "Adhunik FireXpert Services installed fire safety solutions in our residential complex. From consultation to installation, the experience was smooth. Their team answered every question with patience and ensured everything met the latest safety norms.",
    },
    {
      name: "Vikram Singh",
      image: "AboutUs/avatar_ltfwos",
      position: "Jaipur",
      testimonial:
        "We trust Adhunik FireXpert Services for all our safety needs across our retail outlets. Their products are ISI-marked, durable, and easy to use. The team is always just a call away for maintenance or refills. Couldn’t ask for better service!",
    },
  ];

  const posts = [
    {
      id: 1,
      imgsrc:
        "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618670/Certificate1_vslyt7.webp",
    },
    {
      id: 2,
      imgsrc:
        "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618671/Certificate2_tvogq9.webp",
    },
    {
      id: 3,
      imgsrc:
        "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618671/Certificate3_gb5rh6.webp",
    },
    {
      id: 4,
      imgsrc:
        "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618672/Certificate4_hf5ya6.webp",
    },
    {
      id: 5,
      imgsrc:
        "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618672/Certificate5_o1rxql.webp",
    },
  ];

  
  const sectionRef = useRef(null);
 
  const imageRef = useRef(null);

  useEffect(() => {
    
    if (!sectionRef.current || !imageRef.current) return;

    
    gsap.to(imageRef.current, {
   
      x: -250,
      
      ease: "none",
      scrollTrigger: {
       
        trigger: sectionRef.current,
        
        start: "top center",
        
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);  

  const features = [
    {
      id: 1,
      icon: <Repeat className="w-8 h-8" />,
      title: "360 Degree Integrated Firefighting Portfolio",
      description:
        "Fire Extinguishers, In-panel Suppression, Kitchen Systems, Total Flooding Solutions, Alarm Systems, Hydrants, Accessories and Services, we do it all under one banner.",
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8" />,
      title: "Quality Endorsed by World's Best Agencies",
      description:
        "BIS, LPCB, UL, MED, PED, VDS, BSI UK, UKCA, BSI AUSTRALIA, ISO, OHSAS - our product quality is endorsed by the very best for performance & safety.",
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Protecting Millions Across the Globe",
      description:
        "Presence in India, UK and Australia. Exports to France, Singapore, UAE, Qatar, Saudi Arabia, Kenya, Ghana, Zambia, Ivory Coast, Congo, Nepal, Sri Lanka and more.",
    },
    {
      id: 4,
      icon: <Link2 className="w-8 h-8" />,
      title: "End-to-End Solutions",
      description:
        "From Design to Manufacturing, Commissioning and Maintenance - with us you don't have to look out anywhere when it comes to fire safety.",
    },
  ];

  const solutions = [

    {
      id: 1,
      links:"/fire-extinguishers",
      icon:
        
        "https://res.cloudinary.com/djablkulv/image/upload/v1757329419/7_pn9l2c.webp",

      title: "FIRE EXTINUISHERS",
      alt: "FIRE EXTINUISHERS",
    },


    {
      id: 2,
      links:"/kitchen-fire-suppression-system",
      icon:
        "https://res.cloudinary.com/djablkulv/image/upload/v1757329421/9_j1jepg.webp",
      title: "KITCHEN FIRE SUPPRESSION",
      alt: "KITCHEN FIRE SUPPRESSION",
    },

    {
      id: 3,
      links:"/fire-hydrant-system",
      icon:
        "https://res.cloudinary.com/djablkulv/image/upload/v1757329423/10_grplmq.webp",
      title: "HYDRANTS",
      alt: "HYDRANTS",
    },

    {
      id: 4,
      links:"/addressable-fire-alarm-system-in-delhi-ncr",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329420/8_jfiqdm.webp",
      title: "ALARM SOLUTIONS",
      alt: "ALARM SOLUTIONS",
    },

    {
     
      id: 5,
      links:"/fire-sprinkler-system",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329418/6_xliveo.webp",
      title: "Fire Sprinkler System",
      alt: "Fire Sprinkler System",
    },

    {
      id: 6,
      links:"/fire-suppression-system",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329423/11_w4lore.webp",
      title: "Fire Suppression System",
      alt: "Fire Suppression System",
    },

    {
      id: 7,
      links:"/anti-rodent-system",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329416/1_lvrnci.webp",
      title: "Anti Rodent System",
    },

    {
      id: 8,
      links:"/water-leak-detection-device",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329416/4_qrelbz.webp",
      title: "Water Leak Device (WLD)",
    },

    {
      id: 9,
      links:"/fire-vesda-system",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329417/5_mddsxs.webp",
      title: "Vesda System",
    },

    {
      id: 10,
      links:"/fire-tubing-system",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329416/3_huckrp.webp",
      title: "Fire Tubing System",
    },

    {
      id: 11,
      links:"/fire-door-service",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1757329424/12_r5ewhp.webp",
      title: "Fire Door Service",
    },

    {
      id: 12,
      links:"/glow-signage-&-emergency-lights",
      icon: "https://res.cloudinary.com/djablkulv/image/upload/v1758095275/G_S_rlno8p.webp",
      title: "Glow Signage & Emergency Light",
    },

 
  ];

  const certifications = [
    {
      id: 1,
      alt: "LPCB Certification",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Isi_mark.svg",
    },

    {
      id: 2,
      alt: "UL Certification",
      src: "https://logos-world.net/wp-content/uploads/2021/02/IRS-Logo.png",
    },

    {
      id: 3,
      alt: "TM Certification",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg",
    },

    {
      id: 4,
      alt: "Wheelmark Certification",
      src: "https://images.jdmagicbox.com/quickquotes/images_main/iso-9001-consultants-2227128078-626472w5.png",
    },

    {
      id: 5,
      alt: "CE Certification",
      src: "https://www.polycase.com/wp/wp-content/media/ul-certified-logo.jpg",
    },
  ];

 
  const logos = [
    {
      
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/1_n3dez9.webp",
      alt: "logo of Cadila Pharmaceuticals",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/2_edxtax.webp",
      alt: "logo of heinz compnay",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682208/4_l39gtm.webp",
      alt: "logo of genesis luxury company",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682241/28_zseh41.webp",
      alt: "logo of toyota",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682239/27_h8edfl.webp",
      alt: "logo of silver streak",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682213/8_o1borr.webp",
      alt: "logo of SAN",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682215/9_ht35t3.webp",
      alt: "logo of sunbeam",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682223/15_r0hocj.webp",
      alt: "logo of HG global company",
      width: 176,
      height: 112,
    },
    {
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682227/18_x6zb8e.webp",
      alt: "logo of DLF",
      width: 176,
      height: 112,
    },
  ];

  const clients = [
    {
      id: 1,
      alt: "ENHUB",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/1_n3dez9.webp",
    },
    {
      id: 2,
      alt: "Growth Onboard",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/2_edxtax.webp",
    },
    {
      id: 3,
      alt: "OLSEN",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682208/4_l39gtm.webp",
    },
    {
      id: 4,
      alt: "serand",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682241/28_zseh41.webp",
    },
    {
      id: 5,
      alt: "astra",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682239/27_h8edfl.webp",
    },
    {
      id: 6,
      alt: "DEBTWORKS",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682213/8_o1borr.webp",
    },
    {
      id: 7,
      alt: "Shree Vigneshwara",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682215/9_ht35t3.webp",
    },
    {
      id: 8,
      alt: "SuperStuff",
      src: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682223/15_r0hocj.webp",
    },
    {
      id: 9,
      alt: "a",
      src: "https://logoeps.com/wp-content/uploads/2013/04/nestle-chocolate-vector-logo.png",
    },
    {
      id: 10,
      alt: "2twelve",
      src: "https://logos-world.net/wp-content/uploads/2020/11/Johnsons-Baby-Symbol.png",
    },
  ];

  const [flippedIds, setFlippedIds] = useState(new Set());
  const [currentClients, setCurrentClients] = useState(clients);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const swap = (arr) => {
      const newArr = [...arr];
      for (let i = 0; i < newArr.length - 1; i += 2) {
         
        [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      }
      return newArr;
    };

    const animationLoop = setInterval(() => {
      
      setIsAnimating(true);
      setFlippedIds(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

       
      const swapTimeout = setTimeout(() => {
        setCurrentClients((prevClients) => swap(prevClients));
        // Reset the flip state after the swap
        setIsAnimating(false);
        setFlippedIds(new Set());
      }, 500);  

       
      return () => clearTimeout(swapTimeout);
    }, 5000);  

    
    return () => clearInterval(animationLoop);
  }, []);

  return (
    <>
      <ToastContainer />

      <div className="row   h-auto w-full relative font-sans">
        <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full object-cover"
                style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
              >
                <video
                  className="w-full h-full object-cover object-center"
                  src="https://cdn.pixabay.com/video/2017/03/11/8346-208046347_large.mp4" // Use a new prop for the video source
                  alt={slide.alt}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* This is the overlay with the text */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white  bg-opacity-40">
                <h1 className=" text-lg md:text-5xl   font-semibold text-center">
                  Adhunik Firexpert | The Guardian of Your Peace
                </h1>
                <h2 className=" text-sm md:text-3xl font-medium mt-4 text-center">
             Engineering Safety , Built on a Legacy of Trust
   </h2>

                <div className="flex flex-col items-center justify-center ">
                  {/* Container for the images. Uses flexbox for layout. */}
                  {/* It's responsive, switching from a single column on small screens to a row on larger ones. */}
                  <div className="flex py-4   sm:flex-row md:space-y-8 sm:space-y-0 md:space-x-8 md:max-w-6xl mx-auto">
                  
                     <StatsFlip/>

                  </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  {/* Container for the images. Uses flexbox for layout. */}
                  {/* It's responsive, switching from a single column on small screens to a row on larger ones. */}
                   <Link href="/help-and-support"
                     
                      className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold   group"
                    >
                      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red-500 opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-500 opacity-100 group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-sm  ">
                        Let's Connect
                      </span>
                      <span className="absolute inset-0 border-2 border-white"></span>
                    </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 z-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm ${
                  index === currentSlide ? "bg-[#FC6C1E]" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="bg-black text-white py-12 md:py-24 flex items-center justify-center p-8">
          <div
            ref={sectionRef}
            className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
          >
            {/* Left Side: Content Box */}
            <div className="w-full md:w-1/2 p-10 md:p-16 border-l border-white h-full">
              <p className="text-sm uppercase tracking-wide opacity-75">
                Our Vision
              </p>
              <h2 className="text-xl md:text-5xl font-bold leading-tight mt-4 mb-6">
               Top Fire Fighting Contractor in Delhi NCR & India

              </h2>
              <p className="md:text-base text-sm text-gray-300">
             We deliver comprehensive, end-to-end fire safety solutions. From fire risk audits and turnkey system installation to Fire NOC consultancy, we are your trusted partner in protecting your facility.

                relentless innovation, allowing us to engineer highly reliable,
                performance-driven products. Our commitment is to protect our
                customers, their communities, and their livelihoods with
                solutions that never fail.{" "}
              </p>
            </div>

            {/* Right Side: Image with Scroll Effect */}
            <div className="w-full md:w-1/2 overflow-hidden bg-black rounded-lg shadow-xl relative h-[90vh] ">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A pair of binoculars"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#E9E6E6]   flex items-center justify-center ">
          <div className="container   flex flex-col  md:flex-row-reverse items-center justify-center rounded-xl overflow-hidden ">
            {/* Left Side: Content Box */}
            <div className="w-full md:w-6/12 p-10 md:p-16    flex flex-col justify-center">
              <h2 className=" md:text-3xl    leading-tight mb-6 text-gray-800">
              The Adhunik Advantage : An Award-Winning Legacy of Trust
              </h2>

              <p className="text-sm text-gray-600 mb-8">
              Choosing a fire safety partner is a decision built on trust. Our expertise is not new; it is born from the proven, award-winning project execution legacy of the1 renowned Adhunik Powertech.

              </p>

              <ul className=" list-disc  list-outside ps-4">
                <li>
                  <strong>19+ Year Engineering Heritage : </strong> 
                   We bring nearly two decades of hands-on experience in India's most complex industrial and commercial environments.

                </li>

                <li>
                  <strong>True Turnkey Contractor : </strong>  We manage everything from the initial risk assessment to the final handover and long-term AMCs, providing a single point of accountability.

                </li>
                <li>
                  <strong>
 Uncompromising Compliance : {" "}
                  </strong>
                  We have a deep, practical understanding of the National Building Code (NBC). Our compliance-first approach ensures your systems are built right, the first time.

                </li>

                <li>
                  <strong>
 Award-Winning Team : {" "}
                  </strong>

                  Our team’s commitment to quality contributed to earning the prestigious India Business Award 2025 for "Best Quality Standards."


                </li>
              </ul>
              <Link
                href="/our-company"
                className="group pt-2 flex items-center w-max text-blue-600 font-semibold transition-all duration-300 transform hover:translate-x-1"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Side: Video Container */}
            <div className="w-full md:w-6/12 h-[90vh] bg-black relative">
              <video
                className="w-full h-full object-cover"
                src="https://video.wixstatic.com/video/cf66d3_cf557c2fe4cf4286b7a88f76769d8557/720p/mp4/file.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>


        <div className="bg-[#E9E6E6]   flex items-center justify-center ">
          <div className="container   flex flex-col  md:flex-row items-center justify-center rounded-xl overflow-hidden ">
            {/* Left Side: Content Box */}
            <div className="w-full md:w-6/12 p-10 md:p-16    flex flex-col justify-center">
              <h2 className=" md:text-3xl    leading-tight mb-2 text-gray-800">
           A Single Source for All Your Fire Safety Needs
  </h2>

              <p className=" text-sm text-gray-600 mb-2">

        As a leading fire fighting contractor in Delhi, we provide a full spectrum of design, installation, and maintenance services to ensure your facility is protected from every angle.

              </p>

              <ul className=" list-disc  list-outside ps-4">
                <li>
                  <strong>Fire Hydrant & Sprinkler Systems : </strong> 
                  
                  We design and install robust internal and external hydrant systems and automated sprinkler systems that provide a powerful first line of defence.

                </li>

<li>
  <strong>
Fire Alarm & Detection Systems : 
  </strong>

   We install advanced conventional and addressable fire alarm systems, complete with smoke, heat, and flame detectors for immediate alerts.


</li>

           <li>
            <strong>
Gas Suppression Systems : 
            </strong>
             For mission-critical assets like data centers and server rooms, we provide clean agent gas suppression systems (CO2, FM-200) that extinguish fires without damaging sensitive equipment.

           </li>  

<li>
  <strong>
Fire Extinguishers & Signage : 
  </strong>

   We supply and install a complete range of commercial and industrial-grade fire extinguishers and ensure your facility is equipped with clear, compliant safety signage.

</li>

<li>
  <strong>
Fire NOC Consultancy & Liaison : 
  </strong>

   We are experts in the compliance process. Our team guides you through every step of obtaining and renewing your Fire No Objection Certificate (NOC).


</li>

              </ul>
             
            </div>

            {/* Right Side: Video Container */}
            <div className="w-full md:w-6/12 h-[90vh] bg-black relative">
              <video
                className="w-full h-full object-cover"
                src="https://video.wixstatic.com/video/cf66d3_cf557c2fe4cf4286b7a88f76769d8557/720p/mp4/file.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

    



        <div className="relative w-full  min-h-screen flex flex-col items-center justify-center text-center text-white p-8 overflow-hidden">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://video.wixstatic.com/video/11062b_7e61ffd6dbb040ee8b0e4dc604e8fd4e/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative bottom-4 bg-[#262626] text-white py-2 px-8 rounded-b-2xl shadow-lg z-10">
            <h2 className="uppercase text-lg font-semibold tracking-wide">
              ADHUNIK FIREXPERT HALLMARK
            </h2>
          </div>
          {/* Static Image Overlay with no-repeat effect */}
          <div
            className="absolute top-0 left-0 w-full h-full z-5 bg-center bg-repeat"
            style={{ backgroundImage: 'url("/o.png")' }}
          ></div>

          {/* Semi-transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full  z-1" />

          {/* Content Overlay */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white border-opacity-30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-gray-800 text-left">
                {/* Map over the features array to dynamically render each item */}
                {features.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-start space-y-4"
                  >
                    {item.icon}
                    <h2 className="text-xl font-bold ">{item.title}</h2>
                    <p className="text-sm ">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


    <div className="bg-[#E9E6E6]   flex items-center justify-center ">
          <div className="container   flex flex-col  md:flex-row items-center justify-center rounded-xl overflow-hidden ">
            {/* Left Side: Content Box */}
            <div className="w-full   p-10 md:p-16    flex flex-col justify-center">
              <h2 className=" md:text-3xl    leading-tight mb-6 text-gray-800">
        Specialized Solutions for High-Risk Industries

  </h2>

              <p className=" text-sm text-gray-600 mb-8">

      We have proven experience in designing and implementing industrial fire safety solutions for some of the most demanding environments, including :

              </p>

              <ul className=" list-disc">


                <li>
                  <strong>Industrial & Manufacturing Facilities
 </strong> 
                  
                
                </li>

<li>
  <strong>
High-Hazard Ethanol & Chemical Plants 
  </strong>

   

</li>

           <li>
            <strong>

Large-Scale Warehousing & Logistics Hubs

            </strong>
           
           </li>  


<li>

  <strong>

Commercial High-Rises & Corporate Offices

  </strong>


</li>

<li>
  <strong>
Hospitals & Healthcare Facilities
  </strong>

</li>


<li>
  <strong>Data Centers & IT Infrastructure
</strong>
</li>
              </ul>
             
            </div>

            {/* Right Side: Video Container */}
          
          </div>
        </div>

        <div className="relative w-full   flex flex-col items-center justify-center p-8 bg-white">
          <div className="absolute top-4 bg-[#262626] text-white py-2 px-8 rounded-b-2xl shadow-lg z-10">
            <h2 className="uppercase text-center text-lg font-semibold tracking-wide">
              OUR FULL SPECTRUM FIRE SOLUTIONS
            </h2>
          </div>

          <div className="container mx-auto py-24 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {solutions.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center text-center      "
                
                >

                <Link href={item.links} className="flex flex-col items-center justify-center text-center space-y-4 p-4 rounded-lg">
   <div className="w-32 h-32 flex items-center justify-center ">

                    <img
                      src={item.icon}
                      className=" h-full w-full"
                      alt={item.alt}
                    />


                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
                    {item.title}
                  </h3>

                </Link>
               

                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#C7C7C7] py-24 w-full flex flex-col items-center justify-center p-8">
          {/* Title Box */}

          <div className="  relative bottom-16   bg-[#262626] text-white py-2 px-8 rounded-b-2xl shadow-lg z-10">
            <h2 className="uppercase text-lg font-semibold tracking-wide">
              OUR CERTIFICATIONS
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex  flex-col items-center justify-center"
                >
                  <div className="card  h-24 w-24  md:h-32 md:w-32">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full  object-center object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



       <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          We don’t just work together—we <span className="text-red-500">grow</span> together.
        </h1>
      </div>

      {/* Client Logos Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-8 items-center justify-center">
          {currentClients.map((client, index) => (
            <div
              key={client.id}
              className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white transition-transform duration-700 ease-in-out transform ${
                isAnimating && (index % 2 === 0 || (index > 0 && (index - 1) % 2 === 0)) ? 'rotate-y-180  ' : ''
              }`}
            >
            <div className="card lg:h-36 lg:w-36">

      <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-center object-contain"
              />

            </div>
        
            </div>
          ))}
        </div>
      </div>
    </div>



        {/* <section>
          <div className="row  py-6">
            <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">
              <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

              <h2 className="absolute text-3xl px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans">
                OUR CLIENTS
              </h2>
            </div>

            <style jsx>{`
              @keyframes infinite-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 15s linear infinite;
              }
            `}</style>

            <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {[...Array(2)].map((_, index) => (
                <ul
                  key={index}
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  aria-hidden={index === 1 ? "true" : "false"}
                >
                  {logos.map((image, index) => (
                    <li key={index}>
                      <img
                        loading="lazy"
                        src={image.src}
                        className=" object-center  object-cover"
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section> */}

        <section>
          <div className="row h-full w-full px-5 md:py-5  bg-white ">
            <div className=" py-4 inline-flex items-center justify-center w-full mx-auto md:mt-0  md:my-7 md:mb-0">
              <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
              <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2  bg-white left-1/2  text-center text-[20px]  md:text-4xl text-1xl capitalize font-semibold ">
                {" "}
                Testimonials
              </h2>
            </div>
            <p className=" py-4 inline-flex items-center justify-center w-full mx-auto md:mt-0 text-center  md:my-7 md:mb-0">
              Rather than taking our word for it, explore what our clients have
              to say about the quality of our products and services.
            </p>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 3500,
                speed: 2800,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                888: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper z-0"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="p-4 rounded-sm    border-[1px] "
                >
                  <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none ">
                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                      <div className="flex w-full flex-col gap-0.5 ">
                        <div className="flex items-center justify-between">
                          <h2 className="block    text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {slide.name}
                          </h2>

                          <div className="flex items-center gap-0 5 text-[#FBBF2C]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-start  block  text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          {slide.position}
                        </p>
                      </div>
                    </div>
                    <div className="p-0 mb-6">
                      <p className="block   text-base text-justify antialiased font-light leading-relaxed ">
                        {slide.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}

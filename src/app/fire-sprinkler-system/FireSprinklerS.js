import React from 'react'

export default function FireSprinklerS() {

      const sprinklertypes = [
        {

            title: "Wet Pipe Sprinkler Systems",
            description: "The most common, cost-effective, and reliable type of fire sprinkler system. In a wet pipe system, the network of pipes is constantly filled with water under pressure. When the heat from a fire activates a sprinkler head, water is discharged immediately. This instant response makes it the ideal choice for most heated commercial and industrial buildings, including offices, retail spaces, and manufacturing facilities in Delhi NCR, where the risk of freezing temperatures is minimal.",
        },

       {
        title:"Dry Pipe Sprinkler Systems",
        description:"Specifically engineered for unheated spaces where pipes are at risk of freezing, such as warehouses, parking garages, loading docks, and attic spaces. In a dry pipe system, the pipes are filled with pressurized air or nitrogen instead of water. When a sprinkler head is activated by heat, the air pressure drops, which opens a valve (the 'dry pipe valve') located in a heated area. This allows water to rush into the pipes and out of the open sprinkler head. This slight delay is a necessary trade-off to prevent frozen and burst pipes.",
       }
,
{
    title:"Pre-Action Sprinkler Systems",

    description: "The perfect solution for environments where accidental water discharge could be as damaging as a small fire. These systems are essential for protecting high-value, water-sensitive assets found in data centers, museums, libraries, and archives. A pre-action system requires a two-step activation process. First, a fire detector (like a smoke or heat detector) in the area must activate. This initial trigger opens the pre-action valve, allowing water to fill the pipes. However, no water is discharged until the sprinkler head itself is activated by heat. This dual-trigger design provides an added layer of protection against accidental water damage.",

},

,
{
    title : "Deluge Sprinkler Systems",

    description: "Used in high-hazard industrial applications where the rapid spread of fire is a major concern, such as in chemical plants, aircraft hangars, or facilities handling flammable liquids. In a deluge system, all sprinkler heads are open at all times. The system is triggered by an advanced fire detection system. When activated, a deluge valve opens, releasing a massive volume of water through every single sprinkler head simultaneously, dousing the entire protected area to quickly overwhelm a fast-spreading fire.",

},


    ];


    const sprinklerfeatures = [
        {
            title: "Automatic Activation -",
            description: "Our systems provide immediate, autonomous fire suppression, crucial for a rapid response in the densely populated and varied environments of Delhi NCR.",
        },


        {
            title: "Targeted Response -",
            description: "Limiting water discharge to the immediate fire area minimizes damage, a significant advantage in both residential and commercial properties across Delhi NCR.",
        },


        {
            title: "Reliable Performance -",
            description: "Adhunik FireXpert systems are constructed with high-grade components and adhere to stringent national and local Delhi NCR fire safety standards, guaranteeing dependable operation.",
        },


        {
            title: "Versatile Applications -",
            description: "Versatile Applications: Our systems cater to the diverse building types and industries within Delhi NCR, from residential apartments and bustling commercial complexes to sprawling industrial estates.",
        },


        {
            title: "Expert Installation and Maintenance Across Delhi NCR -",
            description: "Our experienced team provides professional installation and consistent maintenance services throughout Delhi NCR, ensuring your system operates optimally and complies with local regulations.",
        },



    ];


    const sprinklerHeads = [
        {
            title: "Sprinkler Heads –",
            description: "A wide variety of types to meet the diverse aesthetic and functional needs of properties in Delhi NCR",
        },
    ];

    const sprinklerHeads2 = [
        {
            title: "UL Listed Flexible Sprinkler Hose –",
            description: "The UL Listed Flexible Sprinkler Hose is a flexible connector used to connect the sprinkler head to the water supply. It is available in both braided and unbraided types and comes in various lengths (700mm, 1000mm, 1200mm, 1500mm, 1800mm). The flexibility of the hose allows for easier installation and adjustment of the sprinkler head’s position.",
        },


        {
            title: "Piping and Fittings –",
            description: "Durable and fire-resistant pipes and fittings designed to withstand the demands of various environments within Delhi NCR.",
        },

        {
            title: "Valves –",
            description: "Control, alarm, and other critical valves ensuring efficient system operation and control, compliant with Delhi NCR safety codes.",
        },


        {
            title: "Detection Systems –",
            description: "Integration of advanced smoke and heat detectors for pre-action and deluge systems, crucial for early warning in Delhi NCR buildings.",
        },

        {
            title: "Accessories –",
            description: "Comprehensive range of hoses, gauges, and other accessories for seamless installation and maintenance throughout the Delhi NCR region.",
        },



    ];


    const sprinklerHeadstypes = [
        {
            title: "Pendent Type Fire Sprinkler –",
            description: "Installed on ceilings, these sprinklers hang down and spray water downward in a circular pattern, covering the floor below.",
        },
        {
            title: "Sidewall Type Fire Sprinkler –",
            description: "Mounted on walls or ceilings, these sprinklers direct water to one side, making them ideal for narrow spaces or rooms where ceiling installation is impractical.",
        },

        {
            title: "Upright Type Fire Sprinkler –",
            description: "Installed on ceilings but face upward, these sprinklers are typically used in areas with exposed pipes and high ceilings, spraying water upwards and then outward.",
        },


        {
            title: "Concealed Type Fire Sprinkler –",
            description: "These sprinklers are hidden behind a cover plate until activated. They are aesthetically pleasing and blend into the ceiling, making them ideal for places where appearance is important.",
        },



    ];


    const sprinklerApplications = [
        {

            description: "Residential buildings (apartments, gated communities in Gurgaon, Noida, etc.)",
        },
        {

            description: "Commercial buildings (offices, shopping malls, hotels in Delhi, Faridabad, Ghaziabad)",
        },

        {
            description: " Industrial facilities (factories in the NCR industrial belts)"
        }
        ,
        {
            description: " Warehouses and logistics hubs across the region"
        }
        ,
        {
            description: " High-hazard environments (chemical plants, refineries within the NCR)"
        },
        {
            description: "Data centers and IT parks in Gurgaon and Noida"
        },
        {
            description: "Educational institutions and hospitals throughout Delhi NCR"
        }


    ];




    const sprinklerwhychoose = [

        {
            title: "Deep Engineering Expertise",
            description: "Our approach is built on the award-winning legacy of Adhunik Powertech, ensuring every system is designed with precision, a deep understanding of hydraulic calculations, and a focus on optimal system performance.",
        },

        {
            title: "Uncompromising Compliance",
            description: "We are experts in the National Building Code (NBC) and other relevant standards. We ensure your system is fully compliant, facilitating a smooth Fire NOC approval process.",
        },

        {
            title: "True Turnkey Project Management",
            description: "From the initial design and material supply to flawless installation and final commissioning, we manage the entire project with a single point of accountability.",
        },


        {
            title: "Certified Components",
            description: "We use only high-quality, UL-listed, and ISI-marked pipes, fittings, valves, and sprinkler heads from trusted manufacturers to guarantee the long-term reliability and performance of your system.",
        },
 

    ];


  return (
    <>
      <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                   

                      <div className="box w-full h-full">
                               <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300835/fire_sprinklers_fje9ba.webp"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300891/1_iuuhca.webp"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-3xl md:text-5xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            Fire Sprinkler System


                            <br />
                            <span className="text-center  text-[12px]  md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire Sprinkler System

                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-around flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-5/12 w-full">

                            <img
                                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618656/fire-sprinkler-system-2_ey3qlf.webp"
                                alt="Fire Sprinkler System"
                                className="rounded-xl w-full h-auto"
                            />

                        </div>

                        <div className="lg:w-6/12 w-full">
                            <h1 className=" w-10/12 text-3xl font-bold mb-4 text-center md:text-left" > 
                            
                            Automatic Fire Sprinkler Systems  Your 24/7 Fire Protection

                            </h1>

                            <h2 className="  text-justify mb-4" >
                              The Most Effective First Line of Defense Against Fire. Adhunik FireXpert is a leading fire sprinkler contractor in Delhi NCR, specializing in the design, installation, and maintenance of reliable, compliant fire sprinkler systems for commercial and industrial facilities.
                            </h2>

                         
                        </div>
                    </div>

                    <div className="row py-5">

                        <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                            <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">

                          Why a Fire Sprinkler System is a Non-Negotiable Asset
?
                            </h2>
                        </div>




                        <p className="text-gray-700  text-justify md:text-left">
                        In the event of a fire, immediate, automated suppression is the single most effective way to protect lives, minimize property damage, and ensure business continuity. A professionally installed fire sprinkler system acts as a silent guardian, providing constant 24/7 protection. It is designed to detect the heat from a fire and activate automatically, often controlling or completely extinguishing the blaze long before the fire department can arrive. This rapid response is critical in containing a fire to its point of origin and preventing a minor incident from escalating into a catastrophic loss.
                        </p>

                        
                        <p className="text-gray-700  text-justify md:text-left">
              
              At Adhunik FireXpert, we bring a 19+ year legacy of engineering excellence to every installation. We don't just install pipes and heads; we engineer a life-saving solution meticulously tailored to the unique risks and architectural complexities of your facility.

                        </p>



                        <h2 className="text-2xl pt-4 font-bold mb-4 text-center md:text-left">

                          Tailored Sprinkler Solutions for Every Environment

                        </h2>

                              <p className="text-gray-700  text-justify md:text-left">

            A one-size-fits-all approach is not an option in fire safety. As an expert fire sprinkler contractor in Delhi, we possess deep expertise in designing and installing all major types of fire sprinkler systems to provide the optimal level of protection for your specific environment.

                        </p>


                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {sprinklertypes.map((item, index) => (
                                <li key={index} className=' py-1 text-justify md:text-left'>
                                    <span className="font-semibold  ">{item.title}</span> :  {item.description}
                                </li>
                            ))}
                        </ul>


                    </div>

                    <div className="mt-20">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                            <div className="lg:w-6/12 w-full">

                                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                                    Key Features of Adhunik FireXpert Sprinkler Systems for Delhi NCR
                                </h2>

                                <ul className="  list-disc pl-6 space-y-2 text-gray-700">
                                    {sprinklerfeatures.map((item, index) => (
                                        <li key={index} className=' py-2 text-justify md:text-left'>
                                            <span className="font-semibold  ">{item.title}</span> {item.description}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="lg:w-6/12 w-full">

                                <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618656/fire-sprinkler-system-3_w6g04z.webp"
                                    alt=" Fire Sprinkler System"
                                    className="rounded-xl w-full h-auto"
                                />

                            </div>
                        </div>

                        <div className="mt-12">

                            <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                                <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                                <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">
                                    Adhunik FireXpert Product Range for Delhi NCR
                                </h2>
                            </div>


                            <p className="text-gray-700 py-2  text-justify md:text-left">
                                We offer an extensive selection of fire sprinkler system components readily available for supply and installation across Delhi NCR :

                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">

                                {sprinklerHeads.map((item, index) => (
                                    <li key={index} className=' py-2 text-justify md:text-left'>
                                        <span className="font-semibold ">{item.title}</span> {item.description}
                                    </li>
                                ))}

                            </ul>

                            <ul className=" px-8  py-2  list-decimal    text-gray-700">
                                {sprinklerHeadstypes.map((item, index) => (
                                    <li key={index} className='text-justify   md:text-left  '>
                                        <span className="font-semibold "> {item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>


                            <ul className="list-disc py-2 pl-6 space-y-2 text-gray-700">
                                {sprinklerHeads2.map((item, index) => (
                                    <li key={index} className='text-justify md:text-left'>
                                        <span className="font-semibold ">{item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>


                        </div>



                    </div>


                    <div className="row">

                        <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                            <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">
                                Applications Across Delhi NCR
                            </h2>
                        </div>


                        <p className="text-gray-700  text-justify md:text-left ">Adhunik FireXpert sprinkler systems are ideal for a wide spectrum of applications within Delhi NCR, including :
                        </p>


                        <ul className="list-disc pl-6 space-y-2 text-gray-700 py-2">
                            {sprinklerApplications.map((item, index) => (
                                <li key={index} className='text-justify md:text-left'>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="row">
                        <h2 className="text-2xl pt-3 py-2 font-bold mb-4 text-center md:text-left">
                    Why Choose Adhunik FireXpert as Your Fire Sprinkler Contractor ?
 </h2>

 <p>
    The long-term reliability of your fire sprinkler system depends entirely on the quality of its design and installation.

 </p>



                        <ul className="list-disc pl-6 py-2 space-y-2 text-gray-700">
                            {sprinklerwhychoose.map((item, index) => (
                                <li key={index} className='text-justify md:text-left'>
                                    <span className="font-semibold ">{item.title}</span>   :   {item.description}
                                </li>
                            ))}
                        </ul>



                        <div className="w-full md:p-6 rounded-xl">
                            <div className="flex items-center justify-center h-full">
                                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                                    {/* Divider with Heading */}
                                    <div className="relative inline-flex py-2 items-center justify-center w-full mx-auto my-7 md:mb-0">
                                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                                        <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[15px] md:text-2xl capitalize font-semibold font-sans">
                                       Ensure Your Property is Protected by the Best

                                        </h2>
                                    </div>

                                    {/* Paragraphs */}
                                    <p className="   font-sans text-center  w-full">
                                Don't compromise on your first and most effective line of defense against fire. Partner with a fire sprinkler contractor whose expertise is built on a legacy of trust and engineering excellence. 

                                <br />
                                        Protect your property and loved ones in Delhi NCR with a reliable fire sprinkler system from Adhunik FireXpert. Contact us today for a consultation and quote tailored to your specific needs and location within the National Capital Region.
                                  <br />
                                     Contact us today for a free consultation and a detailed quote for your fire sprinkler system installation.
  </p>

                                  



                                    {/* Button */}
                                    <div className="w-full flex justify-center">
                                        <a
                                            href="tel:8287885885"
                                            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                                        >
                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                                            <span className="relative">
                                            Contact  Expert</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>




                </div>
            </section>
    
    </>
  )
}

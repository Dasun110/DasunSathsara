import React, { useState } from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";


const Services  =()=> {
 
  return (
  <div id="Srvices" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
    <p className=" heading">My 
    <span className="text-red-500"> Services</span></p>

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
    mt-[4rem] text-white">
        <div>
            <div data-aos="fade-right" className="bg-red-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
             uppercase font-semibold text-center p-[2rem] ">
                 <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                 <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">Frontend</h1>
                 <p className="text-[15px] text-[#d3fae8] font-normal">Transform your ideas into stunning, user-friendly interfaces with my expertise in frontend development. Using HTML5, CSS, Bootstrap, and JavaScript frameworks like Next.js, I craft engaging and responsive designs that captivate users and elevate your digital presence.
                 </p>
             </div>   
        </div>
        <div>
            <div data-aos="zoom-in" data-aos-delay="300" className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
             uppercase font-semibold text-center p-[2rem] ">
                 <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                 <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">Fullstack</h1>
                 <p className="text-[15px] text-[#d3fae8] font-normal">Experience seamless integration of frontend and backend technologies with my full-stack development services. Leveraging my proficiency in languages such as Python, Java, and Kotlin, along with frameworks like Next.js and REST APIs, I deliver robust and scalable solutions that meet your project&apos;s demands from end to end.
                </p>

             </div>   
        </div>
        <div>
            <div data-aos="fade-left" data-aos-delay="500" className="bg-red-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
             uppercase font-semibold text-center p-[2rem] ">
                 <DevicePhoneMobileIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                 <h1 className="text-[16px] md:text-[24px] mt-[1.5rem] mb-[1.5rem] ">Mobile Developer</h1>
                 <p className="text-[15px] text-[#d3fae8] font-normal">Enter the realm of mobile innovation with my mobile development services. Whether you need a native Android app in Kotlin or a cross-platform solution using frameworks like React Native, I specialize in creating dynamic and intuitive mobile applications that bring your ideas to life on the go.

                 </p>
             </div>   
        </div>

    </div>

   
  </div>);
};
export default Services;
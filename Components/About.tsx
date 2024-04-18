import { ArrowDownCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";


const About = () => {
  return(
    <div id="About" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[20px] font-bold uppercase text-red-500 md-[1rem] ">
                    ABOUT ME
                </h1>
                <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white">
                    Transforming <span className="text-red-500">Visions</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                    <p className="text-[19px] text-slate-400 w-[80%]">I am a dedicated and flexible second-year computer science student at the Informatics Institute of Technology, driven by a passion for game development and machine learning. Currently, I am actively seeking an internship position at IIT to harness and expand my technical skills in the industry.

With expertise in a variety of programming languages such as Python, Java, HTML5, CSS, and Bootstrap, I bring a versatile skill set to the table. Additionally, I excel in Next.js, REST API development, Kotlin, and mobile app development, enabling me to contribute effectively to both front-end and back-end aspects of projects.

I am eager to apply my knowledge in a practical setting, and I believe in the power of innovation to drive progress. Join me as we embark on a journey of transformative visions and groundbreaking initiatives at IIT.

</p>
                </div>
                <button className="px-[2rem] hover:bg-red-500 transition-all duration-200 py-[1rem] text-[18px]
                    font-bold uppercase bg-white text-black flex items-center space-x-2">
                    <p>Download Cv</p>
                    <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
                </button>
            </div>
           <div data-aos="fade-left" className="lg:w-[500px] mx:auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] relative">
           <Image src="${basePath}/images/about.jpg" alt="dasun" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain"/>
           <div className=" absolute w-[100%] h-[100%] z-[10] bg-red-500 top-[-2rem] right-[-2rem]"></div>

           </div>
        </div>

    </div>
  )
}

export default About;
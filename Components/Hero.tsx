import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div id="Home" className="h-[100vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:test[50px] text-white font-bold">
            HI I'M <span className="text-red-500">DASUN !</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-gray-300" style={{textAlign: 'left'}}>
          I'm a second-year computer science student at IIT with a passion for game development and machine learning. Proficient in Python, Java, HTML5, CSS, Bootstrap, Next.js, REST API development, Kotlin, and mobile app development. Experienced in full-stack development, adept at both front-end and back-end work. Excited to contribute to innovative projects at IIT.</p>

          <div className="mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row items-center sm:spece-x-6">
            <button className="px-[2rem] hover:bg-red-500 transition-all duration-200 py-[1rem] text-[18px]
             font-bold uppercase bg-white text-black flex items-center space-x-2">
                <p>Download Cv</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
            </button>

          </div>
        </div>
        <div className="w-[400px] hidden bg-[#55e6e5] relative lg:flex items-center rounded-full h-[400px]">
          <Image src={"${basePath}/images/me.jpg"} alt="Dasun" layout="fill" className="object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

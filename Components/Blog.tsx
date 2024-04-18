import React from "react";
import Image from "next/image";


const Blog = () => {
  return (
    <div id="Blog" className="bg-[#121121] pb-[3rem] pt-[4rem] ">
      <h1 className="heading">
          MY<span className="text-red-500">BLOG</span>
      </h1>

      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
      <a href="https://medium.com/@dasunpcc50/building-a-scientific-calculator-with-gui-in-python-73f77353440e " target="_blank" rel="noopener noreferrer">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[400px]">
            <Image src="./images/bo1.png" alt="Project1" layout="fill" className="object-contain" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-6rem] space-x-4">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              April 16, 2024
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-sm">Building a scientific calculator with (GUI)in Python</p>
          </div>
        </div>
      </a>

      <a href="https://medium.com/@dasunpcc50/beginners-guide-how-to-divide-an-image-into-multiple-parts-using-python-and-opencv-6823fbe9f008 " target="_blank" rel="noopener noreferrer">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[400px]">
            <Image src="./images/bo2.png" alt="Project1" layout="fill" className="object-contain" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-6rem] space-x-4">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              April 16, 2024
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-sm">Building a scientific calculator with (GUI)in Python</p>
          </div>
        </div>
      </a>

      <a href="https://github.com/yourusername/repository" target="_blank" rel="noopener noreferrer">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[400px]">
            <Image src="./images/p1.jpg" alt="Project1" layout="fill" className="object-contain" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-6rem] space-x-4">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              April 16, 2024
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-sm">Building a scientific calculator with (GUI)in Python</p>
          </div>
        </div>
      </a>

      </div>

      
    </div>
  );
};

export default Blog;

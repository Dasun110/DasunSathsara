import React from "react";
import Image from "next/image";


const Projects = () => {
  return (
    <div id="projects" className="bg-[#121121] pb-[5rem] pt-[4rem] md:pt-[8rem]">
      <h1 className="heading">
           Pro<span className="text-red-500">Jects</span>
      </h1>
      
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
      <div data-aos="fade-up">
        <a href="https://raw.githubusercontent.com/yourusername/yourrepository/main/images/p1.png" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image src="/images/p1.png" alt="Project1" layout="fill" className="object-contain" />
          </div>
        </a>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <a href="https://github.com/Dasun110/Guess-the-Flag" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image src="/images/p2.png" alt="Project2" layout="fill" className="object-contain" />
          </div>
        </a>
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <a href="https://github.com/Dasun110/Image-Segmentation-OpenCV-Python" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image src="/images/p3.png" alt="Project3" layout="fill" className="object-contain" />
          </div>
        </a>
      </div>



      </div>
      
    </div>
  );
};

export default Projects;

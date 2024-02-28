import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


function LandingPage() {
  const [fullWidth, setWidth] = useState('7vw');
  const screenWidth = () => {
    window.innerWidth > '768px' ? setWidth('7vw') : setWidth('20vw');
    
  }
  return (
     
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-100 pt-1 ">
      <div className="textstructure mt-44 md:px-12 px-6">
        {["We Create", " eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div initial={{width :0}} animate={{width:`${fullWidth}`}}  transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }} className="w-[25vw] md:h-[5vw] h-[6vw] relative -top-[.8vw] rounded-md mr-[.5vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center "></motion.div>
                )}
                <h1 className='md:text-[7vw] text-[11vw] uppercase md:leading-[6vw] leading-[8vw] tracking-tighter font-Founders_semibold font-semibold text-zinc-900'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:border-t-[1px] border-t-[2px] md:border-zinc-300 border-zinc-400 mt-32 md:flex md:flex-row md:justify-between md:items-center flex flex-col md:gap-[5vw] gap-[10vw] md:py-4 py-8 px-6 md:px-8 font-Neue_Montreal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="md:text-lg text-base tracking-tight leading-none text-zinc-600">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-[1vw]">
          <p className="uppercase text-sm font-normal border-[2px] border-zinc-600 rounded-full md:py-2 md:px-3 py-1 px-2 text-zinc-700 font-Neue_Montreal">
            Start the project
          </p>
          <div className="border-zinc-600 border-[2px] rounded-full font-lighter w-9 h-9 md:flex md:justify-center md:items-center hidden text-zinc-600">
            <span className="rotate-45">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default LandingPage;

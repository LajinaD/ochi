import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  return (
    <div  className='w-full md:py-10 py-5 bg-zinc-100 font-Neue_Montreal '>
      <div className="w-full py-8 md:px-16 px-6">
        <h1 className="text-black md:text-6xl text-3xl tracking-tight">
          Featured projects
        </h1>
        <div className="cards flex md:flex-row flex-col gap-5 w-full border-t-[1px] border-zinc-400 md:mt-12 mt-6 md:pt-20 pt-10">
          <div
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
            className="cardcontainer md:h-[80vh] md:w-1/2 w-full h-[40vh] relative flex items-center justify-center"
          >
            <h1 className="absolute z-10 flex overflow-hidden md:text-8xl text-6xl font-semibold leading-none tracking-tighter md:left-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ width: "100%", height: "100%" }}
              animate={
                isHovering1
                  ? { width: "95%", height: "95%" }
                  : { width: "100%", height: "100%" }
              }
              transition={{ease: [0.37, 0, 0.63, 1]}}
              className="card w-full h-full rounded-xl bg-green-500 overflow-hidden"
            >
              <img
                className="bg-cover bg-center h-full w-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </motion.div>
          </div>
          <div
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            className="cardcontainer md:h-[80vh] md:w-1/2 w-full h-[40vh] relative flex items-center justify-center"
          >
            <h1 className="absolute flex overflow-hidden z-10 md:text-8xl text-6xl font-semibold leading-none tracking-tighter md:right-full right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div initial={{ width: "100%", height: "100%" }}
              animate={
                isHovering2
                  ? { width: "95%", height: "95%" }
                  : { width: "100%", height: "100%" }
              }
              transition={{ease: [0.37, 0, 0.63, 1]}} className="card w-full h-full rounded-xl bg-green-500 overflow-hidden">
              <img
                className="bg-cover bg-center h-full w-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

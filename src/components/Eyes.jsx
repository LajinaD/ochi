import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div  className="eyes w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
            <div className="absolute flex items-center justify-center gap-[2vw] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] md:w-1/3  w-full md:h-[15vw] ">
                <div className="md:w-[14vw] md:h-[14vw] w-[28vw] h-[28vw] bg-zinc-100 rounded-full flex items-center justify-center">
                <div className="md:w-[9vw] md:h-[9vw] w-[18vw] h-[18vw] bg-zinc-900 rounded-full relative">
                    <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="md:w-[2vw] md:h-[2vw] w-[4vw] h-[4vw] bg-zinc-100 rounded-full"></div>
                    </div>
                
                </div>
                </div>
                <div className="md:w-[14vw] md:h-[14vw] w-[28vw] h-[28vw] bg-zinc-100 rounded-full flex items-center justify-center">
                <div className="md:w-[9vw] md:h-[9vw] w-[18vw] h-[18vw] bg-zinc-900 rounded-full relative ">
                <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                    <div className="md:w-[2vw] md:h-[2vw] w-[4vw] h-[4vw] bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    
  );
}

export default Eyes;

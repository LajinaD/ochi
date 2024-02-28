import React, { useEffect, useState }  from 'react'


function Ready() {
    const [rotate, setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle -180);
        });
    });

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full bg-[#CDEA68] rounded-t-2xl flex flex-col flex-wrap justify-center items-center relative md:py-[30vh] py-[25vh] md:gap-0 gap-[5vw] md:px-16 px-6'>
        {["ready","to start"].map((item,index)=>(
            <h1 className = {`uppercase md:text-[12vw] text-[14vw] text-zinc-900 md:leading-[10vw] leading-[7vw] tracking-tighter font-semibold font-Founders_semibold`}>{item}</h1>
        ))}
        <div className="flex md:flex-row flex-col md:gap-[2vw] gap-[5vw] justify-center items-center">
        {["the", "project?"].map((item,index)=>( 
                    <h1 className = {`uppercase md:text-[12vw] text-[14vw] text-zinc-900 md:leading-[10vw] leading-[7vw] tracking-tighter font-semibold font-Founders_semibold `}>{item}</h1>
        ))}</div>
            
        <div  className="eyes md:absolute md:w-1/3 w-1/2 flex gap-[2vw] justify-center">
            <div className="whitecircle md:h-[12vw] md:w-[12vw] h-[20vw] w-[20vw] bg-zinc-100 rounded-full flex justify-center items-center">
                <div className="blackcircle md:h-[8vw] md:w-[8vw] h-[12vw] w-[12vw] bg-zinc-900 rounded-full relative">
                    <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-[2vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="smallwhite h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
                    </div>
                    
                </div>
            </div>
            <div className="whitecircle md:h-[12vw] md:w-[12vw] h-[20vw] w-[20vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="blackcircle md:h-[8vw] md:w-[8vw] h-[12vw] w-[12vw] bg-zinc-900 rounded-full relative">
                    <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-[2vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="smallwhite h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Ready
import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-24 md:px-16 px-6 bg-[#CDEA68] rounded-t-3xl text-black font-Neue_Montreal'>
        <h1 className="md:text-[3.7vw] text-[7vw] leading-none text-zinc-800 tracking-tight">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts,ex­plain com­plex ideas, and hire great peo­ple.</h1>

        <div className=" w-full md:flex md:flex-row flex flex-col gap-5 border-t-[1px] border-[#9bb04e] mt-20 pt-4 ">
            <div className="md:w-1/2 w-full">
                <h1 className='md:text-5xl text-3xl mb-6 '>Our approach:</h1>
                <button className='flex gap-10 items-center md:text-base text-sm px-5 py-4 bg-zinc-900 rounded-full text-zinc-200 uppercase '>Read More
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </button>
            </div>
            <div className="md:w-1/2 w-full md:h-[70vh] bg-red-500 rounded-xl overflow-hidden">
                <img className='bg-cover h-full w-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
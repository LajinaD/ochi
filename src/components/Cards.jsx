import React from 'react'

function Cards() {
  return (
    <div  className='w-full h-screen bg-zinc-100 flex md:flex-row flex-col gap-5 items-center md:px-16 px-6 border-t-[1px] md:border-zinc-300 border-zinc-500 md:py-0 py-10'>
        <div className="cardcontainer md:w-1/2 w-full h-[55vh]">
            <div className="card w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center relative">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-8 bottom-8 px-3 py-1 border-[1px] rounded-full border-[#CDEA68] text-[#CDEA68] font-Neue_Montreal'>@2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer md:w-1/2 w-full md:h-[55vh] h-[30vh] flex gap-5">
            <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex justify-center items-center relative">
            <img className='md:w-36 w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute md:left-8 bottom-8 px-3 py-1 border-[1px] border-zinc-400 rounded-full md:text-sm text-[8px] font-Neue_Montreal md:tracking-wide tracking-wider uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex justify-center items-center relative">
            <img className='md:w-24 md:h-24 w-12 h-12' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute md:left-8 bottom-8 px-3 py-1 border-[1px] border-zinc-400 rounded-full md:text-sm text-[8px] font-Neue_Montreal md:tracking-wide tracking-wider uppercase'>business bootcamp alumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
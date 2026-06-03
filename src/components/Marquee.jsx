import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 pb-20 md:pb-50 bg-[#004D43] rounded-tr-2xl rounded-tl-2xl '>
       <div className='border-t-2 border-b-2 flex overflow-hidden border-zinc-500 whitespace-nowrap'>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "ease", repeat: Infinity, duration:9}} className='hero-text text-[20vw] font-bold leading-none mt-[-3vw]  pr-10 -mb-1'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "ease", repeat: Infinity, duration:9}} className='hero-text text-[20vw] font-bold leading-none mt-[-3vw] pr-10 -mb-1'>WE ARE OCHI</motion.h1>
       </div> 
    </div>
  )
}

export default Marquee
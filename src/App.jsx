import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

const App = () => {

   const scrollRef = useLocomotiveScroll();
  return (
    <div className='text-white bg-zinc-800'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App
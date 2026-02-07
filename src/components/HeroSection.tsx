import React from 'react'
import Link from 'next/link'

import { Spotlight } from './ui/spotlight-new'
import { HoverBorderGradient } from './ui/hover-border-gradient'
const HeroSection = () => {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight />
      <div className='text-center w-full z-10 relative p-4'>
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
     Master the Music Art
      </h1>
      <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="m-4 flex justify-center text-center">
      <Link href={'/courses'}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>explore now</span>
      </HoverBorderGradient>
      </Link>
    </div></div>
    </div>
  )
}

export default HeroSection

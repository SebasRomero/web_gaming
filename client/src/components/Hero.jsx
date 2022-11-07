import React from 'react'
import {
  CloudIcon,
  ArrowPathIcon,
  BookOpenIcon,
} from '@heroicons/react/24/solid'

import bgImg from '../assets/gaming1.png'

const Hero = () => {
  return (
    <div name= "Home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl pt-5'>What would you like to play?</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Explore New Adventures!</h1>
          <p className='text-2xl'>Try to know about the whole gaming world!</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Start</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt="" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-3%] mx-1
         md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300
         rounded-xl text-center shadow-xl sm:'>
          <p className='pb-6 text-3xl font-bold'>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 '><BookOpenIcon className='h-6 text-indigo-600'/> Entertainment</p>
            <p className='flex px-4 py-2 '><ArrowPathIcon className='h-6 text-indigo-600'/>New Updates</p>
            <p className='flex px-4 py-2 '><CloudIcon className='h-6 text-indigo-600' /> Cloud Data</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
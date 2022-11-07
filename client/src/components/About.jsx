import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full my-40 '>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Who we are?</h2>
                <p className='text-3xl py-6 text-gray-500'>This website was 
                created with just one purpose, to help everyone who needs a 
                new game to play and have fun.
                "I know that I'm not the only one who don't know what to play,
                or, just, I want to know about games similar as my favorite
                one" </p>
            </div>
            <div className='grid md:grid-cols-2 my-10 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Free</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>150+</p>
                    <p className='text-gray-400 mt-2'>Games to explore</p>
                </div>
            </div>
            <p className='text-3xl text-gray-500 pt-9 text-center'>Everyone love 
            games, but, no everyone know what new game try, there are so many 
            generes to explore, MMORPG, RPG, MOBA, platforms, etc. Here we can 
            help you to explore this world and show you wich is better to you!</p>
        </div>
    </div>
  )
}

export default About
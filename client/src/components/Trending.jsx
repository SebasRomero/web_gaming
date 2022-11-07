import React from 'react'
import Games from '../components/Games'
import DofusImg from '../assets/dofus.png'
import TransformiceImg from '../assets/transformice.png'
import LolImg from '../assets/Lol.png'
import HearthStoneImg from '../assets/hearthstone.png'
import CodWImg from '../assets/codw.png'
import CsGoImg from '../assets/csgo.png'

const Trending = () => {
    return (
        <div name="Trending" className='w-full my-20 bg-zinc-200'>
            <div className='max-w-[1260px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-5xl pb-5 pt-4 font-bold'>Trending top games</h1>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 py-6 mr-5 text-center'>

                    <div className='border bg-zinc-100 pb-8 rounded-xl shadow-xl'>
                    <img className='h-[250px] w-full' src={DofusImg} alt="" />
                        <div><Games Id={328} /></div>
                    </div>

                    <div className='border bg-zinc-100 pb-8 rounded-xl shadow-xl'>
                    <img className='h-[250px] w-full' src={LolImg} alt="" />
                        <div><Games Id={286} /></div>
                    </div>

                    <div className='border pb-8 rounded-xl shadow-xl bg-zinc-100'>
                    <img className='h-[250px] w-full' src={TransformiceImg} alt="" />
                        <div><Games Id={179} /></div>
                    </div>

                    <div className='border pb-8 rounded-xl shadow-xl bg-zinc-100'>
                    <img className='h-[250px] w-full' src={CsGoImg} alt="" />
                        <div><Games Id={24} /></div>
                    </div>

                    <div className='border pb-8 rounded-xl shadow-xl bg-zinc-100'>
                    <img className='h-[250px] w-full' src={CodWImg} alt="" />
                        <div><Games Id={452} /></div>
                    </div>

                    <div className='border pb-8 rounded-xl shadow-xl bg-zinc-100 text-center'>
                    <img className='h-[250px] w-full' src={HearthStoneImg} alt="" />
                        <div><Games Id={220} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
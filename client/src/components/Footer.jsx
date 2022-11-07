import React from 'react'
import {
    FaInstagram,
    FaGithub,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div name="Footer" className='w-full mt-24 bg-slate-900 text-gray-300 py-1 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>API</li>
                        <li className='py-1'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Us</h6>
                    <ul>
                        <li className='py-1'>Careers</li>
                        <li className='py-1'>Donations</li>
                        <li className='py-1'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms and Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase '>Subscribe to receive new suggestions!</p>
                    <p className='py-1'>The best games to try and don't get bored!</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='youremail@domain.com'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2022</p>
                <div className='flex justify-between sm:w-[75px] pt-4 text-2xl'>
                    <FaGithub onClick={()=> {
                         window.location.href = "https://github.com/SebasRomero"
                    }}/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    )
}

export default Footer
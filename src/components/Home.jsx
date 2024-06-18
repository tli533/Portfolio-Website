import React from 'react'
import profile from "../assets/tim.JPG"
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='="h-full w-full pt-40 bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 8 years of experience building and desgining software.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next JS and GraphQL.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={30} className='m1-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={profile} alt='profile dp' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home
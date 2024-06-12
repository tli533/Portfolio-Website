import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
        <div>
            <h1 className='text-5xl font-main ml-2'> Test </h1>
        </div>
        
        <ul className='flex'>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>home</li>
            <li className=''>home</li>
        </ul>
    </div>
  )
}

export default NavBar
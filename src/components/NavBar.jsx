import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'experience'
        },
        {
            id: 6,
            link: 'contact'
        },
    ]
    

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
        <div>
            <h1 className='text-5xl font-main ml-2'> Test </h1>
        </div>
        
        <ul className='flex'>

            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                    {link}
                </li>
                
            ))}

            
        </ul>
    </div>
  )
}

export default NavBar
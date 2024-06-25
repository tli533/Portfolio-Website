import React from 'react'
import FF2 from "../assets/projects/FF2.png"
import FF1 from "../assets/projects/FF1 (1).png"
import FF3FEBRUARY from "../assets/projects/FF3FEBRUARY.png"
import XI from "../assets/projects/XI.png"
import XII from "../assets/projects/XII.png"


const Projects = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500` '>
            Projects
          </p>

          <p className='py-6'>
            checkout some work g
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-flow-cols-3 gap-8
        px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={FF2} alt="" className='rounded-md
            hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button>test</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
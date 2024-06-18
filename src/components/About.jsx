import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>


            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Aspernatur voluptatum eius adipisci vel nam dolorum officia totam beatae, eveniet sequi. 
                Voluptatum sed ad pariatur quam. Vitae commodi maxime numquam amet!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum eveniet magnam officia dolorem accusantium ullam, ut nam corrupti 
                quasi commodi est veritatis quia, dicta quaerat recusandae incidunt 
                repellendus magni, maiores dolor voluptates odio deleniti obcaecati numquam. 
                Quae similique at neque minus incidunt voluptatum, qui quasi distinctio 
                nostrum odio ratione cum!
            </p>
        </div>
    </div>
  )
}

export default About
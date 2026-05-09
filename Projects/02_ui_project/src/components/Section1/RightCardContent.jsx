import React from 'react'
import { ArrowRight } from 'lucide-react';

export const RightCardContent = (props) => {
  return (
    <div className=" absolute inset-0 h-full py-5 px-3 flex flex-col justify-between">

        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center' >{props.id+1}</h2>

        <div className="">

            <p className='text-lg leading-relaxed text-white mb-10'>{props.intro}</p>

            <div className="flex justify-between items-center">

                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full hover:opacity-90 transition-all duration-300'>{props.tag}</button>

                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full hover:rotate-[-45deg] transition-all duration-300'> <i className="ri-arrow-right-line"></i> </button>
            </div>
        </div>
    </div>
  )
}

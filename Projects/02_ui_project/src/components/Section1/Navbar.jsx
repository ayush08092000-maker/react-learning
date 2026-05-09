import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-start justify-between md:items-end gap-4 py-8 px-5 md:px-10 lg:px-18'>
      
         <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full hover:bg-zinc-700 transition-all duration-300'>Target Audience </h4>

         <button className='bg-gray-200 uppercase px-6 py-2 rounded-full tracking-widest text-sm hover:bg-gray-300 transition-all duration-300'> Digital Banking Platform </button>
         
    </div>
  )
}

export default Navbar
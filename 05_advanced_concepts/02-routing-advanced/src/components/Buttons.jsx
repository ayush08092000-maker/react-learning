import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {

    // Hook for programmatic navigation
    const navigate = useNavigate()

  return (
    <div className='py-2 px-5 flex items-center justify-center gap-20 text-black font-semibold mb-2' > 
        <button className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95     '
            onClick={()=>{
                navigate(-1)    // Go to previous history page
            }}
        >
            Back
        </button>

        <button className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' 
            onClick={()=> {
                navigate('/')   // Navigate to home page
            }}
        >
            Back to Home
        </button>

        <button className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' 
            onClick={()=>{
                navigate(+1)    // Move forward in browser history
            }}
        >
            Next
        </button>
    </div>
  )
}

export default Buttons
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText';
import Arrow from './Arrow';

const LeftContent = () => {
  return (
    <div className='flex flex-col justify-between h-full w-fullv lg:w-[40%] lg:w-2/5' >
        < HeroText />
        < Arrow />        
    </div>
  )
}

export default LeftContent
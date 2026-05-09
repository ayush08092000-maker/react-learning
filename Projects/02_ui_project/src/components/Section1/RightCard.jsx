import React from 'react'
import { RightCardContent } from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-[500px] shrink-0 overflow-hidden relative w-[240px] rounded-[40px]  hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>

        <img className='w-full h-full object-cover' src={props.img} alt="" />

        < RightCardContent id={props.id} color={props.color} intro={props.intro} tag={props.tag} />         
    </div>
  )
}

export default RightCard
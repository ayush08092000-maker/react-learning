import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' rounded-[40px] overflow-x-auto p-3 md:p-4  w-full lg:w-3/5 flex  gap-5'>

        {props.users.map(function(elem,idx){

            return < RightCard key={idx} id={idx} color={elem.color} intro={elem.intro} img={elem.img} tag={elem.tag}/>

        })}
    </div>
  )
}

export default RightContent
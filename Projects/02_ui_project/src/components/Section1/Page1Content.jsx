import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='min-h-screen pb-15 px-5 md:px-10 lg:px-18 flex flex-col lg:flex-row  items-start items-center gap-10 ' >
        < LeftContent />
        < RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
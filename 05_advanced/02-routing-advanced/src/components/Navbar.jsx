import React from 'react'

import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

    <div className=' bg-cyan-900 text-white flex items-center justify-between px-10 py-3'>

      <h2 className='text-3xl font-bold ' >
        AyushXploit
      </h2>


      <div className="text-xl  flex gap-10">

  {/* NavLink automatically adds active class when current URL matches */}
        <NavLink to="/" > Home </NavLink>         
        <NavLink to="/about"> About </NavLink>    
        <NavLink to='/courses'>Courses</NavLink>  
        <NavLink to='/products'>Products</NavLink>
        <NavLink to="/contact" > Contact </NavLink>

      </div>

    </div>

  )
}

export default Navbar
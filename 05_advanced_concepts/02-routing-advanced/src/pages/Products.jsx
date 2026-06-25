import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


const Products = () => {
  return (
    <div>

        <div className='flex justify-center gap-10 py-2 bg-emerald-950 text-amber-400 text-xl font-semibold'>

                {/* Nested navigation links */}
                <NavLink  to='men'>Men</NavLink>
                <NavLink  to='women'>Women</NavLink>
                <NavLink  to='kids'>Kids</NavLink>
        </div>
        
        {/* Render child route component here */}
        <Outlet />


    </div>
  )
}

export default Products
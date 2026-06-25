import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="nav">

        <h2 id='name'>AyushXploit</h2>


        {/* Navigation links without page reload */}
        <div className='links'>

          <Link to='/'>Home</Link>

          <Link to='/about'>About</Link>

          <Link to='/products'>Products</Link>

          <Link to='/contact'>Contact</Link>

        </div>

    </div>
  )
}

export default Navbar
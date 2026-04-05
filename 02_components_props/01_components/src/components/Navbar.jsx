import React from 'react'

const Navbar = () => {
    let nav = "I am Navbar Compont." /*str store in var "nav" */
    let b = "Name of Component always start from Capital latter"
    
  return (
    <div className='nav'>
        <h1>{nav}</h1>      {/*way to use var in js*/}
        <h3>{b}</h3>
    </div>
  )
}

export default Navbar   
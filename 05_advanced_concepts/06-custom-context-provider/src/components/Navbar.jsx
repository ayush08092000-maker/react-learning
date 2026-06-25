import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Navbar = () => {

  // Get user data from UserContext
  const {user} = useContext(UserContext)


  return (

    <div className="bg-blue-500 text-white p-5 rounded-xl flex justify-between">

      <h1 className="font-bold text-xl">
        Developer Dashboard
      </h1>

      {/* Display user name */}
      <p>
        Hello {user.name} 👋
      </p>

    </div>

  )
}

export default Navbar
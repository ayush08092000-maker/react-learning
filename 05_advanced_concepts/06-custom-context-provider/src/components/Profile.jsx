import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  // Get user data and function from UserContext
  const {user, changeUser} = useContext(UserContext);

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold">
        Profile
      </h2>

      {/* Display user information */}
      <p>
        Name : {user.name}
      </p>

      <p>
        Role : {user.role}
      </p>

      {/* Change user details */}
      <button
      onClick={changeUser}
      className="mt-5 bg-purple-500 text-white px-4 py-2 rounded 
      cursor-pointer active:scale-95 transition-transform flex items-center"
      >
        Change User
      </button>

    </div>

  )
}

export default Profile
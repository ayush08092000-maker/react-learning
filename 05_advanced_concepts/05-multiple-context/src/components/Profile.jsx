import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    // Get user data and update function from UserContext
    const {user, setUser} = useContext(UserContext);

    // Change user name
    const changeUser = ()=> {
        setUser(user === 'Ayush' ? 'Rahul' : 'Ayush');
    }

  return (

    <div className="bg-gray-400 p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4 ">
            Profile
        </h2>

         {/* Display current user */}
        <p >
            Name : {user}
        </p>

        {/* Update user name */}
        <button 
        onClick={changeUser}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded cursor-pointer active:scale-95"
        >
            Change Name
        </button>

    </div>

  )
}

export default Profile
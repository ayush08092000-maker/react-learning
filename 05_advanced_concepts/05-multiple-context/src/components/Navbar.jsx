import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import ThemeContext from '../context/ThemeContext'


const Navbar = () => {

    // Get user data from UserContext
    const {user} = useContext(UserContext)

    // Get theme data and update function from ThemeContext
    const {theme, setTheme} = useContext(ThemeContext)

    // Toggle between light and dark theme
    const handleToggleTheme = () => {

        setTheme(theme === "light" ? "dark" : "light")

    }


  return (

    <div className="bg-blue-500 text-white p-5 rounded-xl flex justify-between items-center ">

        <h2 className="text-xl font-bold">
            Shopping App
        </h2>


        <div className="flex gap-5 items-center">

            {/* Change application theme */}
            <button 
                onClick={handleToggleTheme}
                className="bg-green-400 text-black px-2 py-1 rounded cursor-pointer active:scale-95 "
            >

                {/* Show Dynamic theme button text */}
                {theme === "light" ? "Dark 🌙" : "Light ☀️"}

            </button>


            {/* Display current user */}
            <p>
              User : Hello {user} 👋
            </p>

        </div>


    </div>

  )
}

export default Navbar
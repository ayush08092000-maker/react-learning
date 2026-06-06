import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import Profile from './components/Profile'
import UserContext from './context/UserContext'
import CartContext from './context/CartContext'
import ThemeContext from './context/ThemeContext'


const App = () => {

  // Store user data
  const [user, setUser] = useState('Ayush');

  // Store cart item count
  const [cart, setCart] = useState(0);

  // Store current theme
  const [theme, setTheme] = useState('light');


  return (

    // Provide user data globally
    <UserContext.Provider value={{user, setUser}}>

      {/* Provide cart data globally */}
      <CartContext.Provider value={{cart, setCart}}>

         {/* Provide theme data globally */}
        <ThemeContext.Provider value={{theme, setTheme}}>

          {/* Change UI based on theme */}
          <div className={
            theme === "dark" 
            ? "min-h-screen bg-black text-white p-6"
            : "min-h-screen bg-gray-100 text-black p-6"
          }>

          <h1 className="text-3xl font-bold text-center mb-8">
            Context Shopping App
          </h1>

          <Navbar />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Product />
              <Cart />
              <Profile />
          </div>

        </div>


        </ThemeContext.Provider>
        
      </CartContext.Provider>

    </UserContext.Provider>

  )
}

export default App
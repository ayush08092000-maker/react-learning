import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {

    // Get cart value from CartContext
    const {cart} = useContext(CartContext);

  return (

    <div className="bg-pink-400 p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
            Cart
        </h2>

        {/* Display total cart items */}
        <p>
            Items : {cart}
        </p>

    </div>

  )
}

export default Cart
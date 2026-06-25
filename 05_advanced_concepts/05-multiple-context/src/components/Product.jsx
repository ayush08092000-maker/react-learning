import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Product = () => {

    // Get cart data and update function from CartContext
    const {cart, setCart} = useContext(CartContext);

    // Increase cart count
    const handleAddToCart = ()=> {
        setCart(prev => prev + 1);
    }

  return (

    <div className="bg-gray-400 p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
            Product
        </h2>

        <p className="mb-4">
            Laptop
        </p>

        {/* Add product to cart */}
        <button 
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer active:scale-95"
        >
            Add To Cart
        </button>

    </div>

  )
}

export default Product
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(cartData)

  useEffect(() => {
    setCartItems(cartData);
  }, [cartData])


  const haldlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearCart());
    alert('Order Placed')
    navigate("/");
  }
  

  const handleQuantity = (id, q) => {

    let qty = parseInt(q) > 1 ? parseInt(q) : 1;

    const cartTempItem = cartData.map(
      item => item.id === id ? {...item, qty} : item
    )
    
    setCartItems(cartTempItem)
  }



  return (
    <div className="max-w-6xl mx-auto mt-22 mb-3 px-5">
      <div className="bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-bold text-slate-800">
            Your Cart Items
          </h2>

          <p className="text-gray-600 font-medium">
            {cartItems.length} Item{cartItems.length !== 1 && "s"}
          </p>
        </div>

        {/* Cart Items */}
        {cartItems.length ? (
          <div className="mt-2 space-y-1">
            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border-b p-4 hover:shadow-md transition"
              >
                {/* --------------------Left------------------ */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded-md bg-gray-100 p-2"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>

                    <p className="text-gray-500">
                      {item.brand}
                    </p>
                  </div>
                </div>

                {/* ------------------Right------------------ */}
                <div className="text-right flex">

                  <div className="my-auto mx-5">
                    <input type="number" placeholder="Enter q"
                      onChange={(e) => handleQuantity(item.id, e.target.value)}
                      value={item.qty ? item.qty : 1}
                      className="w-50 text-lg px-4 py-1 rounded-md border border-gray-500"
                    />
                  </div>

                  <div>
                    <span className="block text-xl font-bold text-emerald-600">
                      ${(item.qty > 1 ? item.qty *item.price : item.price).toFixed(2)}
                    </span>

                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="mt-3 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
                    >
                      Remove
                    </button>               
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) 
        : (
            <div className="py-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-500">
                🛒 Your Cart is Empty
              </h3>
            </div>
          )}

        {/* -------------------Total-------------------- */}
        {cartItems.length > 0 && (
          <div className="mt-2 flex justify-end">
            <h3 className="text-2xl font-bold">
              Total: $
              {
                cartItems.reduce(
                  (sum, item) => item.qty ? sum + item.price*item.qty : sum + item.price, 0
                ).toFixed(2)
              }
            </h3>
          </div>
        )}

        {
          cartItems.length > 0 && 
            <button
              onClick={() => dispatch(haldlePlaceOrder())}
              className="rounded-md text-lg bg-slate-700 px-8 py-3 text-white hover:bg-slate-800 transition"
            >
              Place Order
            </button>  
        }

      </div>
    </div>
  );
};

export default CartItems;
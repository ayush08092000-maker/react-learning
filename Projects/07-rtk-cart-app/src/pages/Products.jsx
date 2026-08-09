import {useDispatch, useSelector} from 'react-redux' 
import { addItem,removeItem } from '../features/cart/cartSlice';
import { fetchProducts } from '../features/products/productsSlice';
import { useEffect } from 'react';


const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector((state) => state.product.items)
  // console.log(products);
  
  const cartItems = useSelector((state) => state.cart.items)
  console.log(cartItems);  



  return (
    <section className="max-w-8xl mx-auto px-5 py-5 mt-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">

        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-52 bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-h-full object-contain hover:scale-110 transition duration-300"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col flex-1">

                {/* Title */}
                <h2 className="text-lg font-semibold text-slate-800 line-clamp-2">
                  {product.title}
                </h2>

                {/* Brand */}
                <p className="text-gray-500 mt-1">
                  {product.brand}
                </p>

                {/* Price */}
                <p className="text-2xl font-bold text-emerald-600 mt-3">
                  ${product.price}
                </p>

                {/* Rating */}
                <p className="text-sm mb-1 text-gray-500 mt-1">
                  ⭐ {product.rating}
                </p>

                  {/* Button */}    
                {
                  cartItems.find((cartItem) => cartItem.id === product.id)
                  ? <button
                      onClick={() => dispatch(removeItem(product.id))}
                      className="mt-auto w-full rounded-lg bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition duration-300"
                    >
                      Remove from Cart
                    </button>
                  
                  : <button
                      onClick={() => dispatch(addItem(product))}
                      className="mt-auto w-full rounded-lg bg-slate-700 py-3 text-white font-semibold active:scale-98 hover:bg-slate-800 transition duration-300"
                    >
                      Add To Cart
                    </button>
                }
                
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
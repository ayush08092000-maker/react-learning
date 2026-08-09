import Header from './components/Header'
import ProductCard from './pages/Products'

import { clearCart } from './features/cart/cartSlice'
import { useDispatch } from 'react-redux'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from './pages/Products'
import CartItems from './components/CartItems'

const App = () => {

  const dispatch = useDispatch();


  return (
    <div className='bg-gray-50'>

      <BrowserRouter >

        <Header />

        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/cart' element={<CartItems />}></Route>
        </Routes>
      
      </BrowserRouter>

      {/* <button className="m-2 mx-6 rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-400"
        onClick={()=> dispatch(clearCart(1))}
      >
        Clear Cart
      </button> */}
      
    </div>
  )
}

export default App
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {

  const cartCount = useSelector((state) => state.cart.items)
  

  return (
    <Link 
      to="/cart"
      className="relative p-2 rounded-full hover:bg-slate-600 transition duration-300 hover:scale-110"
    >
      <ShoppingCart
        size={28}
        className="text-white"
      />

      <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold">
        {cartCount.length}
      </span>
    </Link>
  );
};

export default AddToCart;
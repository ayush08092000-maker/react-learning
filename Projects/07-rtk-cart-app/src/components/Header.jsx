import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 shadow-lg border-b border-slate-600 fixed top-0 left-0 w-full z-1">
      <div className="max-w-7xl mx-auto h-18  flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white">
          My<span className="text-orange-400">Shop</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-white text-xl font-medium">
            <li className="cursor-pointer hover:text-orange-400 transition duration-300">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* Cart */}
        <AddToCart />
      </div>
    </header>
  );
};

export default Header;
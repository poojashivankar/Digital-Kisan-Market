import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  return (
    
    <nav className="bg-oliveGreen text-white p-4">
       
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src="/logo.png" alt="Kisan Market Logo" className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold">Digital Kisan Market </span>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/add-product" className="hover:underline">Add Product</Link>
          <Link to="/my-products" className="hover:underline">My Products</Link>
        </div>
      </div>
      
     </nav>
  );
};

export default Navbar;

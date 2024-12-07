import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FarmerDashboard from "./pages/FarmerDashboard";
import AddProduct from "./pages/AddProduct";
import MyProducts from "./pages/MyProducts";
import Footer from "./components/Footer";
import Home from "./pages/Home/home";
import Register from "./pages/Registration";
import Adminmain from "./pages/Admin/adminmain";

import './assets/css/style.css';


import GoogleTranslatePage from "./components/GoogleTranslate";

function App() {
  return (
    
    <Router>
    
      <Navbar />
   
      <Routes>
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/admin-dashboard" element={<Adminmain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        
                
      </Routes>
    
      {/* <ImageSlider /> */}
      <Footer />
      <GoogleTranslatePage/>
    </Router>
  );
}

export default App;

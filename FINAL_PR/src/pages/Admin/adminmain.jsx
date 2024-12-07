import React from "react";
import AdminDashboard from "./AdminDashboard";
import Sidebar from "./Sidebar";


const Adminmain = () => {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <AdminDashboard />
  </div>
    
  );
};

export default Adminmain;
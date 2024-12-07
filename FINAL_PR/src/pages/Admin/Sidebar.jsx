import React from 'react';
import { FaHome, FaChartBar, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">Dashboard</h2>
      <nav className="flex flex-col mt-4">
        <a href="#" className="py-3 px-6 flex items-center hover:bg-gray-700">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#" className="py-3 px-6 flex items-center hover:bg-gray-700">
          <FaChartBar className="mr-2" /> BuyerList
        </a>
        <a href="#" className="py-3 px-6 flex items-center hover:bg-gray-700">
          <FaUser className="mr-2" /> FarmerList
        </a>
        <a href="#" className="py-3 px-6 flex items-center hover:bg-gray-700">
          <FaCog className="mr-2" /> Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

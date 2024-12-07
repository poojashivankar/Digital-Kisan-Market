import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Card 1</h2>
          <p>Some description here...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Card 2</h2>
          <p>Some description here...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Card 3</h2>
          <p>Some description here...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="text-white font-bold">Logo</div>
      <div className="flex items-center space-x-4">
        <div className="text-white">🔔</div>
        <div className="relative">
          <div className="text-white">👤</div>
          <span className="absolute top-0 right-0 block h-2 w-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

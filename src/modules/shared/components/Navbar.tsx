// src/modules/shared/components/NavBar.tsx

import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-lg font-semibold">Blossom</div>
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

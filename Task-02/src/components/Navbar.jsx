import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">

      {/* Logo / Heading */}
      <h1 className="text-2xl font-bold text-blue-600">CozMeet</h1>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 hover:text-blue-600">Login</button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Signup
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
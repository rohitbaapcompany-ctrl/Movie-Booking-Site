import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Image/Logo.png";
import LoginPopup from "./LoginPopup";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Movie", path: "/movies" },
    { name: "Theater", path: "/theater" },
  ];

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-transparent fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="QuickShow Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 mx-auto border p-3 backdrop-blur-md bg-black/10 rounded-full">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-colors text-white duration-300 ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "text-black hover:bg-blue-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <SearchBar />

        {/* Login Button */}
        <button
          onClick={() => setShowLogin(true)}
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <LoginPopup
          logo={Logo} // ✅ use imported logo
          onClose={() => setShowLogin(false)}
        />
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-32 text-center py-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "text-white hover:bg-blue-400 hover:text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setShowLogin(true);
              setMenuOpen(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

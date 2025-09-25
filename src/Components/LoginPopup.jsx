import { useState } from "react";
import { X } from "lucide-react";


const LoginPopup = ({ onClose, logo }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[900px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black z-30"
        >
          <X size={24} />
        </button>

        {/* Login Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-white flex flex-col justify-center px-10 transition-transform duration-700 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full bg-white flex flex-col justify-center px-10 transition-transform duration-700 ${
            isSignUp ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Overlay (Red Panel) */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-red-500 text-white flex flex-col items-center justify-center px-8 text-center transition-transform duration-700 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow"
          />
          <h2 className="text-3xl font-bold mb-4">
            {isSignUp ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="mb-6 text-sm text-white/90">
            {isSignUp
              ? "Sign up and join us for an amazing experience."
              : "Login to continue watching your favorite movies."}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="bg-white text-red-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, Handshake, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center space-x-3">
        {/* Left Icons */}
        <div
          className={`flex items-center space-x-3 transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10 pointer-events-none"
          }`}
        >
          {menuOpen && (
            <>
              <Link
                to="/"
                className="backdrop-blur-md bg-white/10 bg-white/10 hover:bg-red-600
                 p-3 rounded-full text-white shadow-lg transition hover:scale-110"
              >
                <Home size={22} />
              </Link>
              <Link
                to="/events"
                className="backdrop-blur-md bg-white/10 bg-white/10 hover:bg-red-600
                  p-3 rounded-full text-white shadow-lg transition hover:scale-110"
              >
                <Calendar size={22} />
              </Link>
            </>
          )}
        </div>

        {/* Floating Red Circle (Hamburger Button) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative bg-red-600 hover:bg-red-700 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 ${
            menuOpen ? "rotate-45" : ""
          }`}
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-95" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-5" : "translate-y-2"
            }`}
          ></span>
        </button>

        {/* Right Icons */}
        <div
          className={`flex items-center space-x-3 transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
        >
          {menuOpen && (
            <>
              <Link
                to="/sponsors"
                className="backdrop-blur-md bg-white/10 bg-white/10 hover:bg-red-600
                  p-3 rounded-full text-white shadow-lg transition hover:scale-110"
              >
                <Handshake size={22} />
              </Link>
              <Link
                to="/contact"
                className="backdrop-blur-md bg-white/10 bg-white/10 hover:bg-red-600
                  p-3 rounded-full text-white shadow-lg transition hover:scale-110"
              >
                <Phone size={22} />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import GlitchText from "./ui/GlitchText/GlitchText";

  const Navbar = () => {
    return(
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center mt-3 px-10 py-6 z-20">
        <h1 className="text-white text-2xl font-bold tracking-wide ml-8">
          <GlitchText>
            Inkrit 4.0
          </GlitchText>
        </h1>

        <ul className="flex text-base space-x-8 text-gray-400 mr-32">
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Home</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> About Us</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Events</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Sponsors</li>
        </ul>

      </nav>
    )
  }

  export default Navbar;
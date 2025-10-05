import React , {useState} from "react";
import GlitchText from "./ui/GlitchText/GlitchText";

  const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false);
    return(
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center mt-3 px-10 py-6 z-20">
        <h1 className="text-white text-2xl font-bold tracking-wide ml-8">
          <GlitchText>
            Inkrit 4.0
          </GlitchText>
        </h1>

        <ul className="hidden md:flex text-base space-x-8 text-gray-300 mr-32">
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Home</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> About Us</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Events</li>
          <li className="cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffffa0]"> Sponsors</li>
        </ul>

        <div
          className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer mr-8" 
          onClick={() => setMenuOpen(!menuOpen) }
          >

            <span 
              className={`block h-[2px] bg-white transition-transform duration-300 ${ menuOpen ? "rotate-45 translate-y-[9px]" : "" }`}>
            </span>

            <span
              className={`block h-[2px] bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></span>

        </div>

        {menuOpen && (
          <ul className="absolute top-[75px] right-10 bg-black/80 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center space-y-4 text-gray-300 shadow-lg border text-gray-300 border-gray-700 md:hidden">
            <li className="cursor-pointer hover:text-white transition duration-300">Home</li>
            <li className="cursor-pointer hover:text-white transition duration-300">About Us</li>
            <li className="cursor-pointer hover:text-white transition duration-300">Events</li>
            <li className="cursor-pointer hover:text-white transition duration-300">Sponsors</li>
          </ul>
        )}
        

      </nav>
    )
  }

  export default Navbar;
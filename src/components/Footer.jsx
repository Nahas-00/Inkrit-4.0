const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 flex flex-col md:flex-row items-center justify-between px-8 border-t border-red-600">
      
      {/* Developed by */}
      <p className="flex items-center text-sm md:text-sm font-orbitron text-red-400 gap-2">
        Developed with 
        <span className="text-red-600 animate-pulse text-lg">❤</span> 
        by <span className="text-white">Nahas</span>
      </p>

      {/* Rights */}
      <p className="text-sm md:text-base font-exo2 text-gray-300 mt-2 md:mt-0">
        &copy; 2025 All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;

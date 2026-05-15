import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-black text-white p-5 sticky top-0">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Muhammed Sinan
        </h1>

       
        <button
          className="md:hidden text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>

        
        <ul className="hidden md:flex gap-10 text-lg">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

      
      {showMenu && (
        <ul className="flex flex-col gap-4 mt-5 md:hidden text-center bg-gray-900 p-5 rounded-lg">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;
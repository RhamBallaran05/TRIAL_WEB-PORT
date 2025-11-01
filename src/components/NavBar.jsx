import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Close menu after clicking any nav link (on mobile)
    setMenuOpen(false);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-xl font-bold text-white"
        >
          Ramon<span className="text-blue-500">Dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li>
            <a
              href="#home"
              onClick={handleLinkClick}
              className="hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden cursor-pointer"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-8 text-gray-300 font-medium md:hidden">
            <li>
              <a
                href="#home"
                onClick={handleLinkClick}
                className="hover:text-blue-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="hover:text-blue-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
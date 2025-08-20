import React, { useState } from 'react';
import profileImg from '../assets/Navbar/profile.jpg';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // optional icons for menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItemsLeft = ['Home', 'About', 'Resume'];
  const menuItemsRight = ['Clients', 'Certificates', 'Contact'];

  const renderLink = (item) => (
    <Link
      key={item}
      to={item.toLowerCase()}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="text-blue-800 font-semibold"
      className="cursor-pointer text-xl text-black hover:text-blue-800 transition duration-300"
      onClick={() => setMobileMenuOpen(false)} // Close menu on click
    >
      {item}
    </Link>
  );

  return (
    <nav className="sticky top-0 w-full border-b border-gray-200 bg-white shadow-md z-50">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 py-2 flex items-center justify-between h-20 md:h-24">

        {/* Hamburger Menu - Visible on Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden transition-all duration-300 hover:text- md:flex items-center gap-4">
          {menuItemsLeft.map(renderLink)}
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-20 h-20 sm:w-16 sm:h-20 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-fit"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex transition-all duration-300 hover:text-lg items-center gap-4">
          {menuItemsRight.map(renderLink)}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-md">
          {[...menuItemsLeft, ...menuItemsRight].map(renderLink)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

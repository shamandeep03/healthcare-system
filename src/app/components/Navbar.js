import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <h1 className="text-white font-bold text-2xl cursor-pointer">
              Healthcare System
            </h1>
          </Link>
        </div>

        {/* Menu Button (Hamburger Icon) */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex space-x-6 lg:items-center hidden text-white h-full`}
        >
          <Link href={`/dashboard/${role}`} className="hover:text-gray-300 px-4 py-2">
            Dashboard
          </Link>
          <Link href="/logout" className="hover:text-gray-300 px-4 py-2">
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-700 text-white py-4 pt-10 fixed top-0 right-0 w-full h-screen max-w-96">
          <Link
            href={`/dashboard/${role}`}
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            href={`/${role}/profile`}
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

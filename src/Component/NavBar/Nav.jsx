import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import './Nav.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle = ({ isActive }) =>
    isActive ? 'text-amber-300 font-semibold' : 'hover:text-amber-200';

  return (
    <nav className='bg-sky-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo or Brand */}
          <div className='flex-shrink-0 text-2xl font-bold text-amber-200'>
            MyStore
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6 text-lg'>
            <NavLink to='/home' className={navLinkStyle}>Home</NavLink>
            <NavLink to='/product' className={navLinkStyle}>Product</NavLink>
            <NavLink to='/blog' className={navLinkStyle}>Blog</NavLink>
            <NavLink to='/contact' className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* Cart Icon */}
          <div className='text-2xl'>
            <NavLink to='/cart'>
              <IoCartOutline className="hover:text-amber-300" />
            </NavLink>
          </div>

          {/* Hamburger Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2'>
          <NavLink to='/home' className={navLinkStyle} onClick={toggleMenu}>Home</NavLink>
          <NavLink to='/product' className={navLinkStyle} onClick={toggleMenu}>Product</NavLink>
          <NavLink to='/blog' className={navLinkStyle} onClick={toggleMenu}>Blog</NavLink>
          <NavLink to='/contact' className={navLinkStyle} onClick={toggleMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

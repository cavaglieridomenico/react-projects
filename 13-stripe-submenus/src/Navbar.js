import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav' />
          <button className='btn toggle-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'></ul>
        <button className='btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;

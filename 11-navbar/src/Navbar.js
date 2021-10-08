import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <>
      <div className='nav-header'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='links-container'></div>
      <ul className='social-icons'></ul>
    </>
  );
};

export default Navbar;

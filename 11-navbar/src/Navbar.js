import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(links);
  return (
    <>
      <div className='nav-header'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='links-container'>
        {
          <ul className='links'>
            {navLinks.map(el => {
              return (
                <li key={el.id}>
                  <a href={el.url}>{el.text}</a>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </>
  );
};

export default Navbar;

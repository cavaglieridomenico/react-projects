import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(links);
  const [navSocial, setNavSocial] = useState(social);

  const linKsContainer = useRef(null);

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linKsContainer}>
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
      <ul className='social-icons'>
        {navSocial.map(el => {
          return (
            <li key={el.id}>
              <a href={el.url}>{el.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const linKsContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (mobileMenu) {
      linKsContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linKsContainerRef.current.style.height = '0px';
    }
  }, [mobileMenu]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle'>
            <FaBars onClick={() => setMobileMenu(!mobileMenu)} />
          </button>
        </div>
        <div className='links-container' ref={linKsContainerRef}>
          {
            <ul className='links' ref={linksRef}>
              {links.map(el => {
                const { id, url, text } = el;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          }
        </div>
        <ul className='social-icons'>
          {social.map(el => {
            const { id, url, icon } = el;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

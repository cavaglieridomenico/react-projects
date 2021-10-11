import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  return (
    <aside className='sidebar show show-sidebar'>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>{}</ul>
      <ul className='social-icons'>{}</ul>
    </aside>
  );
};

export default Sidebar;

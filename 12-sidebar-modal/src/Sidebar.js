import React, { useContext } from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { AppContext } from './context';

const Sidebar = () => {
  const { showSidebar, handleShowSidebar } = useContext(AppContext);
  return (
    <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={handleShowSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(link => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map(socialLink => {
          const { id, url, icon } = socialLink;
          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isSidebar && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <div className='sidebar-links'>
            {sublinks.map((sublink, index) => {
              const { page, links } = sublink;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map((link, index) => {
                      const { label, icon, url } = link;
                      return (
                        <a href={url} key={index}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

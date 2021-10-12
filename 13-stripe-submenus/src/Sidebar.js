import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebar } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isSidebar && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn'>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <div className='sidebar-links'>
            {sublinks.map(sublink => {
              const { page, links } = sublink;
              return (
                <article key={new Date().getTime().toString()}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map(link => {
                      const { label, icon, url } = link;
                      return (
                        <a href={url} key={new Date().getTime().toString()}>
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

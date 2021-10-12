import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
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

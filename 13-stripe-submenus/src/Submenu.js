import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSidebar, sublinks } = useGlobalContext();
  const [submenuIndex, setSubmenuIndex] = useState(2);
  const [submenuItems, setSubmenuItems] = useState(sublinks[submenuIndex]);
  const [submenuCol, setSubmenuCol] = useState(submenuItems.links.length);
  const { page, links } = submenuItems;
  return (
    <aside className={`submenu ${!isSidebar && 'show'}`}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${submenuCol}`}>
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
      </section>
    </aside>
  );
};

export default Submenu;

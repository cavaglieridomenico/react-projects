import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSidebar,
    submenuItems,
    submenuCol,
    isSubmenu,
    handleMouseEnterSubmenu,
    handleMouseLeave,
    linkElement,
  } = useGlobalContext();
  const { page, links } = submenuItems;
  const [submenuPosition, setSubmenuPosition] = useState(0);
  useEffect(() => {
    if (isSubmenu) {
      const position = linkElement.getBoundingClientRect();
      setSubmenuPosition(position.right - position.width / 2);
    }
  }, [isSubmenu]);

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

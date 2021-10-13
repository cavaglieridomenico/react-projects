import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSidebar, sublinks } = useGlobalContext();
  const [submenuIndex, setSubmenuIndex] = useState(2);
  const [submenuItems, setSubmenuItems] = useState(sublinks[submenuIndex]);
  const [submenuCol, setSubmenuCol] = useState(submenuItems.links.length);
  return (
    <aside className='submenu'>
      <section>
        <h4></h4>
        <div className='submenu-center'>
          <a href=''></a>
        </div>
      </section>
    </aside>
  );
};

export default Submenu;

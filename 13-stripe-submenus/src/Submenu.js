import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSidebar, sublinks } = useGlobalContext();
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

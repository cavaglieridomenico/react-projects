import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center'>
          {menuItems.map(el => {
            return <Menu key={el.id} {...el} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

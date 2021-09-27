import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const categories = () => {
    const uniqueCategory = ['all', ...new Set(items.map(el => el.category))];
    return uniqueCategory;
  };

  const filterItems = category => {
    setMenuItems(prevItem => {
      if (category === 'all') {
        return items;
      }
      const newItems = items.filter(el => el.category === category);
      return newItems;
    });
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          {categories().map(el => (
            <Categories key={el} category={el} filterItems={filterItems} />
          ))}
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

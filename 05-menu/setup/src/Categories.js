import React from 'react';

const Categories = ({ category, filterItems }) => {
  return (
    <button className='filter-btn' onClick={() => filterItems(category)}>
      {category}
    </button>
  );
};

export default Categories;

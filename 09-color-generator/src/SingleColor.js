import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, type, hex }) => {
  const hexValue = `#${hex}`;

  return (
    <article
      className={`color ${type === 'shade' ? 'color-light' : false}`}
      style={{ backgroundColor: `${hexValue}` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight} %</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

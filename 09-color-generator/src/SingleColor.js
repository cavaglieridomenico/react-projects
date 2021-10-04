import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, type, hex }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hex}`;

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 3000);
    return () => clearInterval(timeout);
  }, [alert]);

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

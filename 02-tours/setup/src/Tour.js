import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {!readMore ? `${info.slice(0, 200)}...` : info}
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? 'read more' : 'show less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

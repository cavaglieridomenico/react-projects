import React from 'react';
import Tour from './Tour';
const Tours = ({ toursData, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
      </div>
      {toursData.map(el => {
        return <Tour key={el.id} {...el} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;

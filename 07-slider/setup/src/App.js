import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const startNumberOfList = 0;
  const lastNumberOfList = data.length - 1;
  const [currentIndex, setCurrentIndex] = useState(startNumberOfList);

  const checkIndex = number => {
    if (number > lastNumberOfList) {
      return (number = startNumberOfList);
    }
    if (number < startNumberOfList) {
      return (number = lastNumberOfList);
    }
    return number;
  };

  useEffect(() => {
    setCurrentIndex(checkIndex(currentIndex));
  }, [currentIndex]);

  useEffect(() => {
    const slideShow = setTimeout(() => setCurrentIndex(currentIndex + 1), 3000);
    return () => clearInterval(slideShow);
  }, [currentIndex]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((el, index) => {
          const { id, image, name, title, quote } = el;
          const activeClass = () => {
            if (index === currentIndex) {
              return 'activeSlide';
            }
            if (
              index === currentIndex - 1 ||
              (index === lastNumberOfList && currentIndex === startNumberOfList)
            ) {
              return 'lastSlide';
            }
            return 'nextSlide';
          };
          return (
            <article className={activeClass()} key={index}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button
          className='prev'
          onClick={() => {
            setCurrentIndex(prevValue => prevValue - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => {
            setCurrentIndex(prevValue => prevValue + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

import React, { useState } from 'react';
import data from './data';
function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState([]);
  
  
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          id='amount'
          value={inputNumber}
          onChange={event => {
            setInputNumber(event.target.value);
          }}
        />
        <button
          className='btn'
          type='submit'
        >
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

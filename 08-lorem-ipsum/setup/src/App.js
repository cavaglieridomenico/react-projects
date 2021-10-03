import React, { useState } from 'react';
import data from './data';
function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = event => {
    event.preventDefault();
    let numberOfParagraphs = parseInt(inputNumber);
    if (numberOfParagraphs < 0) {
      numberOfParagraphs = 0;
    }
    setText(data.slice(0, numberOfParagraphs));
  };
  
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
          onClick={event => handleSubmit(event)}
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

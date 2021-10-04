import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [inputText, setInputText] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const getColor = value => {
    try {
      const colors = new Values(value).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setError(false);
    getColor(inputText);
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputText}
            onChange={event => setInputText(event.target.value)}
            className={`${error ? 'error' : 'null'}`}
          />
          <button className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((el, index) => {
          return <SingleColor key={index} {...el} hex={el.hex} />;
        })}
      </section>
    </>
  );
}

export default App;

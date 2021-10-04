import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
function App() {
  const [inputText, setInputText] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

import Values from 'values.js'

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
          />
          <button className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
      </section>
    </>
  );
}

export default App

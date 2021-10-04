import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
function App() {

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

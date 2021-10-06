import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState(getLocalStorage());
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={inputText}
            onChange={event => setInputText(event.target.value)}
          />
          <button type='submit' className='submit-btn'>
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <div className='grocery-list'>
            {list.map(item => {
              return (
                <List
                  key={item.id.toString()}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default App;

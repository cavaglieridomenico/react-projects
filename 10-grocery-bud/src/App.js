import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditItem, setIsEditItem] = useState(false);
  const [editItemId, setEditItemId] = useState('');
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: '',
  });
  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
  };

  const removeItem = id => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter(el => el.id !== id));
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} {...list} />}
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

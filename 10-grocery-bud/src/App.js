import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

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

  useEffect(() => {
    window.localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputText) {
      showAlert(true, 'danger', 'please enter value');
    } else if (inputText && isEditItem) {
      showAlert(true, 'success', 'Value changed');
      setList(
        list.map(item => {
          if (item.id === editItemId) {
            item.text = inputText;
          }
          return item;
        })
      );
      setIsEditItem(false);
      setInputText('');
      setEditItemId(null);
    } else {
      showAlert(true, 'success', 'item added to the list');
      const item = { id: new Date().getTime().toString(), text: inputText };
      setList([...list, item]);
      setInputText('');
    }
  };

  const editItem = id => {
    setInputText(list.find(el => el.id === id).text);
    setEditItemId(id);
    setIsEditItem(true);
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
            {isEditItem ? 'edit' : 'submit'}
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
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </div>
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

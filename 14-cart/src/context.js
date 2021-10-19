import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: [],
  quantity: 0,
  total: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchItems = async () => {
    const fetchResponse = await fetch(url);
    try {
      if (fetchResponse.ok) {
        dispatch({ type: 'LOADING', payload: true });
        const fetchData = await fetchResponse.json();
        dispatch({ type: 'DISPLAY_CART', payload: fetchData });
      } else {
        throw new Error('Data not available at the moment...');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    dispatch({ type: 'GET_QUANTITY' });
  }, [state.cart]);

  const handleToggle = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  const handleIncrease = id => {
    dispatch({ type: 'INCREASE_ITEM', payload: id });
  };

  const handleDecrease = id => {
    dispatch({ type: 'DECREASE_ITEM', payload: id });
  };

  const handleRemoveItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleRemoveItems = () => {
    dispatch({ type: 'REMOVE_ITEMS' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleToggle,
        handleIncrease,
        handleDecrease,
        handleRemoveItem,
        handleRemoveItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const defaultState = {
  cart: [],
  total: (0).toFixed(2),
};

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchItems = async () => {
    const fetchResponse = await fetch(url);
    try {
      if (fetchResponse.ok) {
        const fetchData = await fetchResponse.json();
        dispatch({ type: 'ADD_CART', payload: fetchData });
        setLoading(false);
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

  const handleIncrease = (id, state) => {
    const newCart = state.cart.map(el => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
    dispatch({ type: 'INCREASE', payload: newCart });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        loading,
        handleIncrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

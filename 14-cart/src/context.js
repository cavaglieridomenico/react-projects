import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchItems = async () => {
    const fetchResponse = await fetch(url);
    try {
      if (fetchResponse.ok) {
        const fetchData = await fetchResponse.json();
        setCart(fetchData);
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

  return (
    <AppContext.Provider
      value={{
        cart,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

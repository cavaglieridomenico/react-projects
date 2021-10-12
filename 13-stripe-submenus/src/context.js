import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const openSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <AppContext.Provider value={{ sublinks, isSidebar, openSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

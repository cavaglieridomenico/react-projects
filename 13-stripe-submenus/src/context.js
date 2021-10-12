import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };
  return (
    <AppContext.Provider
      value={{ sublinks, isSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

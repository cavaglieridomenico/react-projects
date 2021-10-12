import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <AppContext.Provider
      value={{ showModal, handleShowModal, showSidebar, handleShowSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContex = () => {
  return useContext(AppContext);
};

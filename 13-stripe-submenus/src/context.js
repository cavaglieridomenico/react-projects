import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [submenuItems, setSubmenuItems] = useState(sublinks[0]);
  const [submenuCol, setSubmenuCol] = useState(0);
  const [linkElement, setLinkElement] = useState({});
  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };
  const handleMouseEnterLinks = (event, index) => {
    setLinkElement(event.target);
    setSubmenuItems(sublinks[index]);
    setSubmenuCol(sublinks[index].links.length);
    setIsSubmenu(true);
  };
  const handleMouseLeave = () => {
    setIsSubmenu(false);
  };
  const handleMouseEnterSubmenu = () => {
    setIsSubmenu(true);
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

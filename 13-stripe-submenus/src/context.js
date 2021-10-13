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
    setSubmenuCol(prevVale => {
      const numberOfColumn = sublinks[index].links.length;
      return numberOfColumn > 4 ? 3 : numberOfColumn;
    });
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
      value={{
        sublinks,
        isSidebar,
        openSidebar,
        closeSidebar,
        handleMouseEnterLinks,
        handleMouseLeave,
        submenuItems,
        submenuCol,
        isSubmenu,
        handleMouseEnterSubmenu,
        linkElement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

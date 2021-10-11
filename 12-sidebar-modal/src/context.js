import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = () => {
  return <AppContext.Provider></AppContext.Provider>;
};

export { AppContext, AppProvider };

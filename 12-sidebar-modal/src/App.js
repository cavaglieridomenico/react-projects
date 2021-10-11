import React, { useState, useContext } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import { GeneralContext } from './context';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <GeneralContext.Provider
      value={{ showModal, handleShowModal, showSidebar, handleShowSidebar }}
    >
      <Home />
      <Modal />
      <Sidebar />
    </GeneralContext.Provider>
  );
}

export default App;

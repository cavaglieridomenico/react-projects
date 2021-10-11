import React, { useState, useContext } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    console.log('Ho accesso a showModal');
    setShowModal(!showModal);
  };
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;

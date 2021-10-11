import React, { useState, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { GeneralContext } from './context';

const Home = () => {
  const { handleShowModal, handleShowSidebar } = useContext(GeneralContext);
  return (
    <main>
      <button className='sidebar-toggle' onClick={handleShowSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={handleShowModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;

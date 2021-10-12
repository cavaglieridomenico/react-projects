import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContex } from './context';

const Home = () => {
  const { handleShowModal, handleShowSidebar } = useGlobalContex();
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

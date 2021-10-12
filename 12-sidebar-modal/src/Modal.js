import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContex } from './context';

const Modal = () => {
  const { showModal, handleShowModal } = useGlobalContex();
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={handleShowModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

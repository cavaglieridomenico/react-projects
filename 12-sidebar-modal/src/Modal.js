import React, { useState, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

const Modal = () => {
  const { showModal, handleShowModal } = useContext(AppContext);
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

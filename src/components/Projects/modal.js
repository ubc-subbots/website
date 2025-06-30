import React from 'react';
import './modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ header, onClose, children }) {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} className="close-icon"/>
        </button>
        <h2>{header}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

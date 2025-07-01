import React, { useEffect } from 'react';
import './modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ header, imageSrc, subtitle, blurb, onClose }) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} className='close-icon' />
        </button>
        <div className='modal-header'>{header}</div>
        {imageSrc && (
          <div className='modal-image-container'>
            <img src={imageSrc} alt={header} />
          </div>
        )}
        {subtitle && <div className='modal-subtitle'>{subtitle}</div>}
        {blurb && (
          <div
            className='modal-blurb'
            dangerouslySetInnerHTML={{ __html: blurb }}
          ></div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function ImageCarousel({ images, width = '400px' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          border: '10px solid #444',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width, height: 'auto', display: 'block' }}
        />
        <button
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 0.8rem',
            cursor: 'pointer',
            fontSize: '1.2rem',
            borderRadius: '4px',
          }}
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 0.8rem',
            cursor: 'pointer',
            fontSize: '1.2rem',
            borderRadius: '4px',
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}




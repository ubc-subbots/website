import React, { useState, useEffect } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        aspectRatio: '500 / 350',
        margin: '0 auto',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Current Image */}
      <img
        src={images[currentIndex]}
        alt={`Project image ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        style={{
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        &#8249;
      </button>

      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        &#8250;
      </button>

      {/* Dot Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              border: 'none',
              background:
                index === currentIndex ? '#fff' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}

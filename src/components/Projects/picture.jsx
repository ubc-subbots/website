import React, { useState, useEffect } from 'react';

export default function ImageCarousel({
  images,
  width = '400px',
  autoPlayInterval = 3000,
  pauseOnHover = true,
  transitionDuration = 500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

  // Auto-sliding feature
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const intervalId = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, isPlaying, autoPlayInterval, images.length]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPlaying(true);
    }
  };

  // Parse width to get numeric value for calculations
  const numericWidth = parseInt(width);

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          border: '10px solid #444',
          borderRadius: '12px',
          overflow: 'hidden',
          width: width,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image container that slides */}
        <div
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: `${100 / images.length}%`,
                height: 'auto',
                display: 'block',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Navigation buttons */}
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
            zIndex: 10,
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.background = 'rgba(0,0,0,0.8)')}
          onMouseLeave={(e) => (e.target.style.background = 'rgba(0,0,0,0.6)')}
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
            zIndex: 10,
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.background = 'rgba(0,0,0,0.8)')}
          onMouseLeave={(e) => (e.target.style.background = 'rgba(0,0,0,0.6)')}
        >
          ▶
        </button>

        {/* Dot indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background:
                  index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background 0.3s ease, transform 0.2s ease',
                transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

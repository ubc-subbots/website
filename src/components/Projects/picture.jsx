import React, { useState, useEffect, useRef } from 'react';

export default function ImageCarousel({
  images,
  width = '525px',
  height = 'auto',
  autoPlayInterval = 3000,
  pauseOnHover = true,
  transitionDuration = 500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

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

  // Touch handling for swipe gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
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

  // Calculate responsive dimensions
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;

  // Calculate responsive border size (min 3px, max 10px)
  const borderSize = Math.max(3, Math.min(10, Math.floor(screenWidth / 60)));

  // Calculate responsive border radius
  const borderRadius = Math.max(4, Math.min(12, borderSize + 2));

  // Calculate responsive padding
  const sidePadding = Math.max(8, Math.min(20, Math.floor(screenWidth / 20)));

  return (
    <div
      style={{
        width: '100%',
        padding: `0 ${sidePadding}px`,
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth:
            typeof width === 'string' && width.includes('px') ? width : '525px',
          margin: '0 auto',
          border: `${borderSize}px solid #444`,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          height: height,
          boxSizing: 'border-box',
          touchAction: 'pan-y',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                height: height === 'auto' ? 'auto' : '100%',
                display: 'block',
                flexShrink: 0,
                objectFit: 'cover',
                userSelect: 'none', // Prevent image selection
                pointerEvents: 'none', // Prevent image drag
              }}
              draggable={false}
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

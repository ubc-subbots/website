import { useState, useEffect } from 'react';
import './ImageGallery.css';

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    let progressInterval;
    let slideInterval;

    const startProgress = () => {
      setProgress(0);

      // Update progress every 40ms (25fps) for smooth animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (4000 / 40); // 100% over 4000ms
          if (newProgress >= 100) {
            return 100;
          }
          return newProgress;
        });
      }, 40);

      // Change slide after 4 seconds
      slideInterval = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    };

    startProgress();

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      if (slideInterval) clearTimeout(slideInterval);
    };
  }, [currentIndex, isPlaying, images.length]);

  const goToSlide = (index) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setProgress(0);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setProgress(0);
    setIsPlaying(!isPlaying);
  };

  if (!images || images.length === 0) {
    return <div className='gallery-placeholder'>No images available</div>;
  }

  return (
    <div className='image-gallery'>
      <div className='gallery-header'>
        <h2 className='gallery-title'>Project Gallery</h2>
      </div>

      <div className='gallery-container'>
        <button
          className='gallery-nav gallery-nav-left'
          onClick={goToPrevious}
          aria-label='Previous image'
        >
          &#8249;
        </button>

        <div className='gallery-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}${images[currentIndex].src}`}
            alt={images[currentIndex].alt}
            className='gallery-image'
          />
          <div className='gallery-caption'>{images[currentIndex].caption}</div>
        </div>

        <button
          className='gallery-nav gallery-nav-right'
          onClick={goToNext}
          aria-label='Next image'
        >
          &#8250;
        </button>
      </div>

      <div className='gallery-controls'>
        <button
          className='gallery-play-pause'
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      <div className='gallery-progress'>
        <div className='progress-bar'>
          <div
            className='progress-fill'
            style={{ width: `${isPlaying ? progress : 0}%` }}
          />
        </div>
        <div className='gallery-dots'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import './ImageGallery.css';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <h2 className='gallery-title'>RoboSub 2025 Competition</h2>
      </div>

      <div className='gallery-container'>
        <div
          className='gallery-nav gallery-nav-left'
          onClick={goToPrevious}
          aria-label='Previous image'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/></svg>
        </div>

        <div className='gallery-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}${images[currentIndex].src}`}
            alt={images[currentIndex].alt}
            className='gallery-image'
          />
          <div className='gallery-caption'>{images[currentIndex].caption}</div>
        </div>

        <div
          className='gallery-nav gallery-nav-right'
          onClick={goToNext}
          aria-label='Next image'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg>
        </div>
      </div>

      <div className='gallery-controls'>
        <button
          className='gallery-play-pause'
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
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

import { useEffect, useRef, useState } from 'react';
import './sponsorScroll.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const images = [
  //`${process.env.PUBLIC_URL}/images/sponsors/shell.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/4imprint.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/altium.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/apsc.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/ece.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/forestry.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/ieee.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/matlab2.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/phidgets.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/sname.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/spaenaur.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/subc.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/ubcmecheng.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/waltergage.png`,
  //`${process.env.PUBLIC_URL}/images/sponsors/solidworks.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/onshape.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/igen.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/pressing_media.png`,
];

export default function SponsorScroll() {
  const [isDragging, setIsDragging] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    setShouldAnimate(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Wait before resuming auto-scroll to allow momentum to finish
    timeoutRef.current = setTimeout(() => {
      setShouldAnimate(true);
    }, 3000);
  };

  const handleClick = () => {
    if (!isDragging) {
      navigate('/sponsorship');
    }
  };


  return (
    <div className='sponsor-section'>
      <div className='scroll-title'>
        <span className='scroll-title2'>OUR VALUED SPONSORS</span>
        <span className='scroll-subtitle'>
          Supporting innovation, technology, and student-led engineering
          excellence.
        </span>
      </div>
      <div className='scroll-wrapper'>
        <motion.div
          className='scroll-track'
          // Must be full static width of container including overflow (2190)
          // Using current.scrollwidth with a reference only returns the width of the visible container, likely due to the framer plugin
          animate={shouldAnimate && !isDragging ? { x: [0, -2190] } : {}}
          transition={{
            repeat: Infinity,
            duration: 7, //17
            ease: 'linear',
          }}
          drag='x'
          dragConstraints={{ left: -2190, right: 0 }}
          dragMomentum={true}
          dragElastic={0.2}
          dragTransition={{ 
            bounceStiffness: 400, 
            bounceDamping: 25,
            power: 0.2,
            timeConstant: 200
          }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onClick={handleClick}
          style={{ 
            cursor: 'grab',
            WebkitOverflowScrolling: 'touch'
          }}
          whileDrag={{ cursor: 'grabbing' }}
        >
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              className='scroll-img'
              alt={`Sponsor ${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

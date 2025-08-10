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
  const [dragX, setDragX] = useState(0);
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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Wait 1 second before resuming auto-scroll
    timeoutRef.current = setTimeout(() => {
      setDragX(0);
    }, 1000);
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
          animate={isDragging ? {} : { x: ['-142%', '-10.5%'] }}
          transition={{
            repeat: Infinity,
            duration: 17,
            ease: 'linear',
          }}
          drag="x"
          dragConstraints={{ left: -1000, right: 100 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onClick={handleClick}
          style={{ cursor: 'grab' }}
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

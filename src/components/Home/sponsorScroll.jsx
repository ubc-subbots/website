import { useEffect } from 'react';
import './sponsorScroll.css';
import { motion } from 'framer-motion';

const images = [
  '/images/sponsors/shell.png',
  '/images/sponsors/4imprint.png',
  '/images/sponsors/altium.png',
  '/images/sponsors/apsc.png',
  '/images/sponsors/ece.png',
  '/images/sponsors/forestry.png',
  '/images/sponsors/ieee.png',
  '/images/sponsors/matlab2.png',
  '/images/sponsors/phidgets.png',
  '/images/sponsors/sname.png',
  '/images/sponsors/spaenaur.png',
  '/images/sponsors/subc.png',
  '/images/sponsors/ubcmecheng.png',
  '/images/sponsors/waltergage.png',
  '/images/sponsors/solidworks.png',
];

export default function SponsorScroll() {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
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
          animate={{ x: ['0%', '-164%'] }}
          transition={{
            repeat: Infinity,
            duration: 17,
            ease: 'linear',
          }}
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

import { useEffect } from 'react';
import './sponsorScroll.css';
import { motion } from 'framer-motion';

const images = [
  `${process.env.PUBLIC_URL}/images/sponsors/shell.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/4imprint.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/altium.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/apsc.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/ece.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/forestry.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/ieee.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/matlab2.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/phidgets.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/sname.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/spaenaur.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/subc.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/ubcmecheng.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/waltergage.png`,
  `${process.env.PUBLIC_URL}/images/sponsors/solidworks.png`,
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
          animate={{ x: ['-164%', '0%'] }}
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

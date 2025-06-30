import React from 'react';
import './scroll.css';

export default function scroll() {
  return (
    <div className='sponsor-logos'>
      <div className='sponsor-container'>
        <div className='sponsor-gold'>
          <span className='sponsor-gold-title'>GOLD SPONSORS</span>
          <div className='sponsor-gold-logos'>
            <a href='https://www.altium.com'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/altium.png`}
                alt='Altium'
                className='sponsor-img'
              />
            </a>
            <a href='https://ece.ubc.ca'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/ece.png`}
                alt='ECE'
                className='sponsor-img'
              />
            </a>
            <a href='https://www.mathworks.com/products/matlab.html'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/matlab2.png`}
                alt='Matlab'
                className='sponsor-img'
              />
            </a>
            <a href='https://apsc.ubc.ca'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/apsc.png`}
                alt='APSC'
                className='sponsor-img'
              />
            </a>
            <a href='https://mech.ubc.ca'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/ubcmecheng.png`}
                alt='UBC Mechanical Engineering'
                className='sponsor-img'
              />
            </a>
            <a href='https://www.onshape.com/en/'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/onshape.png`}
                alt='Onshape'
                className='sponsor-img'
              />
            </a>
            <a href='https://www.integratedengineers.ca/'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/igen.png`}
                alt='UBC Integrated Engineering'
                className='sponsor-img'
              />
            </a>
            <a href='https://pressing-media.com/'>
              <img
                src={`${process.env.PUBLIC_URL}/images/sponsors/pressing_media.png`}
                alt='Pressing Media'
                className='sponsor-img'
              />
            </a>
          </div>
        </div>
        {/* <div className='sponsor-silver'>
          <span className='sponsor-silver-title'>SILVER SPONSORS</span>
        </div>
        <div className='sponsor-bronze'>
          <span className='sponsor-bronze-title'>BRONZE SPONSORS</span>
        </div> */}
      </div>
    </div>
  );
}

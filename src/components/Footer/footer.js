import React from 'react';
import '../Footer/footer.css';
import Linkedin from '../../assets/linkedin2.png';
import Instagram from '../../assets/insta2.png';
import Facebook from '../../assets/facebook2.png';

export default function () {
  return (
    <div className='footer-container'>
      <span className='copywrite'>Copywrite @ UBC Subbots 2025</span>
      <div className='footer-links'>
        {/* Linkedin */}
        <a href='https://www.linkedin.com/company/ubc-subbots/'>
          <img src={Linkedin} alt='linkedin' className='linkedin2' />
        </a>

        {/* Instagram */}
        <a href='https://www.instagram.com/ubcsubbots/'>
          <img src={Instagram} alt='instagram' className='instagram2' />
        </a>

        {/* Facebook */}
        <a href='https://www.facebook.com/ubc.subbots/'>
          <img src={Facebook} alt='facebook' className='facebook2' />
        </a>
      </div>
    </div>
  );
}

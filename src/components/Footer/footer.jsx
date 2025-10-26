import React from 'react';
import '../Footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

export default function () {
  return (
    <div className='footer-container'>
      <span className='copyright'>Copyright © UBC Subbots 2025</span>
      <div className='footer-links'>
        {/* Linkedin */}
        <a href='https://www.linkedin.com/company/ubc-subbots/'>
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon square" />
        </a>

        {/* Instagram */}
        <a href='https://www.instagram.com/ubcsubbots/'>
          <FontAwesomeIcon icon={faInstagram} className="footer-icon square" />
        </a>

        {/* Facebook */}
        <a href='https://www.facebook.com/ubc.subbots/'>
          <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        </a>

        {/* Github */}
        <a href='https://github.com/ubc-subbots'>
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

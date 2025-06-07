import React from 'react';
import './member.css';
import Linkedin from '../../assets/linkedin3.png';
import Mail from '../../assets/mail.png';

export default function member(props) {
  return (
    <div className='member-card'>
      <div className='member-content'>
        <div className='image-container'>
          <img src={props.image} className='link-image' />
          <div className='image-overlay'>
            <a
              href={props.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='linkedin-icon'
              style={{ marginRight: '10px' }}
            >
              <img src={Linkedin} alt='LinkedIn' />
            </a>
            <a href={`mailto:${props.mail}`} className='mail-icon'>
              <img src={Mail} alt='Mail' />
            </a>
          </div>
        </div>
        <div className='member-info'>
          <span className='member-name'>{props.name}</span>
          <span className='member-role'>{props.role}</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './learning.css';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function learning(props) {
  return (
    <div className='learning-container'>
      <div className='what-we-do'>
        <span className='what-we-do-title'>What We Do</span>
        <div className='what-we-do-content'>
          <div className='point'>
            <span className='point-title'>{props.point11}</span>
            <span className='point-description'>{props.desc11}</span>
          </div>
          <div className='point'>
            <span className='point-title'>{props.point12}</span>
            <span className='point-description'>{props.desc12}</span>
          </div>
          <div className='point'>
            <span className='point-title'>{props.point13}</span>
            <span className='point-description'>{props.desc13}</span>
          </div>
        </div>
      </div>
      <div className='what-we-learn'>
        <span className='what-we-learn-title'>What You'll Learn</span>
        <div className='what-we-learn-content'>
          <div className='point'>
            <span className='point-title'>{props.point21}</span>
            <span className='point-description'>{props.desc21}</span>
          </div>
          <div className='point'>
            <span className='point-title'>{props.point22}</span>
            <span className='point-description'>{props.desc22}</span>
          </div>
          <div className='point'>
            <span className='point-title'>{props.point23}</span>
            <span className='point-description'>{props.desc23}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

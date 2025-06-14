import React from 'react';
import './software.css';
import {
  faCode,
  faEye,
  faDharmachakra,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Learning from '../learning';
import ImageCarousel from '../picture';
import Software1 from '../../../assets/projects-image/software1.png';

const images = [Software1];

export default function Software() {
  return (
    <div id='Software-section' className='projects-software-container'>
      <div className='mobile'>
        <span className='projects-software-title'>SOFTWARE TEAM </span>
        <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.5rem' }} />
      </div>
      <Learning
        point11='Machine Learning'
        desc11='Use libraries such as Tensorflow for object detection'
        point12='Computer Vision'
        desc12='Process raw camera signals into meaningful information'
        point13='Linux Development'
        desc13='Develop in the open-source wonder that is Linux'
        point21='ROS'
        desc21='Work on a widely used platform that combines modularity and efficiency'
        point22='Python'
        desc22='Learn one of the most widely used languages in the world today'
        point23='C++'
        desc23='Wow your friends with your new C++ skills'
      />

      <div className='projects-software-description'>
        <span className='projects-software-description-title'>
          Software Projects
        </span>
        <div className='projects-software-content'>
          <ImageCarousel images={images} width='500px' />
          <div className='projects-software-text'>
            <span className='projects-software-text1'>
              With little pool access due to the COVID pandemic, we made the
              decision to shift our focus to developing our simulation
              environment. Simulation provides us with a cheaper and safer way
              to test our AUV, as well as ample synthetic data. To collect ample
              synthetic data for use in future design decisions, we decided to
              delevop two simulations. One to emulate what our robot's onboard
              cameras see and another to simulate our robot's dynamics. You can
              learn more about each of these simulations below:
            </span>
            <button className='projects-software-button1'>
              <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.5rem' }} />
              Computer Vision
            </button>
            <button className='projects-software-button1'>
              <FontAwesomeIcon
                icon={faDharmachakra}
                style={{ marginRight: '0.5rem' }}
              />
              Control System
            </button>
          </div>
        </div>
      </div>
    </div>
    // </Element>
  );
}

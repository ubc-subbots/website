import React from 'react';
import './mechanical.css';
import { faCogs, faTools, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Learning from '../learning';
import ImageCarousel from '../picture';
import mech1 from '../../../assets/projects-image/mech1.jpg';
import mech2 from '../../../assets/projects-image/mech2.jpg';
import mech3 from '../../../assets/projects-image/mech3.jpg';
import mech4 from '../../../assets/projects-image/mech4.jpg';
import mech5 from '../../../assets/projects-image/mech5.jpg';

const images = [mech1, mech2, mech3, mech4, mech5];

export default function mechanical() {
  return (
    <div className='projects-mechanical-container'>
      <div>
        <span className='projects-mechanical-title'>MECHANICAL TEAM </span>
        <FontAwesomeIcon icon={faTools} style={{ fontSize: '1.5rem' }} />
      </div>
      <Learning
        point11='Structure'
        desc11='Robot body and electronics integration'
        point12='Accuation'
        desc12='Interaction with the underwater environment'
        point13='Hydrodynamics'
        desc13='Physical stability and control through the water'
        point21='Design'
        desc21='How to design parts for a multidisciplinary project'
        point22='Fabrication'
        desc22='Hands on skills needed to make designs into reality'
        point23='Testing'
        desc23='How designs perform in practical application'
      />

      <div className='projects-software-description'>
        <span className='projects-software-description-title'>
          Mechanical Projects
        </span>
        <div className='projects-software-content'>
          <ImageCarousel images={images} width='500px' />
          <div className='projects-software-text'>
            <span className='projects-software-text1'>
              With access to in-person workspaces limited during the COVID-era,
              we have focused primarily on CAD design, and on figuring out
              manufacturing techniques for said designs once in-person work is
              allowed again. The mechanical team is divided into three
              sub-teams, represented by the buttons below. Feel free to click on
              each one to see what they've been working on.
            </span>
            <button className='projects-software-button1'>
              <FontAwesomeIcon
                icon={faCogs}
                style={{ marginRight: '0.5rem' }}
              />
              Waterproofing and Enclosures
            </button>
            <button className='projects-software-button1'>
              <FontAwesomeIcon
                icon={faTools}
                style={{ marginRight: '0.5rem' }}
              />
              Actuators
            </button>
            <button className='projects-software-button1'>
              <FontAwesomeIcon
                icon={faRocket}
                style={{ marginRight: '0.5rem' }}
              />
              Frames and Hydrodynamics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

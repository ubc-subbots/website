import React from 'react';
import './projects.css';
import {
  faCode,
  faCarBattery,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from "react-router-dom";
import Software from './Software/software';
import Electrical from './Electrical/electrical';
import Mechanical from './Mechanical/mechanical';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Projects() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className='projects-maincontainer'>
      <span className='projects-title'>PROJECTS</span>
      <div className='featured-projects'>
        <span className='featured-projects-title'>
          FEATURED PROJECTS - PROPULSION SYSTEM
        </span>
        <div
          style={{
            position: 'relative',
            paddingBottom: '1rem',
            overflow: 'hidden',
          }}
        >
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Oo7kQUQVeRs?si=HcsxjI7N7hS3oT1u'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
        <span className='featured-projects-description'>
          Here's a video outlining the features and design rationale behind our
          current robot's (Triton) propulsion system from each sub-team's
          perspective. This video was originally made for the RoboSub 2021 AUV
          Competiton.
        </span>
      </div>
      <div className='projects-cards'>
        <Card
          title='SOFTWARE'
          description='Create and refine subaquatic artificial intelligence'
          link='Software-section'
        />
        <Card
          title='ELECTRICAL'
          description='Design the interface between the computer and the sea'
          link='Electrical-section'
        />
        <Card
          title='MECHANICAL'
          description='Push the physical limits of underwater mechanics'
        />
      </div>
      <div className='project-types'>
        <Software />
        <Electrical />
        <Mechanical />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className='card-container'>
      <div className='card-content'>
        <span className='card-title'>{props.title}</span>
        {props.title === 'SOFTWARE' && (
          <FontAwesomeIcon
            icon={faCode}
            style={{
              fontSize: '5rem',
              padding: '1rem',
            }}
          />
        )}
        {props.title === 'ELECTRICAL' && (
          <FontAwesomeIcon
            icon={faCarBattery}
            style={{
              fontSize: '5rem',
              padding: '1rem',
            }}
          />
        )}
        {props.title === 'MECHANICAL' && (
          <FontAwesomeIcon
            icon={faTools}
            style={{
              fontSize: '5rem',
              padding: '1rem',
            }}
          />
        )}
        <span className='card-description'>{props.description}</span>
        <Link to={props.link} smooth={true} duration={500} offset={-70}>
          <button className='card-button'>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

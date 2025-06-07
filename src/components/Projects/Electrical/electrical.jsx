import React from 'react'
import './electrical.css'
import {
    faCarBattery,
    faBolt,
    faWaveSquare,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Learning from "../learning";
  import ImageCarousel from '../picture';
  import elec1 from "../../../assets/projects-image/elec1.PNG";
  import elec2 from "../../../assets/projects-image/elec2.PNG";
  import elec3 from "../../../assets/projects-image/elec3.jpg";
  import elec4 from "../../../assets/projects-image/elec4.png";
  import elec5 from "../../../assets/projects-image/elec5.jpg";

  const images = [
      elec1, elec2, elec3, elec4, elec5
    ];

export default function electrical() {
  return (
    <div className='projects-electrical-container'>
        <div>
            <span className='projects-electrical-title'>ELECTRICAL TEAM   </span>
            <FontAwesomeIcon icon={faCarBattery} style={{fontSize:'1.5rem'}} />
        </div>
        <Learning 
        point11="Signal Processing"
        desc11= "Transformation and interpretation of sensor data"
        point12="Circuit Design"
        desc12="Robust and accurate electronic hardware"
        point13="Comm Systems"
        desc13="Facilitating communication between different systems"
        point21="Verification"
        desc21="Ensuring design and implementation meet specifications"
        point22="Design"
        desc22="How to make a system of electronic components safe and robust"
        point23="Fabrication"
        desc23="Implementing ideas into the real world"
        />

     <div className='projects-software-description'>
                <span className='projects-software-description-title'>Electrical Projects</span>
                <div className='projects-software-content'>
                <ImageCarousel images={images} width="500px"/>
                <div className='projects-software-text'>
                    <span className='projects-software-text1'>The electrical team develops the electrical systems that allow the robot to read and respond to the world. The team designs systems to control and power thrusters, process signals, interface and communicate between sub-systems, and protect valuable electrical components from unexpected power surges. Robust and reliable electrical systems are critical for allowing a robot to react well to a dynamic environment. Here are some of the projects the electrical team is currently working on:</span>
                    <button className='projects-software-button1'>
                        <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
                        Power Distribution
                    </button>
                    <button className='projects-software-button1'>
                        <FontAwesomeIcon icon={faWaveSquare} style={{ marginRight: '0.5rem' }} />
                        Sound Localization
                    </button>
                    <button className='projects-software-button1'>
                        <FontAwesomeIcon icon={faCarBattery} style={{ marginRight: '0.5rem' }} />
                        Battery Management
                    </button>
                </div>
                </div>
            </div>
    
        </div>
  )
}

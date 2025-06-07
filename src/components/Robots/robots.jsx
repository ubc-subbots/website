import React from 'react'
import './robots.css'
import ImageCarousel from '../Projects/picture';
import Orca1 from "../../assets/robots/orca1.png";
import Orca2 from "../../assets/robots/orca2.png";
import Orca3 from "../../assets/robots/orca3.png";
import Orca4 from "../../assets/robots/orca4.png";
import Orca5 from "../../assets/robots/orca5.png";

import Triton1 from "../../assets/robots/triton1.png";
import Triton2 from "../../assets/robots/triton2.png";
import Triton3 from "../../assets/robots/triton3.png";
import Triton4 from "../../assets/robots/triton4.png";
import Triton5 from "../../assets/robots/triton5.png";
import Triton6 from "../../assets/robots/triton6.png";

const imagesOrca = [
    Orca1, Orca2, Orca3, Orca4, Orca5
  ];

const imagesTriton = [
    Triton1, Triton2, Triton3, Triton4, Triton5, Triton6
  ];

export default function Robots() {
  return (
    <div className='robots-container'>
        <span className='robots-title'>THE ROBOTS</span>
        <div className='robots-description'>
            <div className='robots-content'>
                <ImageCarousel images={imagesOrca} width="500px"/>
            <div className='robots-text'>
            <span className='robots-description-title'>ORCA</span>
                <span className='robots-text1'>Subbot's first attempt at creating an AUV, the design was a bare bones approach for the RoboSub 2018 competition. The robot consisted of two custom machined camera enclosures, two 6" enclosures splitting the power and control electronics, and a basic ball collection system on an H shaped frame. To reduce cost 4 thrustors were used to provide 4-DOF control of the design.</span>
            </div>
            </div>
        </div>

        <div className='robots-description'>
            <div className='robots-content'>
                <ImageCarousel images={imagesTriton} width="500px"/>
            <div className='robots-text'>
            <span className='robots-description-title'>TRITON</span>
                <span className='robots-text1'>UBC Subbots's submission to RoboSub 2021 is the Triton Autonomous Underwater Vehicle (AUV). Novel elements designed in-house include mechanical components, such as our enclosure and pull-out mounting plate, and electronics, such as our battery management system. Our software pipeline, running on a Jetson TX2, takes advantage of ROS2's modular design, introspection tools, and integration with the Gazebo simulator. With the constraints set by the COVID-19 pandemic, we focused heavily on development of realistic and physically-informed software simulations for AUV control, computer vision,and sound localization, laying the groundwork for testing and verification of future iterations of our AUV.</span>
            </div>
            </div>
        </div>
    </div>
  )
}

import {React, useState, useEffect} from 'react';
import './software.css';
import {
  faCode,
  faEye,
  faDharmachakra,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Learning from '../learning';
import Modal from '../modal.js'
import content from '../../../content';
import ImageCarousel from '../picture';
import software1 from '../../../assets/projects-image/software1.png';
import software2 from '../../../assets/projects-image/software2.png';
import software3 from '../../../assets/projects-image/software3.png';

const images = [software1, software2, software3];

export default function Software() {
  const [modalData, setModalData] = useState(null);

  const openModal = (type) => {
    console.log('Clicked:', type);
    if (!content) return;
    const details = content.projects.project.software.detail;
    const item = details.find((d) => d.header === type);
    if (item) {
      console.log('Modal Data:', item);
      setModalData({
        header: item.header,
        body: item.bodyFull,
        images: item.carousel?.images || [],
        captions: item.carousel?.captions || [],
      });
    }
  };

  const closeModal = () => setModalData(null);


  return (
    <div id='Software-section' className='projects-software-container'>
      <div className='title-container'>
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
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ImageCarousel images={images} />
          </div>
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
            <button
              className='projects-software-key-point'
              onClick={() => openModal('Computer Vision')}
            >
              <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.5rem' }} />
              Computer Vision
            </button>
            <button className='projects-software-key-point'
            onClick={() => openModal('Control System')}>
              <FontAwesomeIcon
                icon={faDharmachakra}
                style={{ marginRight: '0.5rem' }}
              />
              Control System
            </button>
            <div className='projects-software-key-point2'>
              <FontAwesomeIcon
                icon={faMobile}
                style={{ marginRight: '0.5rem' }}
              />
              Web Development
            </div>
          </div>
        </div>
      </div>
      {modalData && (
  <Modal header={modalData.header} onClose={closeModal}>
    <div>
      <ImageCarousel images={modalData.images} />
    </div>
    <div
      className="modal-body text-gray-800"
      dangerouslySetInnerHTML={{ __html: modalData.body }}
    ></div>
  </Modal>
)}
    </div>
    // </Element>
  );
}

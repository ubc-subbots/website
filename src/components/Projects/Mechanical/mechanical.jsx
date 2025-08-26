import { useState } from 'react';
import './mechanical.css';
import { faCogs, faTools, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Learning from '../learning';
import ImageCarousel from '../picture';
import Modal from '../modal.js';
import content from '../../../content';
import mech1 from '../../../assets/projects-image/mech1.jpg';
import mech2 from '../../../assets/projects-image/mech2.jpg';
import mech3 from '../../../assets/projects-image/mech3.jpg';
import mech4 from '../../../assets/projects-image/mech4.jpg';
import mech5 from '../../../assets/projects-image/mech5.jpg';

const images = [mech1, mech2, mech3, mech4, mech5];

export default function Mechanical() {
  const [modalData, setModalData] = useState(null);

  const openModal = (type) => {
    console.log('Clicked:', type);
    if (!content) return;
    const details = content.projects.project.mechanical.detail;
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
    <div id='Mechanical-section' className='projects-mechanical-container'>
      <div className='title-container'>
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
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ImageCarousel images={images} />
          </div>
          <div className='projects-software-text'>
            <span className='projects-software-text1'>
              The mechanical team designs the robot's layout and many of the
              individual components that you see on an AUV. Using Onshape, the
              team generates comprehensive CAD models of all projects and
              conducts simulations like FEA on elements that must withstand
              significant hydrostatic pressures. With a heavy emphasis on the
              engineering design process, the mechanical team prototypes and
              manufactures nearly all enclosures and internal mounting schemes
              using machine shop facilities on campus.
            </span>
            <button
              className='projects-mechanical-key-point'
              onClick={() => openModal('Waterproofing and Enclosures')}
            >
              <FontAwesomeIcon
                icon={faCogs}
                style={{ marginRight: '0.5rem' }}
              />
              Waterproofing and Enclosures
            </button>
            <button
              className='projects-mechanical-key-point'
              onClick={() => openModal('Actuators')}
            >
              <FontAwesomeIcon
                icon={faTools}
                style={{ marginRight: '0.5rem' }}
              />
              Actuators
            </button>
            <button
              className='projects-mechanical-key-point'
              onClick={() => openModal('Frames and Hydrodynamics')}
            >
              <FontAwesomeIcon
                icon={faRocket}
                style={{ marginRight: '0.5rem' }}
              />
              Frames and Hydrodynamics
            </button>
          </div>
        </div>
      </div>
      {modalData && (
        <Modal
          header={modalData.header}
          imageSrc={modalData.images[0]}
          blurb={modalData.body}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

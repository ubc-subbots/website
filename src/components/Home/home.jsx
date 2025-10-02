import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import About from '../About/about';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './model.jsx';
import SponsorScroll from './sponsorScroll.jsx';
import ImageGallery from './ImageGallery.jsx';
import { faBolt, faCogs, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Load gallery images
    fetch(`${process.env.PUBLIC_URL}/data/gallery.json`)
      .then((response) => response.json())
      .then((data) => setGalleryImages(data))
      .catch((error) => console.error('Error loading gallery images:', error));

    window.addEventListener('scroll', handleScroll);

    // Show page after a brief delay instead of waiting for model load
    const timer = setTimeout(() => setShowPage(true), 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!showPage) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          zIndex: 9999,
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <span
            style={{
              fontSize: '48px',
              fontWeight: '650',
              color: '#ffc300',
              fontFamily: "'Open Sans', sans-serif",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            UBC SUBBOTS
          </span>
        </div>
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '6px solid #333',
            borderTop: '6px solid #ffc300',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        {/* Remove the hidden canvas completely */}
      </div>
    );
  }

  return (
    <div className='Main'>
      <div className='Container'>
        <div className='title'>
          <span className='title2'>UBC SUBBOTS</span>
          <span className='title3'>
            Engineering the Future of Subsea Robotics
          </span>
        </div>
        <div className='canvas-wrapper'>
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 12 }}
            style={{ background: 'transparent' }}
            gl={{
              preserveDrawingBuffer: true,
              powerPreference: 'high-performance',
              antialias: false,
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[10, 10, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />

              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
              >
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.3} />
              </mesh>

              <Model castShadow receiveShadow />
            </Suspense>

            <OrbitControls
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
              enablePan={true}
            />
          </Canvas>
        </div>
      </div>
      <div className={`home-subtitle ${scrolled ? 'scrolled' : ''}`}>
        <span className='home-subtitle1'>COLLABORATION.</span>
        <span className='home-subtitle1'>INNOVATION.</span>
        <span className='home-subtitle1'>SUBSEA ENGINEERING.</span>
      </div>

      <About />
      <div className='projects-section'>
        <div className='projects-header'>
          <h2 className='home-projects-title'>See more about what we do</h2>
          <p className='projects-subtitle'>
            Discover our innovative work across different engineering
            disciplines
          </p>
        </div>
        <div className='projects-buttons'>
          <button
            className='project-button electrical-button'
            onClick={() => navigate('/projects#Electrical-section')}
          >
            <div className='button-icon'>
              <FontAwesomeIcon icon={faBolt} color={"white"} />
            </div>
            <div className='button-content'>
              <h3>Electrical</h3>
              <p>Power systems & electronics</p>
            </div>
          </button>
          <button
            className='project-button mechanical-button'
            onClick={() => navigate('/projects#Mechanical-section')}
          >
            <div className='button-icon'>
              <FontAwesomeIcon icon={faCogs} color={"white"} />
            </div>
            <div className='button-content'>
              <h3>Mechanical</h3>
              <p>Design & engineering</p>
            </div>
          </button>
          <button
            className='project-button software-button'
            onClick={() => navigate('/projects#Software-section')}
          >
            <div className='button-icon'>
              <FontAwesomeIcon icon={faCode} color={"white"} />
            </div>
            <div className='button-content'>
              <h3>Software</h3>
              <p>Code & algorithms</p>
            </div>
          </button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <ImageGallery images={galleryImages} />

      {/* Embedded YouTube Video Section */}
      <div className='home-video-section'>
        <div className='home-video-title-container'>
          Learn More About the Team
        </div>
        <div className='home-video-wrapper'>
          <iframe
            src='https://www.youtube.com/embed/AsdwXIdFwhE'
            title='UBC Subbots RoboSub 2025'
            style={{ border: 'none' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <div className='home-video-caption'>UBC Subbots RoboSub 2025</div>
      </div>

      <SponsorScroll />
    </div>
  );
}

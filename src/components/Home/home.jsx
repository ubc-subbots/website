import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import About from '../About/about';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './model.jsx';
import SponsorScroll from './sponsorScroll.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Preload critical images
    const preloadImages = [
      `${process.env.PUBLIC_URL}/images/main-page/electrical-team.jpg`,
      `${process.env.PUBLIC_URL}/images/main-page/mechanical-team.jpg`,
      `${process.env.PUBLIC_URL}/images/main-page/software-team.jpg`
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showPage) {
    return (
      <div style={{ 
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
        zIndex: 9999
      }}>
        <div style={{ marginBottom: '30px' }}>
          <span style={{ 
            fontSize: '48px', 
            fontWeight: '650', 
            color: '#ffc300',
            fontFamily: "'Open Sans', sans-serif",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            UBC SUBBOTS
          </span>
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          border: '6px solid #333',
          borderTop: '6px solid #ffc300',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        {/* Hidden canvas to load the model */}
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
          <Canvas>
            <Suspense fallback={null}>
              <Model onLoad={() => {
                setModelLoaded(true);
                setTimeout(() => setShowPage(true), 500);
              }} />
            </Suspense>
          </Canvas>
        </div>
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
      <div className='teams'>
        <div className='home-electrical'>
          <div className='team-image-container'>
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/main-page/electrical-team.jpg`}
              alt='Electrical Team'
              className='team-background-image'
              effect='blur'
              width='100%'
              height='100%'
              threshold={200}
              placeholderSrc={`${process.env.PUBLIC_URL}/images/main-page/electrical-team.jpg`}
            />
          </div>
          <div className='home-electrical-content'>
            <button
              className='home-electrical-title'
              onClick={() => navigate('/projects#Electrical-section')}
            >
              Electrical Projects
            </button>
          </div>
        </div>
        <div className='home-mechanical'>
          <div className='team-image-container'>
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/main-page/mechanical-team.jpg`}
              alt='Mechanical Team'
              className='team-background-image'
              effect='blur'
              width='100%'
              height='100%'
              threshold={200}
              placeholderSrc={`${process.env.PUBLIC_URL}/images/main-page/mechanical-team.jpg`}
            />
          </div>
          <div className='home-mechanical-content'>
            <button
              className='home-mechanical-title'
              onClick={() => navigate('/projects#Mechanical-section')}
            >
              Mechanical Projects
            </button>
          </div>
        </div>
        <div className='home-software'>
          <div className='team-image-container'>
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/main-page/software-team.jpg`}
              alt='Software Team'
              className='team-background-image'
              effect='blur'
              width='100%'
              height='100%'
              threshold={200}
              placeholderSrc={`${process.env.PUBLIC_URL}/images/main-page/software-team.jpg`}
            />
          </div>
          <div className='home-software-content'>
            <button
              className='home-software-title'
              onClick={() => navigate('/projects#Software-section')}
            >
              Software Projects
            </button>
          </div>
        </div>
      </div>
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

import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

import './home.css';
import About from '../About/about';
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './model.jsx';
import SponsorScroll from './sponsorScroll.jsx';
// import homeSoftware from "../../assets/home_software.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // handles color change when scrolling
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />

              {/* Shadow receiving ground */}
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
        <div className='home-software'>
          <div className='home-software-content'>
            {/* <span className="home-software-title">Software Team</span> */}
            <button
              className='home-software-title'
              onClick={() => navigate('/projects#Software-section')}
            >
              Software Projects
            </button>
          </div>
        </div>
        <div className='home-electrical'>
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
          <div className='home-mechanical-content'>
            <button
              className='home-mechanical-title'
              onClick={() => navigate('/projects#Mechanical-section')}
            >
              Mechanical Projects
            </button>
          </div>
        </div>
      </div>
      <SponsorScroll />
    </div>
  );
}
useGLTF.preload('/model/steelhead.glb');

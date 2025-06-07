import React, { useEffect, useState } from "react";
import "./home.css";
import About from "../About/about";
import Robots from "../Robots/robots";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./model.jsx";
import SponsorScroll from "./sponsorScroll.jsx";
// import homeSoftware from "../../assets/home_software.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="Main"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <div className="Container">
        <div className="title">
          <span className="title2">UBC SUBBOTS</span>
          <span className="title3">
            Engineering the Future of Subsea Robotics
          </span>
        </div>
        <div className="canvas-wrapper">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 10 }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.35} />
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

            <OrbitControls
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
              enablePan={true}
            />
          </Canvas>
        </div>
      </div>
      <div className={`home-subtitle ${scrolled ? "scrolled" : ""}`}>
        <span className="home-subtitle1">COLLABORATION.</span>
        <span className="home-subtitle1">INNOVATION.</span>
        <span className="home-subtitle1">SUBSEA ENGINEERING.</span>
      </div>
      <About />
      <div className="teams">
        <div className="home-software">
          <div className="home-software-content">
            {/* <span className="home-software-title">Software Team</span> */}
            <button className="home-software-title">Software Projects</button>
          </div>
        </div>
        <div className="home-electrical">
          <div className="home-electrical-content">
            <button className="home-electrical-title">Electrical Projects</button>
          </div>
        </div>
        <div className="home-mechanical">
          <div className="home-mechanical-content">
            <button className="home-mechanical-title">Mechanical Projects</button>
          </div>
        </div>
      </div>
      <SponsorScroll />
    </div>
  );
}

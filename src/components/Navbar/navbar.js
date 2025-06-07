import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navbar.css';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Linkedin from '../../assets/linkedin2.png';
import Instagram from '../../assets/insta2.png';
import Facebook from '../../assets/facebook2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) over first 100px of scroll
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/joinus');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: scrollProgress * 0.9,
  };

  return (
    <nav
      className='nav-container'
      style={{
        backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
      }}
    >
      <div className='nav-content'>
        <img src={Logo} alt='logo' className='logo' />

        <button className='menu-toggle' onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            style={{ fontSize: '3rem' }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className={`overlayMenu ${menuOpen ? 'open' : ''}`}>
          <button className='overlayClose' onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <NavLink
            to='/'
            onClick={() => setMenuOpen(false)}
            className='overlayMenuItem'
          >
            HOME
          </NavLink>
          <NavLink
            to='/projects'
            onClick={() => setMenuOpen(false)}
            className='overlayMenuItem'
          >
            PROJECTS
          </NavLink>
          <NavLink
            to='/members'
            onClick={() => setMenuOpen(false)}
            className='overlayMenuItem'
          >
            MEMBERS
          </NavLink>
          <NavLink
            to='/joinus'
            onClick={() => setMenuOpen(false)}
            className='overlayMenuItem'
          >
            JOIN US
          </NavLink>
          <NavLink
            to='/sponsorship'
            onClick={() => setMenuOpen(false)}
            className='overlayMenuItem'
          >
            SPONSORSHIP
          </NavLink>
          <div className='navbar-socials'>
            <a href='https://www.linkedin.com/company/ubc-subbots/'>
              <img src={Linkedin} alt='linkedin' width='48' height='48' />
            </a>
            <a href='https://www.instagram.com/ubcsubbots/'>
              <img src={Instagram} alt='instagram' width='48' height='48' />
            </a>
            <a href='https://www.facebook.com/ubc.subbots/'>
              <img src={Facebook} alt='facebook' width='48' height='48' />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

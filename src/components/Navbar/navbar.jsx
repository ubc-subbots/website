import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navbar.css';
import {
  faBarsStaggered,
  faTimes,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Linkedin from '../../assets/linkedin2.png';
import Instagram from '../../assets/insta2.png';
import Github from '../../assets/github4.png';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) over first 200px of scroll
      const progress = Math.min(window.scrollY / 200, 1);
      setScrollProgress(progress);

      // Show navbar after scrolling down 100px on home page
      if (location.pathname === '/') {
        setShowNavbar(window.scrollY > 100);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize navbar visibility based on current scroll position
    if (location.pathname === '/') {
      setShowNavbar(window.scrollY > 100);
    } else {
      setShowNavbar(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const showTitleAtTop = location.pathname === '/members';

  const titleOpacity = showTitleAtTop ? 1 : scrollProgress;
  const titleVisibility = showTitleAtTop
    ? 'visible'
    : scrollProgress > 0
      ? 'visible'
      : 'hidden';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  const backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: scrollProgress * 0.9,
  };

  // Don't render navbar on home page when not scrolled
  if (location.pathname === '/' && !showNavbar) {
    return (
      <div className='scroll-indicator' onClick={handleScrollClick}>
        <FontAwesomeIcon icon={faChevronDown} className='scroll-arrow' />
      </div>
    );
  }

  return (
    <nav
      className={`nav-container ${showNavbar ? 'nav-visible' : 'nav-hidden'}`}
      style={{
        backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
      }}
    >
      <div className='nav-content'>
        <NavLink to='/' className='logo-link'>
          <img src={Logo} alt='logo' className='logo' />
        </NavLink>
        <div
          className='nav-title'
          style={{
            opacity: titleOpacity,
            visibility: titleVisibility,
          }}
        >
          UBC SUBBOTS
        </div>

        {!menuOpen && (
          <button className='menu-toggle' onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              style={{ fontSize: '3rem' }}
            />
          </button>
        )}
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
              <img src={Instagram} alt='instagram' width='46' height='46' />
            </a>
            <a href='https://github.com/ubc-subbots'>
              <img src={Github} alt='github' width='50' height='50' />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

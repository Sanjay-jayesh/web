// src/components/Navbar/index.js
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Navbtn
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  const updateActiveSection = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    const services = document.getElementById('services');
    const about = document.getElementById('about');
    const contact = document.getElementById('resources');

    // ✅ NEW: Highlight PORTFOLIO when on any /portfolio-* route
    if (location.pathname.startsWith('/portfolio-')) {
      setActiveSection('services');
      return;
    }

    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    if (scrollPos >= totalHeight - 50 && contact) {
      setActiveSection('resources');
    } else if (services && window.scrollY >= services.offsetTop - 100) {
      setActiveSection('services');
    } else if (about && window.scrollY >= about.offsetTop - 100) {
      setActiveSection('about');
    } else {
      setActiveSection('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    window.addEventListener('scroll', updateActiveSection);

    updateActiveSection(); // Initial call

    return () => {
      window.removeEventListener('scroll', changeNav);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [location]);

  const toggleHome = () => scroll.scrollToTop();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Rafah Fathima
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                as="div"
                onClick={() => scrollToSection('about')}
                className={activeSection === 'about' ? 'active' : ''}
              >
                ABOUT ME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                as="div"
                onClick={() => scrollToSection('services')}
                className={activeSection === 'services' ? 'active' : ''}
              >
                PORTFOLIO
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                as="div"
                onClick={() => scrollToSection('resources')}
                className={activeSection === 'resources' ? 'active' : ''}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
          <Navbtn />
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;

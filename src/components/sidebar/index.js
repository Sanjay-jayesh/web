import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkStyled,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // slight delay to wait for homepage to render
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toggle(); // close sidebar
  };

  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkStyled onClick={() => handleNavigateToSection('home')}>HOME</SidebarLinkStyled>
          <SidebarLinkStyled onClick={() => handleNavigateToSection('about')}>ABOUT ME</SidebarLinkStyled>
          <SidebarLinkStyled onClick={() => handleNavigateToSection('services')}>PORTFOLIO</SidebarLinkStyled>
          <SidebarLinkStyled onClick={() => handleNavigateToSection('resources')}>CONTACT</SidebarLinkStyled>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

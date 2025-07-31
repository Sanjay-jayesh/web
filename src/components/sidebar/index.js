import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" smooth={true} duration={1000} spy={true} exact="true" offset={-80} onClick={toggle}>HOME</SidebarLink>
          <SidebarLink to="about" smooth={true} duration={1000} spy={true} exact="true" offset={-40} onClick={toggle}>ABOUT ME</SidebarLink>
          <SidebarLink to="services" smooth={true} duration={1000} spy={true} exact="true" offset={80} onClick={toggle}>PORTFOLIO</SidebarLink>
          <SidebarLink to="resources" smooth={true} duration={1000} spy={true} exact="true" offset={-80} onClick={toggle}>CONTACT</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

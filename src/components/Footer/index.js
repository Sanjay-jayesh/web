import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksRow,
  FooterLinkItem,
  FooterExternalLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  CenteredFooterHeading
} from './FooterElements';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksRow className="desktop-only">
          <FooterLinkItem>
            <FooterExternalLink href="https://www.instagram.com/r.xfaah/" target="_blank">
              Instagram
            </FooterExternalLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterExternalLink href="mailto:rafahfathima01@gmail.com">
              Mail
            </FooterExternalLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterExternalLink href="tel:+97333647575">
              WhatsApp
            </FooterExternalLink>
          </FooterLinkItem>
        </FooterLinksRow>


        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Rafah Fathima
            </SocialLogo>
            <WebsiteRights>
              Rafah Fathima © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons className='mobile-only'>
              <SocialIconLink
                href="https://www.instagram.com/r.xfaah/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:rafahfathima01@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <FaEnvelope />
              </SocialIconLink>
              <SocialIconLink
                href="https://wa.me/97333647575"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

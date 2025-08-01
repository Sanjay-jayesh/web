import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const CenteredFooterHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 24px;
`;

export const FooterLinksRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const FooterLinkItem = styled.div`
  color: #fff;
  text-align: center;
`;

export const FooterExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #40E0D0;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

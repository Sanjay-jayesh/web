import React from 'react';
import styled from 'styled-components';
import { Button } from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  HeadingWrapper,
  DescriptionWrapper,
  AboutTextFontWrapper
} from './InfoElements';

// New styled component for special line
const SpecialText = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #8F8D8D;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;






const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  specialLine,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  email,
  phone
}) => {
  return (
    <InfoContainer $lightBg={lightBg} id={id}>
      <InfoWrapper $isResources={id === 'resources'}>
        <InfoRow $imgStart={imgStart} $isResources={id === 'resources'}>
          <Column1>
            <HeadingWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading $lightText={lightText}>{headline}</Heading>
            </HeadingWrapper>

            <ImgWrap className="mobile-only">
              {img && <Img src={img} alt={alt} />}
            </ImgWrap>

            <DescriptionWrapper>
              <AboutTextFontWrapper>
                <Subtitle $darkText={darkText} $isAbout={id === 'about'}>
                  {description}
                </Subtitle>

                {id === 'resources' && (
                  <Subtitle $darkText={darkText}>
                    <a href={`mailto:${email}`} style={{ color: '#8F8D8D', textDecoration: 'underline' }}>
                      Email: {email}
                    </a>
                    <br />
                    <a href={`tel:${phone}`} style={{ color: '#8F8D8D', textDecoration: 'underline' }}>
                      Phone: {phone}
                    </a>
                  </Subtitle>
                )}
              </AboutTextFontWrapper>

              {specialLine && <SpecialText>{specialLine}</SpecialText>}

              <BtnWrap>
                {buttonLabel && (
                  <Button
                    to="services"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    offset={0}
                    >
                    My Portfolio
                  </Button>
                )}
              </BtnWrap>
            </DescriptionWrapper>
          </Column1>

          {img && (
            <Column2 className="desktop-only">
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          )}
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};


export default InfoSection;

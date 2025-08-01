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
  font-family: 'Markazi Text', san-serif;
  font-size: 35px;
  font-weight: 800;
  color: #40E0D0;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
      font-size: ${({ isAbout }) => (isAbout ? '24px' : '16px')};
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
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper isResources={id === 'resources'}>
        <InfoRow imgStart={imgStart} isResources={id === 'resources'}>
          <Column1>
            {/* Heading first */}
            <HeadingWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
            </HeadingWrapper>

            {/* Image in the middle */}
            <ImgWrap className="mobile-only">
              <Img src={img} alt={alt} />
            </ImgWrap>

            {/* Description and button below image */}
            <DescriptionWrapper>
              <AboutTextFontWrapper>
                <Subtitle darkText={darkText} isAbout={id === 'about'}>
                  {description}
                </Subtitle>

                {id === 'resources' && (
                  <>
                    <Subtitle darkText={darkText}>
                      <a href={`mailto:${email}`} style={{ color: '#40E0D0', textDecoration: 'underline' }}>
                        Email: {email}
                      </a>
                      <br />
                      <a href={`tel:${phone}`} style={{ color: '#40E0D0', textDecoration: 'underline' }}>
                        Phone: {phone}
                      </a>
                    </Subtitle>
                  </>
                )}
              </AboutTextFontWrapper>


              {specialLine && <SpecialText>{specialLine}</SpecialText>}

              <BtnWrap>
                {buttonLabel && (
                  <Button
                    to='services'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    offset={0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                )}
              </BtnWrap>
            </DescriptionWrapper>
          </Column1>

        {img && (
          <Column2 className="desktop-only">
          {img &&(
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          )}
          </Column2>
        )}
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};


export default InfoSection;

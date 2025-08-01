import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    padding-bottom: ${({ id }) => (id === 'resources' ? '0px' : '100px')};

    @media screen and (max-width: 768px) {
        padding: ${({ id }) => (id === 'resources' ? '40px 0' : '100px 0')};
    }
`;


export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: ${({ isResources }) => (isResources ? 'auto' : '860px')};
    min-height: ${({ isResources }) => (isResources ? 'auto' : '860px')};
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: ${({ isResources }) => (isResources ? '20px 24px 40px' : '0 24px')};
    justify-content: center;

    @media screen and (max-width:768px) {
        height: auto;
        padding: ${({ isResources }) => (isResources ? '20px 24px 40px' : '40px 24px')};
    }
`;



export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2' 'col1'` : `'col2' 'col1'`)};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-widht:768px) {
        padding-bottom: 30px
    }
`;

export const TopLine = styled.p`
    color: #40E0D0;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 20px;
    font-size: ${({ isAbout }) => (isAbout ? '35px' : '18px')};
    line-height: ${({ isAbout }) => (isAbout ? '1' : '1.5')};
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    overflow-wrap: break-word;
    font-family: ${({ isAbout }) => (isAbout ? 'Markazi Text' : 'sans-serif')};

    @media screen and (max-width: 768px) {
        font-size: ${({ isAbout }) => (isAbout ? '24px' : '16px')};
    }
`;



export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 25px; 
`;


export const HeadingWrapper = styled.div`
  order: -1;

  @media screen and (max-width: 768px) {
    order: -2;
  }
`;

export const DescriptionWrapper = styled.div`
  order: 2;

  @media screen and (max-width: 768px) {
    order: 3;
  }
`;

export const AboutTextFontWrapper = styled.div`
  font-family: Arial, sans-serif;
`;



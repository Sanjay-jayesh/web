import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDownward, ArrowDown } from './HeroElements';



const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
        <HeroBg>
            
        </HeroBg>
        <HeroContent>
          <HeroH1>RAFAH FATHIMA</HeroH1>
          <HeroP>
            Social Media Management | Content Creation | Photography | Digital Marketing
          </HeroP>
          <HeroBtnWrapper>
            <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
            primary= 'true'
            dark='true'
            smooth={true} duration={1000} spy={true} exact="true" offset={0} 
          >
          About Me {hover ? <ArrowDownward /> : <ArrowDown/>}</Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}; 

export default HeroSection

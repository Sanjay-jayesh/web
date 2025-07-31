import React from 'react';
import Icon1 from '../../images/img1(1).jpg';
import Icon2 from '../../images/car3(1).jpg';
import Icon3 from '../../images/food17(1).jpg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>My Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard to="/project1">
          <ServicesIcon src={Icon1} />
          <ServicesH2>Products</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>

        <ServicesCard to="/project2">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Cars</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>

        <ServicesCard to="/project3">
          <ServicesIcon src={Icon3} />
          <ServicesH2>Food and Beverages</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

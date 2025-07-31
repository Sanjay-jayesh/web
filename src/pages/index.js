import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar'; 
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import Services from '../components/Services';
import { homeObjOne, homeObjTwo, } from '../components/infoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} /> {/* Capitalized usage */}
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Services />
      <InfoSection {...homeObjTwo}/>
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';
import Navbar from '../../components/Navbar/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;

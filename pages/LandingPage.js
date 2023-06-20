'use client'

import Navbar from "./components/Items/Navbar";
import ContainerTitle from "./components/Items/ContainerTitle";
import ContainerBody from "./components/Items/ContainerBody";
import ContainerFeatures from "./components/Items/ContainerFeatures";
import ContainerRegister from "./components/Items/ContainerRegister";
import Footer from "./components/Items/Footer";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ContainerTitle />
      <ContainerBody />
      <ContainerFeatures />
      <ContainerRegister />
      <Footer />
    </>
  );
};

export default LandingPage;

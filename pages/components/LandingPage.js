import Navbar from "./Items/Navbar";
import ContainerTitle from "./Items/ContainerTitle";
import ContainerBody from "./Items/ContainerBody";
import ContainerFeatures from "./Items/ContainerFeatures";
import ContainerRegister from "./Items/ContainerRegister";
import Footer from "./Items/Footer";


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ContainerTitle />
      <ContainerBody />
      <ContainerFeatures />
      <ContainerRegister />
      <Footer />
    </div>
  );
};

export default LandingPage;

import Contact from "./components/Contact";
import Details from "./components/Details";
import Eligibility from "./components/Eligibility";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OverviewModule from "./components/OverviewModule";
import Participants from "./components/Participants";
import Partners from "./components/Partners";
import ProjectBenefit from "./components/ProgramBenefit";
import Register from "./components/Register";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <OverviewModule />
      <ProjectBenefit />
      <Eligibility />
      <Timeline />
      <Details />
      <Participants />
      <Partners />
      <Register />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

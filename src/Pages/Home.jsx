import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Training from "../components/Training/Training";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificate/Certificate";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Training />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
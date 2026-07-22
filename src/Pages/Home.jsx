import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Education from "../components/Education/Education.jsx";
import Training from "../components/Training/Training.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Certificate from "../components/Certificate/Certificate.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Training />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;``
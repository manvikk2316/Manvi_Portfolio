import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div
          className="footer-logo"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2>
            Manvi<span>.</span>
          </h2>

          <p>
            MERN Stack Developer passionate about building modern,
            responsive and scalable web applications.
          </p>
        </div>

        <div
          className="footer-links"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div
          className="footer-social"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h3>Follow Me</h3>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram profile"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div
        className="footer-bottom"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="250"
      >
        <p>© {currentYear} Manvi. All Rights Reserved.</p>

        <a
          href="#home"
          className="scroll-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
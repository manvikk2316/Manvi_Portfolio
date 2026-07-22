import "./Hero.css";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE */}

        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Manvi <span>Kashyap</span>
          </h1>

          <h2 className="hero-role">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "MERN Stack Developer",
                1800,
                "React Developer",
                1800,
                "Frontend Developer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-description">
            I am a passionate Full Stack Developer with knowledge of
            React.js, Node.js, Express.js, MongoDB and SQL. I enjoy
            creating responsive, user-friendly and scalable web
            applications with clean code and modern UI.
          </p>

          <div
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <a
              href="#contact"
              className="hero-primary-btn"
            >
              Hire Me
            </a>

            <a
              href="/resume/Manvi-Kashyap-Resume.pdf"
              download
              className="hero-secondary-btn"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div
            className="hero-socials"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="hero-visual"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div className="code-editor">
            <div className="editor-header">
              <div className="editor-dots">
                <span className="editor-dot red-dot"></span>
                <span className="editor-dot yellow-dot"></span>
                <span className="editor-dot green-dot"></span>
              </div>

              <span className="editor-file-name">
                developer.js
              </span>
            </div>

            <div className="editor-body">
              <div className="line-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>

              <pre className="editor-code">
                <code>
                  <span className="code-keyword">
                    const
                  </span>

                  <span> developer = </span>

                  <span className="code-bracket">
                    {"{"}
                  </span>

                  {"\n\n"}

                  <span className="code-property">
                    name
                  </span>

                  <span>: </span>

                  <span className="code-string">
                    "Manvi"
                  </span>

                  <span>,</span>

                  {"\n\n"}

                  <span className="code-property">
                    role
                  </span>

                  <span>: </span>

                  <span className="code-string">
                    "Full Stack Developer"
                  </span>

                  <span>,</span>

                  {"\n\n"}

                  <span className="code-property">
                    skills
                  </span>

                  <span>: </span>

                  <span className="code-bracket">
                    [
                  </span>

                  <span className="code-string">
                    "React"
                  </span>

                  <span>, </span>

                  <span className="code-string">
                    "Node.js"
                  </span>

                  <span>, </span>

                  <span className="code-string">
                    "MongoDB"
                  </span>

                  <span>],</span>

                  {"\n\n"}

                  <span className="code-property">
                    available
                  </span>

                  <span>: </span>

                  <span className="code-boolean">
                    true
                  </span>

                  {"\n\n"}

                  <span className="code-bracket">
                    {"}"}
                  </span>

                  <span>;</span>

                  <span className="typing-cursor"></span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div
          className="section-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p>Get To Know More</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div
            className="about-card"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <span className="about-number">01</span>

            <h3>Who I Am</h3>

            <p>
              I am a passionate MERN Stack Developer and full-stack learner
              focused on building responsive, user-friendly and scalable web
              applications.
            </p>
          </div>

          <div
            className="about-description"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <h3>Building useful digital experiences</h3>

            <p>
              I enjoy converting ideas into practical web applications using
              modern technologies such as React, Node.js, Express and MongoDB.
              I am continuously improving my frontend and backend development
              skills by creating real-world projects.
            </p>

            <p>
              My goal is to start my career as a web developer where I can
              contribute to meaningful projects, learn from experienced
              developers and grow as a software professional.
            </p>

            <div className="about-details">
              <div
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <span>Name</span>
                <strong>Manvi</strong>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="320"
              >
                <span>Role</span>
                <strong>MERN Stack Developer</strong>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="390"
              >
                <span>Location</span>
                <strong>India</strong>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="460"
              >
                <span>Availability</span>
                <strong>Open to Opportunities</strong>
              </div>
            </div>

            <a
              href="#contact"
              className="about-button"
              data-aos="fade-up"
              data-aos-delay="520"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
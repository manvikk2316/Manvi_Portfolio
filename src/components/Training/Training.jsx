import {
  FaLaptopCode,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "./Training.css";

const Training = () => {
  const learnedSkills = [
    "HTML5, CSS3 and Responsive Web Design",
    "JavaScript and Modern ES6+ Concepts",
    "React.js and Component-Based Development",
    "Node.js and Express.js Backend Development",
    "MongoDB and Database Integration",
    "REST API Development and Testing",
    "Authentication and Authorization",
    "Git, GitHub and Project Deployment",
  ];

  return (
    <section className="training" id="training">
      <div className="training-container">
        <div
          className="training-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="training-subtitle">
            Professional Learning
          </p>

          <h2>Training</h2>

          <p>
            Practical full-stack development training focused on
            creating responsive and database-driven web applications.
          </p>
        </div>

        <article
          className="training-card"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <div className="training-card-header">
            <div
              className="training-icon"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaLaptopCode />
            </div>

            <div
              className="training-title"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <span className="training-type">
                Full Stack Development Training
              </span>

              <h3>Physics Wallah Skills</h3>
            </div>

            <div
              className="training-duration"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <FaCalendarAlt />
              <span>From July 2025 to February 2026</span>
            </div>
          </div>

          <div className="training-content">
            <div
              className="training-description"
              data-aos="fade-right"
              data-aos-delay="350"
            >
              <p>
                Completed comprehensive Full Stack Development training
                from Physics Wallah Skills. The program included
                frontend development, backend development, databases,
                REST APIs and the development of practical web
                applications.
              </p>

              <p>
                During this training, I worked on responsive user
                interfaces and learned how frontend applications
                communicate with backend servers and databases.
              </p>
            </div>

            <div
              className="training-learning"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h4>Key Learnings</h4>

              <div className="learning-list">
                {learnedSkills.map((skill, index) => (
                  <div
                    className="learning-item"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                  >
                    <FaCheckCircle />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="training-technologies"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
            ].map((technology, index) => (
              <span
                key={technology}
                data-aos="zoom-in"
                data-aos-delay={(index % 4) * 70}
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Training;
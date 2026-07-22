import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    category: "Database",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    category: "Tools",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div
          className="section-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p>What I Work With</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card"
              key={skill.name}
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay={(index % 5) * 100}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
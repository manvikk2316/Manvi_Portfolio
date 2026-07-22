import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

import "./Education.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      level: "Graduation",
      course: "Bachelor of Technology",
      specialization: "Computer Science & Engineering",
      institution: "Dev Bhoomi Group Of Institutions, Saharanpur",
      duration: "2023 - 2026",
      resultLabel: "SGPA",
      result: "7.54 / 10",
    },
    {
      id: 2,
      icon: <FaSchool />,
      level: "Diploma",
      course: "Diploma - Electronics Engg.",
      specialization: "Electronics",
      institution: "Government Polytechnic College, Saharanpur",
      duration: "2023",
      resultLabel: "Percentage",
      result: "85%",
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      level: "High School",
      course: "Class X",
      specialization: "CBSE",
      institution: "Lord Mahavira Academy, Saharanpur",
      duration: "2020",
      resultLabel: "Percentage",
      result: "55%",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Section Heading */}
        <div
          className="education-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="education-subtitle">
            My Academic Journey
          </p>

          <h2>Education</h2>

          <p>
            A brief overview of my academic background and
            qualifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {educationData.map((item, index) => (
            <article
              className="education-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="900"
            >
              <div className="education-card-top">
                <div className="education-icon">
                  {item.icon}
                </div>

                <span className="education-duration">
                  {item.duration}
                </span>
              </div>

              <p className="education-level">
                {item.level}
              </p>

              <h3>{item.course}</h3>

              <h4>{item.specialization}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <div className="education-result">
                <span>{item.resultLabel}</span>
                <strong>{item.result}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
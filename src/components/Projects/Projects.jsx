import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Role-Based Dashboard",
      shortDescription:
        "A full-stack authentication and role-based dashboard project.",
      description:
        "This project provides secure user authentication and role-based access. Admin and normal users can access different dashboard features based on their assigned roles.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      features: [
        "User registration and login",
        "JWT authentication",
        "Role-based authorization",
        "Protected routes",
        "Admin and user dashboards",
      ],
      liveLink: "",
      githubLink: "",
    },
    {
      id: 2,
      number: "02",
      title: "E-Commerce Website",
      shortDescription:
        "An intermediate React-based shopping website.",
      description:
        "This e-commerce website allows users to browse products, view product information, add products to the cart, and manage their shopping experience.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Node.js",
        "MongoDB",
      ],
      features: [
        "Product listing",
        "Product details",
        "Shopping cart",
        "Responsive design",
        "User-friendly interface",
      ],
      liveLink: "",
      githubLink: "",
    },
    {
      id: 3,
      number: "03",
      title: "Portfolio Website",
      shortDescription:
        "A responsive MERN portfolio with a working contact form.",
      description:
        "This portfolio website showcases skills, projects, experience, and contact information. The contact form is connected to an Express API and stores messages in MongoDB.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
      ],
      features: [
        "Responsive navbar",
        "Smooth scrolling",
        "Active navigation links",
        "Project showcase",
        "MongoDB contact form",
      ],
      liveLink: "",
      githubLink: "",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div
          className="projects-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="section-subtitle">My Work</p>

          <h2>Featured Projects</h2>

          <p>
            Here are some projects that demonstrate my frontend and
            backend development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay={index * 150}
            >
              <span className="project-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.shortDescription}
              </p>

              <div className="project-technologies">
                {project.technologies
                  .slice(0, 3)
                  .map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
              </div>

              <button
                type="button"
                className="view-details-button"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <button
              type="button"
              className="modal-close-button"
              onClick={closeModal}
              aria-label="Close project details"
            >
              ×
            </button>

            <span className="modal-project-number">
              {selectedProject.number}
            </span>

            <h2>{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-section">
              <h3>Key Features</h3>

              <ul>
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Technologies Used</h3>

              <div className="modal-technologies">
                {selectedProject.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="modal-actions">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link primary-link"
                >
                  Live Demo
                </a>
              )}

              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link secondary-link"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
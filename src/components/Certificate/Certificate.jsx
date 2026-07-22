import {
  FaEye,
  FaDownload,
  FaCertificate,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

import "./Certificates.css";

const Certificates = () => {
  const certificate = {
    title: "Full Stack Development",
    organization: "Physics Wallah Skills",
    year: "2026",
    image: "/certificates/pw-fullstack-certificate.png",
    file: "/certificates/pw-fullstack-certificate.pdf",
  };

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <div
          className="certificates-heading"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="certificates-subtitle">Achievement</p>

          <h2>Certification</h2>

          <p>
            A professional certification earned through structured
            full-stack development training and practical projects.
          </p>
        </div>

        <article
          className="featured-certificate"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <div
            className="certificate-preview"
            data-aos="fade-right"
            data-aos-duration="850"
            data-aos-delay="200"
          >
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
            />

            <div className="preview-overlay">
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View certificate"
              >
                <FaEye />
                <span>Preview Certificate</span>
              </a>
            </div>
          </div>

          <div
            className="certificate-content"
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="250"
          >
            <div
              className="certificate-badge"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaAward />
              <span>Professional Certificate</span>
            </div>

            <div
              className="certificate-main-icon"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <FaCertificate />
            </div>

            <h3>{certificate.title}</h3>

            <p className="certificate-provider">
              Issued by <strong>{certificate.organization}</strong>
            </p>

            <p className="certificate-description">
              This certification represents practical learning in
              frontend development, backend development, databases,
              REST APIs and full-stack web application development.
            </p>

            <div className="certificate-meta">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaCalendarAlt />
                <span>Completed in {certificate.year}</span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="460"
              >
                <FaCertificate />
                <span>Full Stack Development</span>
              </div>
            </div>

            <div
              className="certificate-actions"
              data-aos="fade-up"
              data-aos-delay="520"
            >
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-certificate-btn"
              >
                <FaEye />
                View Certificate
              </a>

              <a
                href={certificate.file}
                download
                className="secondary-certificate-btn"
              >
                <FaDownload />
                Download
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Certificates;
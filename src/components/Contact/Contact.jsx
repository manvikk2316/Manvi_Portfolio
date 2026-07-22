import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const clearStatusMessage = () => {
    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setStatusMessage(
        response.data.message || "Message sent successfully"
      );

      setStatusType("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      clearStatusMessage();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatusMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );

      setStatusType("error");

      clearStatusMessage();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-subtitle">Get In Touch</p>

          <h2>Contact Me</h2>

          <p>
            Have a project, job opportunity, or question? Send me a
            message.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>

            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />

              <div>
                <h4>Email</h4>
                <p>kmanvii2316@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />

              <div>
                <h4>Phone</h4>
                <p>+91-9548745213</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter message subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                className={`form-status ${statusType}`}
                role="status"
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
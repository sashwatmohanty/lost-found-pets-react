import { useState } from "react";

export function ContactFoodie() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container py-5"
      id="contact"
      style={{ maxWidth: "1100px" }}
    >
      <h2 className="text-center fw-bold mb-4">
        Get in <span style={{ color: "#FF4C4C" }}>Touch</span> 📞
      </h2>
      <p className="text-center text-muted mb-5">
        Have a question or feedback? We'd love to hear from you!
      </p>

      <div className="row">
        {/* Left Side - Contact Details */}
        <div className="col-md-5 mb-4">
          <h4 className="fw-semibold mb-3">Contact Details</h4>
          <p className="text-muted mb-2">
            <strong>📍 Address:</strong> 123 Food Street, Hyderabad, India
          </p>
          <p className="text-muted mb-2">
            <strong>📧 Email:</strong> support@foodiezone.com
          </p>
          <p className="text-muted mb-2">
            <strong>📞 Phone:</strong> +91 98765 43210
          </p>
          <p className="text-muted">
            We are available 7 days a week, from 9 AM to 11 PM.
          </p>

          {/* Social Media Links */}
          <div className="mt-4">
            <h6 className="fw-semibold mb-3">Follow Us:</h6>
            <div>
              <a
                href="#"
                className="me-3 text-danger fs-4"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="me-3 text-primary fs-4"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-info fs-4"
                title="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h4 className="mb-3 fw-semibold">Send us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control p-3 rounded-pill"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3 rounded-pill"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control p-3 rounded-4"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-100 p-3 rounded-pill"
                style={{
                  backgroundColor: "#FF4C4C",
                  color: "#fff",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

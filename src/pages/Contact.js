import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_n61fzmw', 'template_fxucery', e.target, 'sRUhKRkVOHxNlveY3')
      // emailjs.sendForm('service_m2shg38', 'template_8txduwj', e.target, 'QlaSLTiRcANhwlSL_')
      .then((result) => {
        setResponseMessage('Your message has been sent successfully!');
        setIsSending(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        setResponseMessage('There was an error sending your message. Please try again.');
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">We'd love to give you a demo</h4>
          {/* <h2 className="st-section-heading-subtitle">CONTACT Us</h2> */}
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Request Demo</h3>
             {/* Display response message */}
             <div id="st-alert" className={isError ? 'st-error-message' : 'st-success-message'}>
              {responseMessage}
            </div>
        
            <form onSubmit={handleSubmit} className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className="st-height-b0 st-height-lg-b30"></div>

          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">Contact Info</h3>
            <div className="st-contact-text">
              Just fill out the form and our team will reach out to you within 24 hours!
            </div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <i className="fas fa-envelope"></i>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <a href="mailto:info@remarkablyai.com">info@remarkablyai.com</a>
                </div>

              </div>
              <div className="st-single-contact-info">
                <i className="fas fa-phone-alt"></i>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>
                    <a href="tel:+14379995201">
                      +1 437-999-5201
                    </a>
                  </span>

                  {/* <span>+1 8756565454</span> */}

                </div>
              </div>
              <div className="st-single-contact-info">
                <i className="fas fa-map-marker-alt"></i>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>Houston, Texas</span>
                </div>
              </div>
              {/* <div className="st-social-info">
                <div className="st-social-text">Visit my social profile and get connected</div>
                <div className="st-social-link">
                  <a href="#" className="st-social-btn active">
                    <span className="st-social-icon"><i className="fab fa-dribbble"></i></span>
                    <span className="st-icon-name">Dribbble</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon"><i className="fab fa-behance"></i></span>
                    <span className="st-icon-name">Behance</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon"><i className="fab fa-twitter"></i></span>
                    <span className="st-icon-name">Twitter</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon"><i className="fab fa-linkedin"></i></span>
                    <span className="st-icon-name">LinkedIn</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}

export default Contact;

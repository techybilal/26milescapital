import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // ✅ Import EmailJS

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_94jli8o',     // 🔁 Replace with your actual service ID
        'template_l2u9nqs',    // 🔁 Replace with your actual template ID
        templateParams,
        '-27yJHJagxUg3uJWc'      // 🔁 Replace with your actual Public Key (from EmailJS)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="position-relative">
      <div className="container">
        <div className="row g-4">
          {/* Contact Details */}
          <div className="col-md-6">
            <div className="contact-block bg-white rounded-4 p-5">
              <h2 className="text-primary display-6 fw-bolder mb-5">Contact Details</h2>
              <div className="row align-items-center">
                <div className="col-8 col-md-6 mb-4 mb-md-0">
                  <img src="images/logo.svg" className="img-fluid" alt="Logo" />
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold">Address:</h6>
                  <p>22nd Floor, Tower 2, Global Magnum Park, Gurgaon.</p>
                  <h6 className="fw-bold">Email:</h6>
                  <a
                    href="mailto:info@26milescapital.com"
                    className="text-decoration-none"
                  >
                    info@26milescapital.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-block bg-white rounded-4 p-5">
              <h2 className="text-primary display-6 fw-bolder mb-5">Write To Us</h2>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-9 mb-3 mb-md-0">
                  <input
                    type="email"
                    className="form-control border border-primary border-opacity-25 p-3 mb-2"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <textarea
                    className="form-control border border-primary border-opacity-25 p-3"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="col-md-3 align-self-end">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary px-3 py-2">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {status && (
                <div className="mt-3 text-success fw-semibold">
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

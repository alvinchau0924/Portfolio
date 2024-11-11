/*
 * File Name: Contact.jsx
 * Student Name: Ping Hei Chau
 * Student ID: 301409281
 * Date: 10/1/2024
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/');
  };

  const handleChange = (event) => {
  
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info-panel">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> pchau16@my.centennialcollege.ca</p>
          <p><strong>Location:</strong> Toronto</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

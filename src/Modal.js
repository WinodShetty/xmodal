import React, { useState } from 'react';
import './Modal.css';

function Modal({ closeModal }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date of birth validation
    if (!formData.dob) {
      alert('Invalid date of birth. Please enter your date of birth.');
      return;
    }

    console.log('Form submitted:', formData);
    closeModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle close modal on clicking outside the modal content
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close-icon" onClick={closeModal}>×</button>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              pattern="^\d{10}$"
              required
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

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
    const form = e.target;

    // Phone number validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    // Date of birth validation
    if (!formData.dob) {
      alert('Please enter your date of birth.');
      return;
    }

    // Trigger native form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Form submitted:', formData);
      closeModal();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-icon" onClick={closeModal}>×</button>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              pattern="^\d{10}$"
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

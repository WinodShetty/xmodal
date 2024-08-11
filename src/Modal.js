import React, { useState } from 'react';
import './Modal.css';

function Modal({ closeModal }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (formData.email && !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }
    if (!formData.dob) errors.dob = 'Date of birth is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      closeModal();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div>
            <label>Email Address:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="dd-mm-yyyy"
            />
            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

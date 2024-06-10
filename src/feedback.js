import React, { useState } from 'react';
import './inventoryadd.css';

function AddFeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackDate: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback/viewfeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setFormData({
            name: '',
            email: '',
            phone: '',
            feedbackDate: '',
            comment: ''
        });
      } else {
        const errorText = await response.text();
        console.error('Error:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add FeedBack Record</h2>
      <label className="form-label">
        Name:
        <input className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Email:
        <input className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Phone:
        <input className="form-input"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Feedback Date:
        <input className="form-input"
          type="date"
          name="feedbackDate"
          value={formData.feedbackDate}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Comment:
        <input className="form-input"
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddFeedbackForm;
import React, { useState } from 'react';
import './inventoryadd.css';

function AddReviewForm() {
  const [formData, setFormData] = useState({
    customername: '',
    reviewDate: '',
    rating: '',
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
      const response = await fetch('http://localhost:5000/api/review/createreview', {
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
            customername: '',
            reviewDate: '',
            rating: '',
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
      <h2>Add Review Record</h2>
      <label className="form-label">
        Customer Name:
        <input className="form-input"
          type="text"
          name="customername"
          value={formData.customername}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Review Date:
        <input className="form-input"
          type="date"
          name="reviewDate"
          value={formData.reviewDate}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Rating:
        <input className="form-input"
          type="number"
          name="rating"
          value={formData.rating}
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

export default AddReviewForm;
import React, { useState } from 'react';
import './inventoryadd.css';

function AddPromoCodeForm() {
  const [formData, setFormData] = useState({
    promo_code: '',
    discount_percentage: '',
    valid_from: '',
    valid_until: '',
    usage_limit: ''
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
      const response = await fetch('http://localhost:5000/api/promocode/createpromocode', {
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
            promo_code: '',
            discount_percentage: '',
            valid_from: '',
            valid_until: '',
            usage_limit: ''
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
      <h2>Add PromoCode Record</h2>
      <label className="form-label">
        Promo Code:
        <input className="form-input"
          type="text"
          name="promo_code"
          value={formData.promo_code}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Discount Percentage:
        <input className="form-input"
          type="number"
          name="discount_percentage"
          value={formData.discount_percentage}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Valid From:
        <input className="form-input"
          type="date"
          name="valid_from"
          value={formData.valid_from}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Valid Until:
        <input className="form-input"
          type="date"
          name="valid_until"
          value={formData.valid_until}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Usage Limit:
        <input className="form-input"
          type="number"
          name="usage_limit"
          value={formData.usage_limit}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddPromoCodeForm;
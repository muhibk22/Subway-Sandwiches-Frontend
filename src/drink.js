import React, { useState } from 'react';
import './inventoryadd.css';

function AddDrinkForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    availability: ''
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
      const response = await fetch('http://localhost:5000/api/drink/createdrink', {
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
            type: '',
            price: '',
            availability: ''
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
      <h2>Add Drink Record</h2>
      <label className="form-label">
        Drink Name:
        <input className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Drink Type:
        <input className="form-input"
          type="text"
          name="type"
          value={formData.discount_percentage}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Price:
        <input className="form-input"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Availability:
        <input className="form-input"
          type="Boolean"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddDrinkForm;
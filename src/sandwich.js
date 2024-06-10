import React, { useState } from 'react';
import './inventoryadd.css';

function AddSandwichForm() {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await fetch('http://localhost:5000/api/sandwich/createsandwich', {
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
      <h2>Add Sandwich Record</h2>
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

export default AddSandwichForm;
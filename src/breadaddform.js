import React, { useState } from 'react';
import './inventoryadd.css';

function AddBreadForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: '',
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
      const response = await fetch('http://localhost:5000/api/bread/createbread', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        // Reset the form or handle success
        setFormData({
          name: '',
          type: '',
          quantity: '',
          price: '',
          availability: ''
        });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add Bread Record</h2>
      <label className="name">
        Item Name:
        <input className="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="category">
        Type:
        <input className="category"
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </label>
      <label className="quantity">
        Quantity:
        <input className="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </label>
      <label className="price">
        Price:
        <input className="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label className="availability">
        Availability:
        <input className="availability"
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBreadForm;
import React, { useState } from 'react';
import './inventoryadd.css';

function AddInventoryForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
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
      const response = await fetch('http://localhost:5000/api/inventory/createinventory', {
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
          category: '',
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

      <h2>Add Inventory Record</h2>
      <label class = "name">
        Item Name:
        <input class = "name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label class="category">
        Category:
        <input class="category"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label class="quantity">
        Quantity:
        <input class="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </label>
      <label class="price">
        Price:
        <input class = "price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <label class="availability">
        Availability:
        <input class = "availability"
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

export default AddInventoryForm;
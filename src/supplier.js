import React, { useState } from 'react';
import './inventoryadd.css';

function AddSupplierForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact_name: '',
    phone: '',
    email: '',
    address: '',
    supplied_items: ''
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
      const response = await fetch('http://localhost:5000/api/supplier/createsupplier', {
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
            contact_name: '',
            phone: '',
            email: '',
            address: '',
            supplied_items: ''
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
      <h2>Add Supplier Record</h2>
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
        Contact Name:
        <input className="form-input"
          type="text"
          name="contact_name"
          value={formData.contact_name}
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
        Email:
        <input className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Address:
        <input className="form-input"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Supplied Items:
        <input className="form-input"
          type="text"
          name="supplied_items"
          value={formData.supplied_items}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddSupplierForm;
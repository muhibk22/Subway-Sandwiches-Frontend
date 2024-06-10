import React, { useState } from 'react';
import './inventoryadd.css';

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    address: '',
    hireDate: '',
    salary: ''
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
      const response = await fetch('http://localhost:5000/api/employee/create', {
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
            role: '',
            email: '',
            phone: '',
            address: '',
            hireDate: '',
            salary: ''
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
      <h2>Add Employee Record</h2>
      <label className="form-label">
        Employee Name:
        <input className="form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Role:
        <input className="form-input"
          type="text"
          name="role"
          value={formData.role}
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
        Address:
        <input className="form-input"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Hire Date:
        <input className="form-input"
          type="date"
          name="hireDate"
          value={formData.hireDate}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Salary:
        <input className="form-input"
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployeeForm;
import React, { useState } from 'react';
import './update.css';

function Updateemployee() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneno] = useState(0);
  const [address, setAddress] = useState('');
  const [hireDate, sethireDate] = useState('');
  const [salary, setSalary] = useState(0);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/employee/viewemployee?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setRole(data.role);
        setEmail(data.email);
        setPhoneno(data.phone);
        setAddress(data.address);
        sethireDate(data.hireDate);
        setSalary(data.salary);
      } else {
        setMessage('Record not found');
        setRecord(null);
      }
    } catch (error) {
      console.error('Error fetching record:', error);
      setMessage('An error occurred while fetching the record');
      setRecord(null);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedData = { name, role, email, phone, address, hireDate, salary };
  
    try {
      const response = await fetch(`http://localhost:5000/api/employee/updateemployee`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data.employee);
        setMessage('Record updated successfully');
      } else {
        setMessage('Failed to update record');
      }
    } catch (error) {
      console.error('Error updating record:', error);
      setMessage('An error occurred while updating the record');
    }
  };

  return (
    <div className="App">

      <h1 className="text">Update Employee Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={handleSearch}>Search</button>
          {message && <p className="error">{message}</p>}
        </div>
      ) : (
        <div className="update-section">
          <h3>Record Details</h3>
          <table>
            <tbody>
              <tr>
                <td><strong>Message :</strong></td>
                <td>{message}</td>
              </tr>
              <tr>
                <td><strong>ID :</strong></td>
                <td>{record._id}</td>
              </tr>
              <tr>
                <td><strong>Name :</strong></td>
                <td>{record.name}</td>
              </tr>
              <tr>
                <td><strong>Role :</strong></td>
                <td>{record.role}</td>
              </tr>
              <tr>
                <td><strong>Email :</strong></td>
                <td>{record.email}</td>
              </tr>
              <tr>
                <td><strong>Phone No :</strong></td>
                <td>{record.phone}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{record.address}</td>
              </tr>
              <tr>
                <td><strong>Hire Date :</strong></td>
                <td>{record.hireDate}</td>
              </tr>
              <tr>
                <td><strong>Salary :</strong></td>
                <td>{record.salary}</td>
              </tr>
            </tbody>
          </table>
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
              Employee Name:
              <input
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="category">
              Role:
              <input
                className="category"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <label className="quantity">
              Email:
              <input
                className="quantity"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="price">
              Phone:
              <input
                className="price"
                type="number"
                value={phone}
                onChange={(e) => setPhoneno(parseInt(e.target.value))}
              />
            </label>
            <label className="availability">
              Address:
              <input
                className="availability"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label className="availability">
              Hire Date:
              <input
                className="availability"
                type="date"
                value={hireDate}
                onChange={(e) => sethireDate(parseInt(e.target.value))}
              />
            </label>
            <label className="price">
              Salary:
              <input
                className="price"
                type="number"
                value={salary}
                onChange={(e) => setSalary(parseInt(e.target.value))}
              />
              </label>
            <button type="submit">Update</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Updateemployee;
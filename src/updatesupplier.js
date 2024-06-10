import React, { useState } from 'react';
import './update.css';

function Updatesupplier() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [contact_name, setContactName] = useState('');
  const [phone, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [supplied_items, setSuppliedItems] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/supplier/viewsupplier?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setContactName(data.contact_name);
        setEmail(data.email);
        setPhoneno(data.phone);
        setAddress(data.address);
        setSuppliedItems(data.supplied_items);
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
    const updatedData = { name, contact_name, phone, email, address, supplied_items };
  
    try {
      const response = await fetch(`http://localhost:5000/api/supplier/updatesupplier`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data.supplier);
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

      <h1 className="text">Update Suppliers Record</h1>
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
                <td><strong>Contact Name :</strong></td>
                <td>{record.contact_name}</td>
              </tr>
              <tr>
                <td><strong>Phone No :</strong></td>
                <td>{record.phone}</td>
              </tr>
              <tr>
                <td><strong>Email :</strong></td>
                <td>{record.email}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{record.address}</td>
              </tr>
              <tr>
                <td><strong>Supplied items :</strong></td>
                <td>{record.supplied_items}</td>
              </tr>
            </tbody>
          </table>
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
              Name:
              <input
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="category">
              Contact Name:
              <input
                className="category"
                type="text"
                value={contact_name}
                onChange={(e) => setContactName(e.target.value)}
              />
            </label>
            <label className="price">
              Phone:
              <input
                className="price"
                type="text"
                value={phone}
                onChange={(e) => setPhoneno(e.target.value)}
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
              Supplied items:
              <input
                className="availability"
                type="text"
                value={supplied_items}
                onChange={(e) => setSuppliedItems(e.target.value)}
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

export default Updatesupplier;
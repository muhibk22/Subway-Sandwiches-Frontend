import React, { useState } from 'react';
import './update.css';

function Updateinventory() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/inventory/viewinventory?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setCategory(data.category);
        setQuantity(data.quantity);
        setPrice(data.price);
        setAvailability(data.availability);
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
    const updatedData = { name, category, quantity, price, availability };
  
    try {
      const response = await fetch(`http://localhost:5000/api/inventory/updateinventory`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data.inventory);
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
        
      <h1 className="text">Update Inventory Record</h1>
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
                <td><strong>Message:</strong></td>
                <td>{message}</td>
              </tr>
              <tr>
                <td><strong>ID:</strong></td>
                <td>{record._id}</td>
              </tr>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{record.name}</td>
              </tr>
              <tr>
                <td><strong>Category:</strong></td>
                <td>{record.category}</td>
              </tr>
              <tr>
                <td><strong>Quantity:</strong></td>
                <td>{record.quantity}</td>
              </tr>
              <tr>
                <td><strong>Price:</strong></td>
                <td>{record.price}</td>
              </tr>
              <tr>
                <td><strong>Availability:</strong></td>
                <td>{record.availability.toString()}</td>
              </tr>
            </tbody>
          </table>
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
              Item Name:
              <input
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="category">
              Type:
              <input
                className="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
            <label className="quantity">
              Quantity:
              <input
                className="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </label>
            <label className="price">
              Price:
              <input
                className="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </label>
            <label className="availability">
              Availability:
              <input
                className="availability"
                type="text"
                value={availability ? "true" : "false"}
                onChange={(e) => setAvailability(e.target.value.toLowerCase() === 'true')}
                placeholder="true or false"
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

export default Updateinventory;
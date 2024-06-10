import React, { useState } from 'react';
import './update.css';

function Updatediscount() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [discount_percentage, setDiscountPercentage] = useState(0);
  const [valid_from, setValidFrom] = useState('');
  const [valid_until, setValidTill] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/discount/viewdiscount?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setDiscountPercentage(data.discount_percentage);
        setValidFrom(data.valid_from);
        setValidTill(data.valid_until);
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
    const updatedData = { name,discount_percentage,valid_from,valid_until};
  
    try {
      const response = await fetch(`http://localhost:5000/api/discount/updatediscount`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data.discount);
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

      <h1 className="text">Update Discount Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
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
                <td><strong>name :</strong></td>
                <td>{record.name}</td>
              </tr>
              <tr>
                <td><strong>Discount % :</strong></td>
                <td>{record.discount_percentage}</td>
              </tr>
              <tr>
                <td><strong>Valid From :</strong></td>
                <td>{record.valid_from}</td>
              </tr>
              <tr>
                <td><strong>Valid Until :</strong></td>
                <td>{record.valid_until}</td>
              </tr>
            </tbody>
          </table>
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
              Promo Code:
              <input
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="category">
              Discount %:
              <input
                className="category"
                type="number"
                value={discount_percentage}
                onChange={(e) => setDiscountPercentage(parseInt(e.target.value))}
              />
            </label>
            <label className="quantity">
              Valid From:
              <input
                className="quantity"
                type="date"
                value={valid_from}
                onChange={(e) => setValidFrom(e.target.value)}
              />
            </label>
            <label className="price">
             Valid until:
              <input
                className="price"
                type="date"
                value={valid_until}
                onChange={(e) => setValidTill(e.target.value)}
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

export default Updatediscount;
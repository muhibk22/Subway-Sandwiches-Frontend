import React, { useState } from 'react';
import './delete.css';

function DeletePromoCode() {
  const [promo_code, setPromoCode] = useState('');
  const [record, setRecord] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/promocode/viewpromocodes?promo_code=${promo_code}`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setRecord(data);
          setMessage('');
        } else {
          setMessage('Record not found');
          setRecord(null);
        }
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

  const handleDelete = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/promocode/deletepromocode?promo_code=${promo_code}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Record deleted successfully');
        setRecord(null);
      } else {
        setMessage('Failed to delete record');
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      setMessage('An error occurred while deleting the record');
    }
  };

  return (
    <div className="App">

      <h1 className="text">Delete Promo Code Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={promo_code}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Promo Code"
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
                <td><strong>ID:</strong></td>
                <td>{record._id}</td>
              </tr>
              <tr>
                <td><strong>Promo Code:</strong></td>
                <td>{record.promo_code}</td>
              </tr>
              <tr>
                <td><strong>Discount Percentage:</strong></td>
                <td>{record.discount_percentage}</td>
              </tr>
              <tr>
                <td><strong>Valid From:</strong></td>
                <td>{record.valid_from}</td>
              </tr>
              <tr>
                <td><strong>Valid Until:</strong></td>
                <td>{record.valid_until}</td>
              </tr>
              <tr>
                <td><strong>Usage Limit:</strong></td>
                <td>{record.usage_limit}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleDelete}>Delete Record</button>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default DeletePromoCode;

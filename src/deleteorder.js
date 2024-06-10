import React, { useState } from 'react';
import './delete.css';

function DeleteOrder() {
  const [customername, setcustomername] = useState('');
  const [record, setRecord] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/order/vieworder?customername=${customername}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setMessage('');
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
      const response = await fetch(`http://localhost:5000/api/order/deleteorder?customername=${customername}`, {
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
      <h1 className="text">Delete Order Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={customername}
            onChange={(e) => setcustomername(e.target.value)}
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
                <td><strong>Message:</strong></td>
                <td>{message}</td>
              </tr>
              <tr>
                <td><strong>ID:</strong></td>
                <td>{record._id}</td>
              </tr>
              <tr>
                <td><strong>Customer Name:</strong></td>
                <td>{record.customername}</td>
              </tr>
              <tr>
                <td><strong>Order Date:</strong></td>
                <td>{record.orderDate}</td>
              </tr>
              <tr>
                <td><strong>Items:</strong></td>
                <td>{record.items}</td>
              </tr>
              <tr>
                <td><strong>Total Amount:</strong></td>
                <td>{record.totalAmount}</td>
              </tr>
              <tr>
                <td><strong>Payment Method:</strong></td>
                <td>{record.paymentMethod}</td>
              </tr>
              <tr>
                <td><strong>Delivery Address:</strong></td>
                <td>{record.DeliveryAddress}</td>
              </tr>
              <tr>
                <td><strong>Delivery Date:</strong></td>
                <td>{record.deliveryDate}</td>
              </tr>
              <tr>
                <td><strong>Promo Code:</strong></td>
                <td>{record.promocode}</td>
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

export default DeleteOrder
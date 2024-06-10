import React, { useState } from 'react';
import './delete.css';


function Deletereview() {
  const [customername, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/review/viewreview?customername=${customername}`);
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
      const response = await fetch(`http://localhost:5000/api/review/deletereview?customername=${customername}`, {
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
      <h1 className="text">Delete Reviews Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={customername}
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
                <td><strong>Review Date:</strong></td>
                <td>{record.reviewDate}</td>
              </tr>
              <tr>
                <td><strong>Rating:</strong></td>
                <td>{record.rating}</td>
              </tr>
              <tr>
                <td><strong>Comment:</strong></td>
                <td>{record.comment}</td>
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

export default Deletereview;

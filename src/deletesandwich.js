import React, { useState } from 'react';
import './delete.css';

function DeleteSandwich() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/sandwich/viewsandwiches?name=${name}`);
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
      const response = await fetch(`http://localhost:5000/api/sandwich/deletesandwich?name=${name}`, {
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
      <h1 className="text">Delete Sandwich Record</h1>
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
                <td><strong>Price:</strong></td>
                <td>{record.price}</td>
              </tr>
              <tr>
                <td><strong>Availability:</strong></td>
                <td>{record.availability.toString()}</td>
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

export default DeleteSandwich
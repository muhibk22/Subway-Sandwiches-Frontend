import React, { useState } from 'react';
import './update.css';

function Updatereview() {
  const [customername, setCustomername] = useState('');
  const [record, setRecord] = useState(null);
  const [reviewDate, setreviewDate] = useState();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/review/viewreview?customername=${customername}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setreviewDate(data.reviewDate);
        setRating(data.rating);
        setComment(data.comment);
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
    const updatedData = { customername,reviewDate,rating,comment};
  
    try {
      const response = await fetch(`http://localhost:5000/api/review/updatereview`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
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
      <h1 className="text">Update FeedBack Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={customername}
            onChange={(e) => setCustomername(e.target.value)}
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
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
              Customer Name:
              <input
                className="name"
                type="text"
                value={customername}
                onChange={(e) => setCustomername(e.target.value)}
              />
            </label>
            <label className="category">
             Review Date:
              <input
                className="category"
                type="date"
                value={reviewDate}
                onChange={(e) => setreviewDate(e.target.value)}
              />
            </label>
            <label className="quantity">
              Rating:
              <input
                className="quantity"
                type="number"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
            </label>
            <label className="availability">
              Comment:
              <input
                className="availability"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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

export default Updatereview;
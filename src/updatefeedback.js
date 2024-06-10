import React, { useState } from 'react';
import './update.css';

function Updatefeedback() {
  const [name, setName] = useState('');
  const [record, setRecord] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [feedbackDate, setFeedbackDate] = useState();
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/viewfeedback?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setEmail(data.email);
        setPhone(data.phone);
        setFeedbackDate(data.feedbackDate);
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
    const updatedData = { name,email,phone,feedbackDate,comment};
  
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/updatefeedback`, {
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
                <td><strong>Email:</strong></td>
                <td>{record.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{record.phone}</td>
              </tr>
              <tr>
                <td><strong>Feedback Date:</strong></td>
                <td>{record.feedbackDate}</td>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="category">
             Email:
              <input
                className="category"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="quantity">
              Phone No:
              <input
                className="quantity"
                type="number"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </label>
            <label className="price">
              Feedback Date:
              <input
                className="price"
                type="date"
                value={feedbackDate}
                onChange={(e) => setFeedbackDate(e.target.value)}
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

export default Updatefeedback;
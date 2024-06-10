import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewFeedbackData() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback//viewfeedbacks');
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div>

      <header className="cards-header">
        <h1>Viewing Feedback Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Feedback Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          { feedbackData.map((feedback) => (
            <tr key={feedback._id}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.feedbackDate}</td>
              <td>{feedback.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewFeedbackData;

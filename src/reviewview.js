import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewReviewData() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/review/viewreview');
        setReviewData(response.data);
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
        <h1>Viewing Review Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Review Date</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          { reviewData.map((review) => (
            <tr key={review._id}>
              <td>{review.customername}</td>
              <td>{review.reviewDate}</td>
              <td>{review.rating}</td>
              <td>{review.comment }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewReviewData;

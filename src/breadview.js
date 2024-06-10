import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewBreadData() {
  const [breadData, setBreadData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bread/viewbreads');
        setBreadData(response.data);
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
        <h1>Viewing Bread Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          { breadData.map((bread) => (
            <tr key={bread._id}>
              <td>{bread.name}</td>
              <td>{bread.type}</td>
              <td>{bread.quantity}</td>
              <td>{bread.price}</td>
              <td>{bread.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBreadData;

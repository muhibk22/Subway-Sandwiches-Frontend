import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewSaladData() {
  const [saladData, setSaladData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/salad/viewsalads');
        setSaladData(response.data);
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
        <h1>Viewing Salad Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          { saladData.map((salad) => (
            <tr key={salad._id}>
              <td>{salad.name}</td>
              <td>{salad.price}</td>
              <td>{salad.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSaladData;

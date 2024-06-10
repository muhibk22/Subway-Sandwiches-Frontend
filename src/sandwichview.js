import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewSandwichData() {
  const [sandwichData, setSandwichData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sandwich/viewsandwich');
        setSandwichData(response.data);
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
        <h1>Viewing Sandwich Data</h1>
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
          { sandwichData.map((sandwich) => (
            <tr key={sandwich._id}>
              <td>{sandwich.name}</td>
              <td>{sandwich.price}</td>
              <td>{sandwich.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSandwichData;

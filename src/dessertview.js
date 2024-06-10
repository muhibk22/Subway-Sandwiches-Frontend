import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewDessertData() {
  const [dessertData, setDessertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dessert/viewdessert');
        setDessertData(response.data);
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
        <h1>Viewing Dessert Data</h1>
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
          { dessertData.map((dessert) => (
            <tr key={dessert._id}>
              <td>{dessert.name}</td>
              <td>{dessert.price}</td>
              <td>{dessert.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDessertData;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewDrinkData() {
  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drink/viewdrinks');
        setDrinkData(response.data);
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
        <h1>Viewing Drink Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          { drinkData.map((drink) => (
            <tr key={drink._id}>
              <td>{drink.name}</td>
              <td>{drink.type}</td>
              <td>{drink.price}</td>
              <td>{drink.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDrinkData;

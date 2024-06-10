import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewDiscountData() {
  const [discountData, setDiscountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/discount/viewdiscounts');
        setDiscountData(response.data);
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
        <h1>Viewing Discount Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Discount Name</th>
            <th>Discount %</th>
            <th>Valid From</th>
            <th>Valid Till</th>
          </tr>
        </thead>
        <tbody>
          { discountData.map((discount) => (
            <tr key={discount._id}>
              <td>{discount.name}</td>
              <td>{discount.discount_percentage}</td>
              <td>{discount.valid_from}</td>
              <td>{discount.valid_until}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDiscountData;

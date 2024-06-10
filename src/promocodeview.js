import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewPromocodeData() {
  const [promocodeData, setPromoCodeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/promocode/viewpromocode');
        setPromoCodeData(response.data);
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
        <h1>Viewing Promo Code Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Promo Code</th>
            <th>Discount %</th>
            <th>Valid From</th>
            <th>Valid Till</th>
            <th>Usage Limit</th>
          </tr>
        </thead>
        <tbody>
          { promocodeData.map((promocode) => (
            <tr key={promocode._id}>
              <td>{promocode.promo_code}</td>
              <td>{promocode.discount_percentage}</td>
              <td>{promocode.valid_from}</td>
              <td>{promocode.valid_until}</td>
              <td>{promocode.usage_limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPromocodeData;

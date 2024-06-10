import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewInventoryData() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/inventory/viewinventorys');
        setInventoryData(response.data);
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
        <h1>Viewing Inventory Data</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          { inventoryData.map((inventory) => (
            <tr key={inventory._id}>
              <td>{inventory.name}</td>
              <td>{inventory.category}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.price}</td>
              <td>{inventory.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewInventoryData;

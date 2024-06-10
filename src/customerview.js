import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewCustomerData() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customer/viewcustomers');
        setCustomerData(response.data);
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
        <h1>Viewing Customer Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Registration date</th>
            <th>Loyality Points</th>
          </tr>
        </thead>
        <tbody>
          { customerData.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.registrationDate}</td>
              <td>{customer.loyaltyPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCustomerData;
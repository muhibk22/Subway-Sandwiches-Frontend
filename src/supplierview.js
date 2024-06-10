import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewSupplierData() {
  const [supplierData, setSupplierData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/supplier/viewsuppliers');
        setSupplierData(response.data);
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
        <h1>Viewing Supplier Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Supplied Items</th>
            </tr>
        </thead>
        <tbody>
          { supplierData.map((supplier) => (
            <tr key={supplier._id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact_name}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>{supplier.address}</td>
              <td>{supplier.supplied_items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSupplierData;

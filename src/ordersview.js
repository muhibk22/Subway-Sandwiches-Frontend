import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewOrderData() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/order/vieworders');
        setOrderData(response.data);
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
        <h1>Viewing Order Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Payment Method</th>
            <th>Delivery Address</th>
            <th>Delivery Date</th>
            <th>Promo Code</th>
          </tr>
        </thead>
        <tbody>
          { orderData.map((Order) => (
            <tr key={Order._id}>
              <td>{Order.customername}</td>
              <td>{Order.orderDate}</td>
              <td>{Order.items}</td>
              <td>{Order.totalAmount}</td>
              <td>{Order.paymentMethod}</td>
              <td>{Order.DeliveryAddress}</td>
              <td>{Order.deliveryDate}</td>
              <td>{Order.promocode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewOrderData;
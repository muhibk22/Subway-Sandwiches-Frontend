import React, { useState } from 'react';
import './update.css';
function Updateorder() {
  const [customername, setcustomername] = useState('');
  const [record, setRecord] = useState(null);
  const [orderDate, setorderdate] = useState();
  const [items, setitems] = useState('');
  const [totalAmount, settotalAmount] = useState(0);
  const [paymentMethod, setpaymentMethod] = useState('');
  const [DeliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryDate, setdeliveryDate] = useState();
  const [promocode, setpromocode] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/order/vieworder?customername=${customername}`);
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setorderdate(data.orderDate);
        setitems(data.items);
        settotalAmount(data.totalAmount);
        setpaymentMethod(data.paymentMethod);
        setDeliveryAddress(data.DeliveryAddress);
        setdeliveryDate(data.deliveryDate);
        setpromocode(data.promocode);
      } else {
        setMessage('Record not found');
        setRecord(null);
      }
    } catch (error) {
      console.error('Error fetching record:', error);
      setMessage('An error occurred while fetching the record');
      setRecord(null);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedData = { customername, orderDate,items, totalAmount, paymentMethod, DeliveryAddress, deliveryDate,promocode };
  
    try {
      const response = await fetch(`http://localhost:5000/api/order/updateorder`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecord(data);
        setMessage('Record updated successfully');
      } else {
        setMessage('Failed to update record');
      }
    } catch (error) {
      console.error('Error updating record:', error);
      setMessage('An error occurred while updating the record');
    }
  };

  return (
    <div className="App">

      <h1 className="text">Update Employee Record</h1>
      {!record ? (
        <div className="search-section">
          <h3>Search for a Record</h3>
          <input
            type="text"
            value={customername}
            onChange={(e) => setcustomername(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={handleSearch}>Search</button>
          {message && <p className="error">{message}</p>}
        </div>
      ) : (
        <div className="update-section">
          <h3>Record Details</h3>
          <table>
            <tbody>
              <tr>
                <td><strong>Message :</strong></td>
                <td>{message}</td>
              </tr>
              <tr>
                <td><strong>ID :</strong></td>
                <td>{record._id}</td>
              </tr>
              <tr>
                <td><strong>Customer Name :</strong></td>
                <td>{record.customername}</td>
              </tr>
              <tr>
                <td><strong>Order Date :</strong></td>
                <td>{record.orderDate}</td>
              </tr>
              <tr>
                <td><strong>Items :</strong></td>
                <td>{record.items}</td>
              </tr>
              <tr>
                <td><strong>Total Amount :</strong></td>
                <td>{record.totalAmount}</td>
              </tr>
              <tr>
                <td><strong>Payment Method :</strong></td>
                <td>{record.paymentMethod}</td>
              </tr>
              <tr>
                <td><strong>Delivery Address :</strong></td>
                <td>{record.DeliveryAddress}</td>
              </tr>
              <tr>
                <td><strong>Delivery Date :</strong></td>
                <td>{record.deliveryDate}</td>
              </tr>
              <tr>
                <td><strong>Promo Code :</strong></td>
                <td>{record.promocode}</td>
              </tr>
            </tbody>
          </table>
          <h3>Update Record</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="name">
            Customer Name:
              <input
                className="name"
                type="text"
                value={customername}
                onChange={(e) => setcustomername(e.target.value)}
              />
            </label>
            <label className="category">
             Order Date:
              <input
                className="category"
                type="date"
                value={orderDate}
                onChange={(e) => setorderdate(e.target.value)}
              />
            </label>
            <label className="quantity">
            Items:
              <input
                className="quantity"
                type="text"
                value={items}
                onChange={(e) => setitems(e.target.value)}
              />
            </label>
            <label className="price">
            Total Amount:
              <input
                className="price"
                type="number"
                value={totalAmount}
                onChange={(e) => settotalAmount(parseInt(e.target.value))}
              />
            </label>
            <label className="availability">
            Payment Method:
              <input
                className="availability"
                type="text"
                value={paymentMethod}
                onChange={(e) => setpaymentMethod(e.target.value)}
              />
            </label>
            <label className="availability">
            Delivery Address:
              <input
                className="availability"
                type="text"
                value={DeliveryAddress}
                onChange={(e) => setdeliveryDate(e.target.value)}
              />
            </label>
            <label className="price">
             Delivery Date:
              <input
                className="price"
                type="date"
                value={deliveryDate}
                onChange={(e) => setdeliveryDate(e.target.value)}
              />
              </label>
              <label className="price">
               Promo Code:
              <input
                className="price"
                type="text"
                value={promocode}
                onChange={(e) => setpromocode(e.target.value)}
              />
              </label>
            <button type="submit">Update</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Updateorder;
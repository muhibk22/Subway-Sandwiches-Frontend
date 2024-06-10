import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Order.css';
import sandwichImg from './components/sandwich.jpg';
import saladImg from './components/salad.jpg';
import drinkImg from './components/drinks.jpg';
import dessertImg from './components/cookies.jpg';

function OrderPage() {
  const [desserts, setDesserts] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [salads, setSalads] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [currentDessertIndex, setCurrentDessertIndex] = useState(0);
  const [currentSandwichIndex, setCurrentSandwichIndex] = useState(0);
  const [currentSaladIndex, setCurrentSaladIndex] = useState(0);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [orderFormVisible, setOrderFormVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    customername: '',
    orderDate: '',
    items: '',
    totalAmount: '',
    paymentMethod: '',
    DeliveryAddress: '',
    promocode: ''
  });
  const [orderMessage, setOrderMessage] = useState('');

  useEffect(() => {
    axios.get('/api/dessert/viewdessert')
      .then(response => setDesserts(response.data))
      .catch(error => console.error('Error fetching desserts:', error));

    axios.get('/api/sandwich/viewsandwich')
      .then(response => setSandwiches(response.data))
      .catch(error => console.error('Error fetching sandwiches:', error));

    axios.get('/api/salad/viewsalads')
      .then(response => setSalads(response.data))
      .catch(error => console.error('Error fetching salads:', error));

    axios.get('/api/drink/viewdrinks')
      .then(response => setDrinks(response.data))
      .catch(error => console.error('Error fetching drinks:', error));
  }, []);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const itemsArray = orderDetails.items.split(',').map(item => item.trim());
      await axios.post('/api/order/createorder', {
        ...orderDetails,
        items: itemsArray
      });
      setOrderMessage('Order placed successfully!');
      setOrderDetails({
        customername: '',
        orderDate: '',
        items: '',
        totalAmount: '',
        paymentMethod: '',
        DeliveryAddress: '',
        promocode: ''
      });
      setOrderFormVisible(false);
    } catch (error) {
      setOrderMessage('Error placing order');
      console.error('Error placing order:', error);
    }
  };

  const openOrderForm = () => {
    setOrderFormVisible(true);
  };

  const closeOrderForm = () => {
    setOrderFormVisible(false);
  };

  const handleNextItem = (category) => {
    switch (category) {
      case 'dessert':
        setCurrentDessertIndex((currentDessertIndex + 1) % desserts.length);
        break;
      case 'sandwich':
        setCurrentSandwichIndex((currentSandwichIndex + 1) % sandwiches.length);
        break;
      case 'salad':
        setCurrentSaladIndex((currentSaladIndex + 1) % salads.length);
        break;
      case 'drink':
        setCurrentDrinkIndex((currentDrinkIndex + 1) % drinks.length);
        break;
      default:
        break;
    }
  };

  return (
    <div className="order-page">
      <h2 className='heading'>Place Your Order</h2>
      <div className="menu">
        <div className="menu-category">
          <h3>Sandwiches</h3>
          {sandwiches.length > 0 && (
            <div key={sandwiches[currentSandwichIndex]._id} className="menu-item">
              <img src={sandwichImg} alt={sandwiches[currentSandwichIndex].name} />
              <div className="item-details">
                <p>{sandwiches[currentSandwichIndex].name}</p>
                <p>Price: {sandwiches[currentSandwichIndex].price} PKR</p>
                <p>Availability: {sandwiches[currentSandwichIndex].availability ? 'Available' : 'Not Available'}</p>
              </div>
            </div>
          )}
          <div className='order-buttons'>
          <button onClick={() => handleNextItem('sandwich')}>Next Item</button>
          <button onClick={openOrderForm}>Order</button>
          </div>
        </div>
        <div className="menu-category">
          <h3>Desserts</h3>
          {desserts.length > 0 && (
            <div key={desserts[currentDessertIndex]._id} className="menu-item">
              <img src={dessertImg} alt={desserts[currentDessertIndex].name} />
              <div className="item-details">
                <p>{desserts[currentDessertIndex].name}</p>
                <p>Price: {desserts[currentDessertIndex].price} PKR</p>
                <p>Availability: {desserts[currentDessertIndex].availability ? 'Available' : 'Not Available'}</p>
              </div>
            </div>
          )}
          <div className='order-buttons'>
          <button onClick={() => handleNextItem('dessert')}>Next Item</button>
          <button onClick={openOrderForm}>Order</button>
          </div>
        </div>
        <div className="menu-category">
          <h3>Salads</h3>
          {salads.length > 0 && (
            <div key={salads[currentSaladIndex]._id} className="menu-item">
              <img src={saladImg} alt={salads[currentSaladIndex].name} />
              <div className="item-details">
                <p>{salads[currentSaladIndex].name}</p>
                <p>Price: {salads[currentSaladIndex].price} PKR</p>
                <p>Availability: {salads[currentSaladIndex].availability ? 'Available' : 'Not Available'}</p>
              </div>
            </div>
          )}
          <div className='order-buttons'>
          <button onClick={() => handleNextItem('salad')}>Next Item</button>
          <button onClick={openOrderForm}>Order</button>
          </div>
        </div>
        <div className="menu-category">
          <h3>Drinks</h3>
          {drinks.length > 0 && (
            <div key={drinks[currentDrinkIndex]._id} className="menu-item">
              <img src={drinkImg} alt={drinks[currentDrinkIndex].name} />
              <div className="item-details">
                <p>{drinks[currentDrinkIndex].name}</p>
                <p>Size: {drinks[currentDrinkIndex].type}</p>
                <p>Price: {drinks[currentDrinkIndex].price} PKR</p>
                <p>Availability: {drinks[currentDrinkIndex].availability ? 'Available' : 'Not Available'}</p>
              </div>
            </div>
          )}
          <div className='order-buttons'>
          <button onClick={() => handleNextItem('drink')}>Next Item</button>
          <button onClick={openOrderForm}>Order</button>
          </div>
        </div>
      </div>
      {orderFormVisible && (
        <div className="order-form-overlay">
          <div className="order-form">
            <h2>Order Form</h2>
            <form onSubmit={handleOrderSubmit}>
              <label>
                Customer Name:
                <input
                  type="text"
                  value={orderDetails.customername}
                  onChange={e => setOrderDetails({ ...orderDetails, customername: e.target.value })}
                  required
                />
              </label>
              <label>
                Order Date:
                <input
                  type="date"
                  value={orderDetails.orderDate}
                  onChange={e => setOrderDetails({ ...orderDetails, orderDate: e.target.value })}
                  required
                />
              </label>
              <label>
                Items:
                <input
                  type="text"
                  value={orderDetails.items}
                  onChange={e => setOrderDetails({ ...orderDetails, items: e.target.value })}
                  placeholder="Enter items separated by commas"
                  required
                />
              </label>
              <label>
                Total Amount:
                <input
                  type="number"
                  value={orderDetails.totalAmount}
                  onChange={e => setOrderDetails({ ...orderDetails, totalAmount: e.target.value })}
                  required
                />
              </label>
              <label>
                Payment Method:
                <input
                  type="text"
                  value={orderDetails.paymentMethod}
                  onChange={e => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
                  required
                />
              </label>
              <label>
                Delivery Address:
                <input
                  type="text"
                  value={orderDetails.DeliveryAddress}
                  onChange={e => setOrderDetails({ ...orderDetails, DeliveryAddress: e.target.value })}
                  required
                />
              </label>
              <label>
                Promo Code:
                <input
                  type="text"
                  value={orderDetails.promocode}
                  onChange={e => setOrderDetails({ ...orderDetails, promocode: e.target.value })}
                  required
                />
              </label>
              <button type="submit">Submit Order</button>
            </form>
            {orderMessage && <p>{orderMessage}</p>}
            <button className="close-button" onClick={closeOrderForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;

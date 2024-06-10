import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Card() {
  return (
    <div className="cards">
      <header className="cards-header">
        <h1>Subway Admin</h1>
      </header>
      <div className="container">
        <div className="card">
          <h2>Inventory</h2>
          <div className="actions">
          <Link to="/add-inventory">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-inventory">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-inventory">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-inventory">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Bread</h2>
          <div className="actions">
            <Link to="/add-bread">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-bread">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-bread">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-bread">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Sandwich</h2>
          <div className="actions">
          <Link to="/add-sandwich">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-sandwich">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-sandwich">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-sandwich">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Desserts</h2>
          <div className="actions">
          <Link to="/add-dessert">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-dessert">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-dessert">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-dessert">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Drinks</h2>
          <div className="actions">
          <Link to="/add-drink">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-drink">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-drink">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-drink">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Salad</h2>
          <div className="actions">
          <Link to="/add-salad">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-salad">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-salad">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-salad">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Employees</h2>
          <div className="actions">
          <Link to="/add-employee">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-employee">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-employee">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-employee">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Promo Codes</h2>
          <div className="actions">
          <Link to="/add-promocode">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-promocode">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-promocode">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-promocode">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Suppliers</h2>
          <div className="actions">
          <Link to="/add-supplier">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-supplier">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-supplier">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-supplier">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Discount</h2>
          <div className="actions">
          <Link to="/add-discount">
              <button class = "add">Add</button>
            </Link>
            <Link to="/view-discount">
            <button class = "view">View</button>
            </Link>
            <Link to="/update-discount">
            <button class = "update">Update</button>
            </Link>
            <Link to="/delete-discount">
            <button class = "delete">Delete</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <h2>Customer</h2>
          <div className="actions">
          <Link to="/view-customer">
           <button class = "add">View</button>
           </Link>
           <Link to="/update-customer">
            <button class = "view">Update</button>
            </Link>
            <Link to="/delete-customer">
            <button class = "update">Delete</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <h2>Orders</h2>
          <div className="actions">
          <Link to="/view-order">
          <button class = "add">View</button>
          </Link>
          <Link to="/update-order">
            <button class = "view">Update</button>
            </Link>
            <Link to="/delete-order">
            <button class = "update">Delete</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <h2>Review</h2>
          <div className="actions">
          <Link to="/view-review">
              <button class = "add">View</button>
              </Link>
              <Link to="/update-review">
            <button class = "view">Update</button>
            </Link>
            <Link to="/delete-review">
            <button class = "update">Delete</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <h2>Feedback</h2>
          <div className="actions">
          <Link to="/view-feedback">
            <button class = "add">View</button>
            </Link>
            <Link to="/update-feedback">
            <button class = "view">Update</button>
            </Link>
            <Link to="/delete-feedback">
            <button class = "update">Delete</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
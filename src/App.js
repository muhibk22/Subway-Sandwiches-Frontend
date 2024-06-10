import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Reviews from './Reviews';
import Order from './Order';
import Dashboard from './Dashboard';

import Card from './card';

import AddInventoryForm from './inventoryaddform';
import AddBreadForm from './breadaddform';
import AddDessertForm from './dessert';
import AddDiscountForm from './discount';
import AddDrinkForm from './drink';
import AddEmployeeForm from './employee';
import AddPromoCodeForm from './promocode';
import AddSaladForm from './salad';
import AddSandwichForm from './sandwich';
import AddSupplierForm from './supplier';

import ViewInventoryData from './inventoryview';
import ViewBreadData from './breadview';
import ViewSandwichData from './sandwichview';
import ViewDessertData from './dessertview';
import ViewDrinkData from './drinkview';
import ViewSaladData from './saladview';
import ViewEmployeeData from './employeeview';
import ViewPromocodeData from './promocodeview';
import ViewSupplierData from './supplierview';
import ViewDiscountData from './discountview';
import ViewCustomerData from './customerview';
import ViewOrderData from './ordersview';
import ViewReviewData from './reviewview';
import ViewFeedbackData from './feedbackview';

import Updatebread from './updatebread';
import Updateinventory from './updateinventory';
import Updatesandwich from './updatesandwich';
import Updatedessert from './updatedessert';
import Updatedrink from './updatedrink';
import Updatesalad from './updatesalad';
import Updateemployee from './updateemployee';
import Updatepromocode from './updatepromocode';
import Updatesupplier from './updatesupplier';
import Updatediscount from './updatediscount';
import Updatecustomer from './updatecustomer';
import Updatefeedback from './updatefeedback';
import Updatereview from './updatereview';
import Updateorder from './updateorder';

import DeleteBread from './deletebread';
import DeleteInventory from './deleteinventory';
import DeleteSandwich from './deletesandwich';
import DeleteDessert from './deleteDessert';
import DeleteDrink from './deleteDrinks';
import DeleteSalad from './deleteSalad';
import DeleteEmployee from './deleteEmployee';
import DeleteSupplier from './deleteSupplier';
import DeleteDiscount from './deleteDiscount';
import DeletePromoCode from './deletePromoCode';
import DeleteCustomer from './deletecustomer';
import DeleteOrder from './deleteorder';
import Deletereview from './deletereview';
import Deletefeedback from './deletefeedback';

function Layout() {
  return (
    <div>
      <Card />
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', true);
    setIsAuthenticated(true);
  };

 

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Order />} />
          <Route path="/customized-order" element={<div>Coming soon!</div>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
         
      <Route path="/" element={<Layout />} />
      <Route path="/add-inventory" element={<AddInventoryForm />} />
      <Route path="/add-bread" element={<AddBreadForm />} />
      <Route path="/add-sandwich" element={<AddSandwichForm />} />
      <Route path="/add-dessert" element={<AddDessertForm />} />
      <Route path="/add-drink" element={<AddDrinkForm />} />
      <Route path="/add-salad" element={<AddSaladForm />} />
      <Route path="/add-employee" element={<AddEmployeeForm />} />
      <Route path="/add-promocode" element={<AddPromoCodeForm />} />
      <Route path="/add-supplier" element={<AddSupplierForm />} />
      <Route path="/add-discount" element={<AddDiscountForm />} />

      <Route path="/view-inventory" element={<ViewInventoryData />} />
      <Route path="/view-bread" element={<ViewBreadData />} />
      <Route path="/view-sandwich" element={<ViewSandwichData />} />
      <Route path="/view-dessert" element={<ViewDessertData />} />
      <Route path="/view-drink" element={<ViewDrinkData />} />
      <Route path="/view-salad" element={<ViewSaladData />} />
      <Route path="/view-employee" element={<ViewEmployeeData />} />
      <Route path="/view-promocode" element={<ViewPromocodeData />} />
      <Route path="/view-supplier" element={<ViewSupplierData />} />
      <Route path="/view-discount" element={<ViewDiscountData />} />
      <Route path="/view-customer" element={<ViewCustomerData />} />
      <Route path="/view-order" element={<ViewOrderData />} />
      <Route path="/view-review" element={<ViewReviewData />} />
      <Route path="/view-feedback" element={<ViewFeedbackData />} />

      <Route path="/update-inventory" element={<Updateinventory />} />
      <Route path="/update-bread" element={<Updatebread />} />
      <Route path="/update-sandwich" element={<Updatesandwich />} />
      <Route path="/update-dessert" element={<Updatedessert />} />
      <Route path="/update-drink" element={<Updatedrink />} />
      <Route path="/update-salad" element={<Updatesalad />} />
      <Route path="/update-employee" element={<Updateemployee />} />
      <Route path="/update-promocode" element={<Updatepromocode />} />
      <Route path="/update-supplier" element={<Updatesupplier />} />
      <Route path="/update-discount" element={<Updatediscount />} />
      <Route path="/update-customer" element={<Updatecustomer />} />
      <Route path="/update-feedback" element={<Updatefeedback />} />
      <Route path="/update-review" element={<Updatereview />} />
      <Route path="/update-order" element={<Updateorder />} />

      <Route path="/delete-inventory" element={<DeleteInventory />} />
      <Route path="/delete-bread" element={<DeleteBread />} />
      <Route path="/delete-sandwich" element={<DeleteSandwich />} />
      <Route path="/delete-dessert" element={<DeleteDessert />} />
      <Route path="/delete-drink" element={<DeleteDrink />} />
      <Route path="/delete-salad" element={<DeleteSalad />} />
      <Route path="/delete-employee" element={<DeleteEmployee />} />
      <Route path="/delete-promocode" element={<DeletePromoCode />} />
      <Route path="/delete-supplier" element={<DeleteSupplier />} />
      <Route path="/delete-discount" element={<DeleteDiscount />} />
      <Route path="/delete-customer" element={<DeleteCustomer />} />
      <Route path="/delete-order" element={<DeleteOrder />} />
      <Route path="/delete-review" element={<Deletereview />} />
      <Route path="/delete-feedback" element={<Deletefeedback />} />
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;

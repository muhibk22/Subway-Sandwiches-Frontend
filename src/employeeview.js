import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './view.css';

function ViewEmployeeData() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employee/viewemployees');
        setEmployeeData(response.data);
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
        <h1>Viewing Employee Data</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Hire date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          { employeeData.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.address}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmployeeData;
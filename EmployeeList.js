// EmployeeList.js

import { useState, useEffect } from 'react';
// Assuming you're using axios for HTTP requests
import './EmployeeList.css';

import { NavLink } from 'react-router-dom';

export const EmployeeList = ({ empl }) => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    // const handleDelete = async (id) => {
    //     try {
    //         const response = await fetch(`/api/auth/deleteEmployee/${id}`, {
    //             method: 'DELETE'
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to delete employee');
    //         }

    //         // Remove the deleted employee from the list
    //         setEmployees(employees.filter(employee => employee.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting employee:', error);
    //         // Handle error, e.g., show error message to the user
    //     }
    // }


    useEffect(() => {

        fetch('api/auth/showEmployee')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, []); // Empty dependency array means this effect runs only once after the initial render

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="employee-list">
            <div className="header">
                <h2>Employee List</h2>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="total-count">Total Employees: {employees.length}</div>
                <NavLink to="/CreateEmployee" className="create-link">Create Employee</NavLink>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Unique ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td><img src={employee.image} alt={employee.name} /></td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.courses}</td>
                            <td>{employee.createdate}</td>
                            <td>
                                <NavLink to="/EditEmployee" className="action-link">Edit</NavLink>
                                {/* <a href={`/delete/${employee.id}`} className="action-link">Delete</a> */}
                                {/* <button onClick={() => handleDelete(employee.id)} className="action-btn">Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


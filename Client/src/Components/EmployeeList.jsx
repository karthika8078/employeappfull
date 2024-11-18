import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/api/employees', {
                headers: { 'x-auth-token': token },
            });
            setEmployees(res.data);
        };
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/employees/${id}`, {
            headers: { 'x-auth-token': token },
        });
        setEmployees(employees.filter(emp => emp._id !== id));
    };

    return (
        <div>
            <h1>Employee List</h1>
            <Link to="/add">Add Employee</Link>
            <ul>
                {employees.map(emp => (
                    <li key={emp._id}>
                        {emp.name} - {emp.designation}
                        <Link to={`/edit/${emp._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(emp._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;

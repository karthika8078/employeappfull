import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        salary: '',
        department: '',
        location: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/employees', formData, {
            headers: { 'x-auth-token': token },
        });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="designation" placeholder="Designation" onChange={handleChange} required />
            <input name="salary" type="number" placeholder="Salary" onChange={handleChange} required />
            <input name="department" placeholder="Department" onChange={handleChange} required />
            <input name="location" placeholder="Location" onChange={handleChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;

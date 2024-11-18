import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get(`http://localhost:5000/api/employees/${id}`, {
                headers: { 'x-auth-token': token },
            });
            setFormData(res.data);
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.put(`http://localhost:5000/api/employees/${id}`, formData, {
            headers: { 'x-auth-token': token },
        });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} required />
            <input name="designation" value={formData.designation} onChange={handleChange} required />
            <input name="salary" type="number" value={formData.salary} onChange={handleChange} required />
            <input name="department" value={formData.department} onChange={handleChange} required />
            <input name="location" value={formData.location} onChange={handleChange} required />
            <button type="submit">Update Employee</button>
        </form>
    );
};

export default EditEmployee;

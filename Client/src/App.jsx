
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Navbar from './Components/Navbar';
const App = () => {
    return (
      <>
      <Navbar/>
        <Router>
            <Routes>
            <Route path='/' element={<Login/>}></Route>
                <Route path="/List" element={<EmployeeList />} />
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmployee />} />
            </Routes>
        </Router>
        </>
    );
};

export default App;

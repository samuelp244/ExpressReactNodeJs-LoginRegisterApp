import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import Dashboard from './Pages/dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

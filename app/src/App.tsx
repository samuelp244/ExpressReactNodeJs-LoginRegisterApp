import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

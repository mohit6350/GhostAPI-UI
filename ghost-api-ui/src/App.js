import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainWindow from './Components/MainWindow/MainWindow';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/ghost-api" element={<MainWindow />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

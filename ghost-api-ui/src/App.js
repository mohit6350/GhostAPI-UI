// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MainWindow from './Components/MainWindow/MainWindow';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/ghost-api" element={<MainWindowWithSidebar />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const MainWindowWithSidebar = () => {
  return (
    <div className="mainWindowWithSidebar">
      <Sidebar />
      <MainWindow />
    </div>
  );
};

export default App;

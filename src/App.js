import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;

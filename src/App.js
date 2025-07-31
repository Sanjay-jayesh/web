import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'; // your main page
import Navbar from './components/Navbar';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';  
import Project3 from './pages/Project3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} /> 
        <Route path="/project3" element={<Project3 />} /> 
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages';
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
        
        {/* New nicer URL paths */}
        <Route path="/Portfolio-Products" element={<Project1 />} />
        <Route path="/Portfolio-Cars" element={<Project2 />} />
        <Route path="/Portfolio-Food_and_Beverages" element={<Project3 />} />

        {/* Redirect old paths to new ones */}
        <Route path="/project1" element={<Navigate to="/Portfolio-Products" replace />} />
        <Route path="/project2" element={<Navigate to="/Portfolio-Cars" replace />} />
        <Route path="/project3" element={<Navigate to="/Portfolio-Food_and_Beverages" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

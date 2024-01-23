import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recherche from './Recherche';
import Form from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/form" element={<Form />} />

    </Routes>
  </Router>
);


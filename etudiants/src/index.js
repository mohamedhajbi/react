import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recherche from './Recherche';
import Form from './Form';
import Pays from './Pays';
import Region from './Region';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pays" element={<Pays />} />
      <Route path="/region/:reg" element={<Region />} />

    </Routes>
  </Router>
);


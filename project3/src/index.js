import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Error from './components/Error'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="*" element={<Error />} />
            </Routes>
          </Router>
);
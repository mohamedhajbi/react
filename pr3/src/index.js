import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './components/Results'
import Freelances from './components/Freelances'
import Error from './components/Error'
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/*" element={<Error />} />
            </Routes>
          </Router>
);
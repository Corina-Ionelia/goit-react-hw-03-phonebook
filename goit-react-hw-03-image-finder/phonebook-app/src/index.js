// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);

// Dacă nu folosești reportWebVitals, poți șterge asta
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
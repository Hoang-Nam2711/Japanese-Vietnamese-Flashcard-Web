import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardPage from './route/CardPage';
import HomePage from './route/homePage';
import reportWebVitals from './reportWebVitals';
import "@fontsource/righteous"
import '@fontsource/zen-old-mincho';
import '@fontsource/playfair-display'
import { BrowserRouter, Routes, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

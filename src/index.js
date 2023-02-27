/**
 * created by kimchj
 * created at 2023/02/26
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Header from './components/Header';

//pages
import HomePage from './pages/HomePage';


import reportWebVitals from './reportWebVitals';
import ClassPage from './pages/ClassPage';
import Class from './components/Class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="App" style={{paddingTop: '120px'}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/classpage" element={<ClassPage />} />
          <Route exact path="/class" element={<Class />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

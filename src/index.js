import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-roboto';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

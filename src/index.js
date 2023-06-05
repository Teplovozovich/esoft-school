import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-roboto';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './components/mobX/state';

let renderEntireTree = () => {

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>
);

}

renderEntireTree(state)
subscribe(renderEntireTree)
reportWebVitals();

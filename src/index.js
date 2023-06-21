import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-roboto';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './components/Store/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

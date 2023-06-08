import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-roboto';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './components/mobX/state';
import { handleStatusChange, handleAddButtonClick, updateNewInputAgeText } from './components/mobX/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} updateNewInputAgeText={updateNewInputAgeText} handleAddButtonClick={handleAddButtonClick} handleStatusChange={handleStatusChange} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

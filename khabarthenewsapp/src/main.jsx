import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import khabarAppReducer from './reducers/khabarAppReducer.jsx';

const khabarStore = configureStore( { reducer: khabarAppReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={ khabarStore }>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
)

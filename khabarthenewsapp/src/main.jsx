import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './reducers/newReducer.jsx';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const newsStore = configureStore({ reducer: newsReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={ newsStore }>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
)

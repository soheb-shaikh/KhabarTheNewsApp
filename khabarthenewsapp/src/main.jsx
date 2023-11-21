import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './reducers/newReducer.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UserAuthContextProvider } from './authentication/UsersAuthenticationContext.jsx';

const newsStore = configureStore({ reducer: newsReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider store={newsStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </UserAuthContextProvider>
  </React.StrictMode>,
)

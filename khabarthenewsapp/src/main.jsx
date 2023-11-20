import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './reducers/newReducer.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KHABAR_FIREBASE_API_KEY,
  authDomain: "khabarthenewsapp.firebaseapp.com",
  projectId: "khabarthenewsapp",
  storageBucket: "khabarthenewsapp.appspot.com",
  messagingSenderId: "95608520008",
  appId: "1:95608520008:web:9592a3563bb3ab1035c77d",
  measurementId: "G-YF3KEFLKXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const newsStore = configureStore({ reducer: newsReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={newsStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
)

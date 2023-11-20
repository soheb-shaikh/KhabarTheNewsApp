// store/index.js
import applyMiddleware from 'redux';
import configureStore from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';

const store = configureStore(newsReducer, applyMiddleware(thunk));

export default store;

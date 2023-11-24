// store/index.js
import applyMiddleware from 'redux';
import configureStore from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import khabarAppReducer from '../reducers/khabarAppReducer';

const store = configureStore(khabarAppReducer, applyMiddleware(thunk));

export default store;

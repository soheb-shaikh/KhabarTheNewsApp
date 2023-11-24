import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import newsReducer from './newsReducer';

const khabarAppReducer = combineReducers({
    themeState: themeReducer,
    newsPage: newsReducer
  });

export default khabarAppReducer;
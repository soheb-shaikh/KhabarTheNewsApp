import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import newsReducer from './newReducer';

const khabarAppReducer = combineReducers({
    themeState: themeReducer,
    newsPage: newsReducer
  });

export default khabarAppReducer;
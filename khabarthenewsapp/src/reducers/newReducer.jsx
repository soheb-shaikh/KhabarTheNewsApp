// reducers/newsReducer.js
import { FETCH_TOP_STORIES, FETCH_ALL_NEWS, FETCH_SIMILAR_NEWS } from '../actions/newsActions';

const initialState = {
  topStories: [],
  allNews: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      return { ...state, topStories: action.payload };
    case FETCH_ALL_NEWS:
      return { ...state, allNews: action.payload };
    default:
      return state;
  }
};

export default newsReducer;

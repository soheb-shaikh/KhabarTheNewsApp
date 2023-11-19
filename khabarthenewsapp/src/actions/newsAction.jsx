// actions/newsActions.js
import axios from 'axios';

export const FETCH_TOP_STORIES = 'FETCH_TOP_STORIES';
export const FETCH_ALL_NEWS = 'FETCH_ALL_NEWS';
export const FETCH_SIMILAR_NEWS = 'FETCH_SIMILAR_NEWS';

const API_KEY = import.meta.env.KHABAR_API_KEY;
const NEWS_API_URL = 'https://api.thenewsapi.com/v1';

export const fetchTopStories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/news/top?api_token=${API_KEY}&locale=us&limit=3`);
    dispatch({ type: FETCH_TOP_STORIES, payload: response.data.data });
  } catch (error) {
    handleErrorResponse(error);
  }
};

export const fetchAllNews = () => async (dispatch) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/news/all?api_token=${API_KEY}&locale=us&limit=3`);
    dispatch({ type: FETCH_ALL_NEWS, payload: response.data.data });
  } catch (error) {
    handleErrorResponse(error);
  }
};

const handleErrorResponse = (error) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        console.error(`Malformed parameters: ${data.error}`);
      } else if (status === 401) {
        console.error('Invalid API token');
      } else if (status === 402) {
        console.error(`Usage limit reached. Limit: ${data.usageLimit}, Remaining: ${data.usageRemain}`);
      } else if (status === 403) {
        console.error('Endpoint access restricted');
      } else if (status === 404) {
        if (data.error === 'resource_not_found') {
          console.error('Resource not found');
        } else if (data.error === 'invalid_api_endpoint') {
          console.error('Invalid API endpoint');
        }
      } else if (status === 429) {
        console.error(`Rate limit reached. Limit: ${data.rateLimit}, Remaining: ${data.rateRemain}`);
      }
    } else if (error.request) {
      console.error('Network error. No response received.');
    } else {
      console.error('Error:', error.message);
    }
  };

import axios from 'axios';

export const FETCH_TOP_STORIES = 'FETCH_TOP_STORIES';
export const FETCH_ALL_NEWS = 'FETCH_ALL_NEWS';
export const FETCH_SIMILAR_NEWS = 'FETCH_SIMILAR_NEWS';

const API_KEY = import.meta.env.VITE_KHABAR_API_KEY;
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
    const response = await axios.get(`${NEWS_API_URL}/news/all?api_token=${API_KEY}&language=en&limit=3`);
    dispatch({ type: FETCH_ALL_NEWS, payload: response.data.data });
  } catch (error) {
    handleErrorResponse(error);
  }
};

const handleErrorResponse = (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error(`Malformed parameters: ${data.error}`);
          break;

        case 401:
          console.error('Invalid API token');
          break;
        
        case 402:
          console.error(`Usage limit reached. Limit: ${data.usageLimit}, Remaining: ${data.usageRemain}`);
          break;
        
        case 403:
          console.error('Endpoint access restricted');
          break;

        case 404:
          if (data.error === 'resource_not_found') {
            console.error('Resource not found');
          } else if (data.error === 'invalid_api_endpoint'); {
            console.error('Invalid API endpoint');
          }
          break;

        case 429:
          console.error(`Rate limit reached. Limit: ${data.rateLimit}, Remaining: ${data.rateRemain}`);
          break;

        default:
          break;
      }
    } else if (error.request) {
      console.error('Network error. No response received.');
    } else {
      console.error('Error:', error.message);
    }
  };

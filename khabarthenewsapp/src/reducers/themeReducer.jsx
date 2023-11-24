import { TOGGLE_DARK_MODE } from "../actions/themeAction";

const initialState = false;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};

export default themeReducer;

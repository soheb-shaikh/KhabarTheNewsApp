import { toggleDarkMode } from "../actions/themeAction";

const isDarkMode = false; // Assuming the initial state of darkMode is false

const themeReducer = (state = isDarkMode, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return !state;
    default:
      return state;
  }
};

export default themeReducer;

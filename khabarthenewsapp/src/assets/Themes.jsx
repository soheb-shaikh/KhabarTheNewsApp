// themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#042243', // Set your desired primary color
    },
    secondary: {
      main: '#063970', // Set your desired secondary color
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6a88a9', // Set your desired primary color for dark mode
    },
    secondary: {
      main: '#e14539', // Set your desired secondary color for dark mode
    },
  },
});

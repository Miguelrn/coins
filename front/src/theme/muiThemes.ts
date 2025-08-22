import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5', // light background
      paper: '#fff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // dark background
      paper: '#1e1e1e',
    },
  },
});
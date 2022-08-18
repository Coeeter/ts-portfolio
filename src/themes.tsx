import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#119696',
    },
    secondary: {
      main: 'rgb(171, 0, 60)',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    }
  },
});

export { darkTheme };

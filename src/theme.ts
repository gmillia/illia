import { createTheme } from '@mui/material/styles';

/**
 * Custom theme keys carried over from the original app
 * (used for page height / paddings across views).
 */
declare module '@mui/material/styles' {
  interface Theme {
    page: {
      height: string;
      padding: number;
      margin: number;
    };
    block: {
      padding: number;
      margin: number;
    };
  }
  interface ThemeOptions {
    page?: Theme['page'];
    block?: Theme['block'];
  }
}

const theme = createTheme({
  // Match Material-UI v4 breakpoints so every layout switch happens
  // at exactly the same widths as before (v5+ changed md/lg/xl).
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Material-UI v4 default palette (v5+ switched primary to #1976d2,
  // which would change the color of the Contact "Send" button).
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  page: {
    // 50px navbar, 15 top and bottom paddings
    height: 'calc(100vh - 51px)',
    padding: 15,
    margin: 15,
  },
  block: {
    padding: 15,
    margin: 15,
  },
});

export default theme;

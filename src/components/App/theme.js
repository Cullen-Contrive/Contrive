import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#fff",
      default: "#fff",
      level2: "#f5f5f5",
      level1: "#fff"
    },
    secondary: {
      light: '#fffff9',
      main: '#fefcc6',
      dark: '#cac995',
      contrastText: '#000000',
    },
    primary: {
      light: '#cd7c50',
      main: '#984f26',
      dark: '#652500',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Forum',
      'Raleway'
    ].join(','),
    align: 'justify',
  },
  spacing: 10
});

export default theme;
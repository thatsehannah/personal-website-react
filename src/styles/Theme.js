import { createMuiTheme } from "@material-ui/core/styles";

const ehannahGold = "#9B004C";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000000",
      pink: ehannahGold,
      white: "#ffffff",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: ehannahGold,
    },
  },
  typography: {
    fontSize: 40,
    h2: {
      fontFamily: 'Permanent Marker',
      fontWeight: 700,
      fontSize: '7.5rem',
      color: '#ffffff'
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '2.5rem',
      color: '#ffffff'
    }
  },
});

export default theme;

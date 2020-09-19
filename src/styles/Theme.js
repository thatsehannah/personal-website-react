import { createMuiTheme } from "@material-ui/core/styles";

const ehannahGold = "#d4af37";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000000",
      gold: ehannahGold,
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
    h2: {
      fontFamily: 'Permanent Marker',
      fontWeight: 700,
      fontSize: '5.5rem',
      color: '#ffffff',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '2.5rem',
      color: '#ffffff'
    }
  },
});

export default theme;

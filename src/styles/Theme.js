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
    fontSize: 40,
  },
});

export default theme;

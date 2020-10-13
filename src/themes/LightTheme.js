import { createMuiTheme } from "@material-ui/core/styles";

// font-family: 'Balsamiq Sans', cursive;
// font-family: 'DM Sans', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Oxygen', sans-serif;
// font-family: 'Rubik', sans-serif;

const standoutColor = "#2f6f2f";

const theme = createMuiTheme({
  palette: {
    common: {
      base: "#ffffff",
      standout: standoutColor,
      background: '#e9e6e1'
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: standoutColor,
    },
  },
  typography: {
    h1: {
      fontFamily: "Balsamiq Sans",
      fontWeight: 800,
      color: "#fff",
    },
    h3: {
      fontFamily: "Oxygen",
      color: "#ffffff",
    },
    subtitle1: {
      fontFamily: "Oxygen",
      fontSize: "1.5rem",
      color: "#ffffff",
    },
  },
});

export default theme;

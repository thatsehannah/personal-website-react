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
      fontFamily: "Oxygen",
      fontWeight: 800,
      color: "#fff",
    },
    h2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: "4rem",
      color: "#ffffff",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "2rem",
      color: "#ffffff",
    },
  },
});

export default theme;

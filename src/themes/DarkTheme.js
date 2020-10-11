import { createMuiTheme } from "@material-ui/core/styles";

// font-family: 'Balsamiq Sans', cursive;
// font-family: 'DM Sans', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Oxygen', sans-serif;
// font-family: 'Rubik', sans-serif;

const standoutColor = "#d4af37";

const theme = createMuiTheme({
  palette: {
    common: {
      base: "#202020",
      standout: standoutColor,
    },
    primary: {
      main: "#202020",
    },
    secondary: {
      main: standoutColor,
    },
  },
  typography: {
    h1: {
      fontFamily: "Lato",
      fontWeight: 800,
      color: "##cece",
    },
    h2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: "5.5rem",
      color: "#ffffff",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "2.5rem",
      color: "#ffffff",
    },
  },
});

export default theme;

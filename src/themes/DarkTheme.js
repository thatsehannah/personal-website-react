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
      base: "#303030",
      standout: standoutColor,
      background: "#121212",
      altBackground: "#565151",
    },
    primary: {
      main: standoutColor,
    },
    secondary: {
      main: "#565151",
    },
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
      fontSize: "1.45em",
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: "1.4em",
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontSize: "1.1em",
    },
    body1: {
      fontFamily: "Rubik",
      fontSize: "1.1em",
      fontWeight: 600,
    },
  },
});

export default theme;

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
      base: "rgba(0,0,0, 0.87)",
      standout: standoutColor,
      background: "#121212",
      altBackground: "#565151",
    },
    primary: {
      main: standoutColor,
    },
    secondary: {
      main: "#202020",
    },
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
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

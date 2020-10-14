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
      background: '#e9e6e1',
      altBackground: '#a19b90'
    },
    primary: {
      main: standoutColor,
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
      color: "#fff",
    },
    h3: {
      fontFamily: "Roboto",
      color: "#ffffff",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "1.5rem",
      color: "#ffffff",
    },
    body1: {
      fontFamily: 'Oxygen'
    }
  },
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";

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
      fontFamily: "Permanent Marker",
      fontWeight: 800,
      color: "#fff",
    },
    h2: {
      fontFamily: "Permanent Marker",
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

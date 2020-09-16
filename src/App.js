import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>Testing Testing Testing</div>
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

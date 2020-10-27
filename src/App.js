import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./content/Home/Home";
import * as actionTypes from "./redux/actions";

const App = (props) => {
  const theme = useSelector((state) => state.mode.theme);
  const mode = useSelector((state) => state.mode);
  const toggler = useDispatch();

  const togglerHandler = (isLightMode) =>
    toggler({
      type: actionTypes.TOGGLE_MODE,
      payload: { isLight: isLightMode },
    });

  return (
    <ThemeProvider theme={theme}>
      <Header mode={mode} toggler={togglerHandler} />
      <Home mode={mode} />
      <Footer mode={mode} />
    </ThemeProvider>
  );
};

export default App;

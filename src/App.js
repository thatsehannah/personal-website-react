import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./content/Home";
import ContactMe from "./content/ContactMe";
import AboutMe from "./content/AboutMe";
import Muses from "./content/Muses";

const App = (props) => {
  return (
    <ThemeProvider theme={props.mode.theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/muses" component={Muses} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(App);

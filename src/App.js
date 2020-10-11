import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./content/Home/Home";
import Contact from "./content/Contact/Contact";
import About from "./content/About/About";
import Muses from "./content/Muses/Muses";

const App = (props) => {
  return (
    <ThemeProvider theme={props.mode.theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
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

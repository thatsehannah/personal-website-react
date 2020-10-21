import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./content/Home/Home";
import Contact from "./content/Contact/Contact";
import About from "./content/About/About";
import Muses from "./content/Muses/Muses";
import * as actionTypes from "./redux/actions";

class App extends Component {
  componentDidMount() {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour >= 19 || hour <= 6) {
      this.props.toggleModeHandler(false);
    } else {
      this.props.toggleModeHandler(true);
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.props.mode.theme}>
        <BrowserRouter>
          <Header
            mode={this.props.mode}
            toggler={this.props.toggleModeHandler}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/muses" component={Muses} />
          </Switch>
          <Footer mode={this.props.mode} />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModeHandler: (isLightMode) =>
      dispatch({
        type: actionTypes.TOGGLE_MODE,
        payload: { isLight: isLightMode },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

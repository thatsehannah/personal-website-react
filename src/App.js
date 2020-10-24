import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./content/Home/Home";
import * as actionTypes from "./redux/actions";

class App extends Component {
  componentDidMount() {
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 6) {
      this.props.toggleModeHandler(false);
    } else {
      this.props.toggleModeHandler(true);
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.props.mode.theme}>
        <Header mode={this.props.mode} toggler={this.props.toggleModeHandler} />
        <Home mode={this.props.mode} />
        <Footer mode={this.props.mode} />
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

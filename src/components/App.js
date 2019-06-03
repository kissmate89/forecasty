import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadingText from "./LoadingText";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isLoading } = this.props;
    return <React.Fragment>{isLoading && <LoadingText />}</React.Fragment>;
  }
}

App.propTypes = {
  isLoading: PropTypes.bool
};

export default App;

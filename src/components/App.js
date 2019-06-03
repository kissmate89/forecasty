import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import LoadingText from "./LoadingText";
import CardList from "../containers/cardList";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ minHeight: 20 + "rem" }}
        >
          {isLoading ? <LoadingText /> : <CardList />}
        </Grid>
      </Container>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool
};

export default App;

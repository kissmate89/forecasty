import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import "../styles/navigationArrow.styles.css";

const getJustifyContent = (isEnd, isStart) => {
  switch (true) {
    case isStart:
      return "flex-end";
    case isEnd:
      return "flex-start";
    default:
      return "space-between";
  }
};

const NavigationArrows = ({ onChangePage, isEnd, isStart }) => (
  <Grid
    container
    alignItems="center"
    justify={getJustifyContent(isEnd, isStart)}
  >
    {!isStart && <i class="arrow right" onClick={() => onChangePage(-1)} />}

    {!isEnd && <i class="arrow left" onClick={() => onChangePage(1)} />}
  </Grid>
);

NavigationArrows.propTypes = {
  onChangePage: PropTypes.func,
  isEnd: PropTypes.bool,
  isStart: PropTypes.bool
};

export default NavigationArrows;

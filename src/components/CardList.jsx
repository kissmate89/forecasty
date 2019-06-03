import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { TEMP_UNITS } from "../data/constants";
import TempChangeButtons from "../containers/tempChangeButtons";
import CardWrapper from "./CardWrapper";

class CardList extends React.PureComponent {
  state = {
    lastIndex: 3
  };

  getWeatherCardsDisplayed() {
    const { weatherData, tempUnit } = this.props;
    const { lastIndex } = this.state;
    if (weatherData) {
      return weatherData.list
        .slice(lastIndex - 3, lastIndex)
        .map((cardData, i) => (
          <CardWrapper key={i} cardData={cardData} tempUnit={tempUnit} />
        ));
    }
  }

  render() {
    return (
      <React.Fragment>
        <TempChangeButtons />
        <Grid container alignItems="center" justify="center">
          {this.getWeatherCardsDisplayed()}
        </Grid>
      </React.Fragment>
    );
  }
}

CardList.propTypes = {
  weatherData: PropTypes.object,
  tempUnit: PropTypes.oneOf([TEMP_UNITS.CELSIUS, TEMP_UNITS.FAHRENHEIT])
};

export default CardList;

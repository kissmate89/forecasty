import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { TEMP_UNITS } from "../data/constants";
import { changeTemperature, setDateString } from "../data/helpers";
import TempChangeButtons from "../containers/tempChangeButtons";
import CardWrapper from "./CardWrapper";
import NavigationArrows from "./NavigationArrows";
import TempChart from "./TempChart";

class CardList extends React.PureComponent {
  state = {
    lastIndex: 3,
    isEnd: false,
    isStart: true
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

  onChangePage = step => {
    const { weatherData } = this.props;
    const { lastIndex } = this.state;
    const nextLastIndex = lastIndex + step;

    this.setState({
      lastIndex: nextLastIndex,
      isEnd: nextLastIndex === weatherData.list.length,
      isStart: nextLastIndex === 3
    });
  };

  getChartData() {
    const { lastIndex } = this.state;
    const { weatherData, tempUnit } = this.props;

    return [...weatherData.list]
      .slice(lastIndex - 3, lastIndex + 4)
      .map((item, index) => ({
        temp: changeTemperature(item.main.temp, tempUnit),
        date: setDateString(item.dt_txt, true)
      }));
  }

  render() {
    const { isEnd, isStart } = this.state;

    return (
      <React.Fragment>
        <TempChangeButtons />
        <NavigationArrows
          isEnd={isEnd}
          isStart={isStart}
          onChangePage={this.onChangePage}
        />
        <Grid container alignItems="center" justify="center">
          {this.getWeatherCardsDisplayed()}
        </Grid>
        <TempChart chartData={this.getChartData()} />
      </React.Fragment>
    );
  }
}

CardList.propTypes = {
  weatherData: PropTypes.object,
  tempUnit: PropTypes.oneOf([TEMP_UNITS.CELSIUS, TEMP_UNITS.FAHRENHEIT])
};

export default CardList;

import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";

import "../styles/tempChart.styles.css";

class TempChart extends React.PureComponent {
  render() {
    const { chartData } = this.props;
    return (
      <Container>
        <Chart
          className="hidden-md"
          data={chartData}
          style={{ maxHeight: "200px" }}
        >
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries
            name="temp"
            color="#3f51b5"
            valueField="temp"
            argumentField="date"
          />
        </Chart>
      </Container>
    );
  }
}

TempChart.propTypes = {
  chartData: PropTypes.array
};

export default TempChart;

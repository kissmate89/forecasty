import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { TEMP_UNITS } from "../data/constants";
import { changeTemperature } from "../data/helpers";

const TempText = ({ temperature, tempUnit }) => (
  <Grid item>
    <Typography variant="subtitle2">Temp:</Typography>
    <Typography gutterBottom>
      {changeTemperature(temperature, tempUnit)}{" "}
      {tempUnit === TEMP_UNITS.CELSIUS ? (
        <span>&#8451;</span>
      ) : (
        <span>&#8457;</span>
      )}
    </Typography>
  </Grid>
);

TempText.propTypes = {
  temperature: PropTypes.number,
  tempUnit: PropTypes.oneOf([TEMP_UNITS.CELSIUS, TEMP_UNITS.FAHRENHEIT])
};

export default TempText;

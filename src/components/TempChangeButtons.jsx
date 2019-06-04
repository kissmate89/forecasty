import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import { TEMP_UNITS } from "../data/constants";

const TempChangeButtons = ({ tempUnit, handleChange }) => (
  <RadioGroup
    aria-label="Temperature Unit"
    name="tempUnit"
    value={tempUnit}
    onChange={handleChange}
  >
    <Grid container alignItems="center" justify="center">
      <FormControlLabel
        value={TEMP_UNITS.CELSIUS}
        control={<Radio color="primary" />}
        label="Celsius"
      />
      <FormControlLabel
        value={TEMP_UNITS.FAHRENHEIT}
        control={<Radio color="primary" />}
        label="Fahrenheit"
      />
    </Grid>
  </RadioGroup>
);

TempChangeButtons.propTypes = {
  tempUnit: PropTypes.oneOf([TEMP_UNITS.CELSIUS, TEMP_UNITS.FAHRENHEIT]),
  handleChange: PropTypes.func
};

export default TempChangeButtons;

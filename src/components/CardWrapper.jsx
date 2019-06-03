import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { TEMP_UNITS } from "../data/constants";
import { setDateString } from "../data/helpers";
import TempText from "./TempText";

const styles = makeStyles({
  card: {
    margin: "2rem"
  }
});

const CardWrapper = ({ cardData, tempUnit }) => (
  <Grid item xs="auto" sm={4}>
    <Card className={styles().card}>
      <CardContent>
        <TempText temperature={cardData.main.temp} tempUnit={tempUnit} />
        <Typography>Date:</Typography>
        <Typography> {setDateString(cardData.dt_txt)}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

CardWrapper.propTypes = {
  cardData: PropTypes.object,
  tempUnit: PropTypes.oneOf([TEMP_UNITS.CELSIUS, TEMP_UNITS.FAHRENHEIT])
};

export default CardWrapper;

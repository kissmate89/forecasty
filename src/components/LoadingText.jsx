import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../styles/loadingText.styles.css";

export default () => (
  <Grid item>
    <Typography
      variant="h4"
      color="textSecondary"
      align="center"
      className="loading-text"
    >
      Loading
    </Typography>
  </Grid>
);

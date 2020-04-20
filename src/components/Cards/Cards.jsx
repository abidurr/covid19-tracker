import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item container={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Infected
            </Typography>
            <Typography variant="h5">
                REAL DATA
            </Typography>
            <Typography color="textSecondary">
                REAL DATE
            </Typography>
            <Typography variant="body2">
                ACTIVE CASES
            </Typography>
          </CardContent>
        </Grid>
        <Grid item container={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                RECOVERED
            </Typography>
            <Typography variant="h5">
                REAL DATA
            </Typography>
            <Typography color="textSecondary">
                REAL DATE
            </Typography>
            <Typography variant="body2">
                NO OF RECOVERIES
            </Typography>
          </CardContent>
        </Grid>
        <Grid item container={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                DEATHS
            </Typography>
            <Typography variant="h5">
                REAL DATA
            </Typography>
            <Typography color="textSecondary">
                REAL DATE
            </Typography>
            <Typography variant="body2">
                ACTIVE CASES
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

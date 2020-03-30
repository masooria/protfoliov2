import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  grid: {
    justify: "space-around"
  }
}));

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;
const MainItem = props => <Grid item {...props} />;

const Test1 = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <MainItem xs={4} />
        <MainItem>
          <Container spacing={4}>
            <Item>
              <Paper className={classes.paper}>component</Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>under development</Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>check back </Paper>
            </Item>
            <Item>
              <Paper className={classes.paper}>in some time</Paper>
            </Item>
          </Container>
        </MainItem>
      </Container>
      ?
    </>
  );
};

export default Test1;

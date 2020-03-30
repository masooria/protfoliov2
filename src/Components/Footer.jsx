import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;
const MainItem = props => <Grid item {...props} />;
const useStyles = makeStyles(theme => ({
  toolbarMargin: theme.mixins.toolbar
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbarMargin} />
      <div className="footer">
        <p>
          <span className="traditionalFont">|| tat tvam asi ||</span>
          <span role="img" aria-label="logo">
            . 🤘
          </span>
          You be 'that', if 'this' is 'undefined'
          <span role="img" aria-label="logo">
            🤘
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;

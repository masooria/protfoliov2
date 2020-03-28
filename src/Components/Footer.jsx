import React from "react";
import Grid from "@material-ui/core/Grid";

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;
const MainItem = props => <Grid item {...props} />;

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="traditionalFont">
          || tat tvam asi ||
          <span role="img" aria-label="logo">
            . 🤘
          </span>
          I am that, Because I hate 'this'
          <span role="img" aria-label="logo">
            🤘
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;

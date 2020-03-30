import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import { about_me_before, about_me_after } from "./AboutMe";
import loading_radio from "../loading_radio.gif";

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "none",
    textAlign: "left"
  }
}));

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;
const MainItem = props => <Grid item {...props} />;

const Home = () => {
  const classes = useStyles();
  const [aboutme, setaboutme] = useState(about_me_before);
  const [buttonText, setbuttonText] = useState("node AboutMe.js");
  const [codeStyle, setcodeStyle] = useState("code_space");

  const toggle_button = () => {
    if (buttonText === "node AboutMe.js") {
      setcodeStyle("code_space_load");
      setaboutme(<img src={loading_radio} alt="loading..." />);
      setTimeout(() => {
        setcodeStyle("code_space");
        setaboutme(about_me_after);
        setbuttonText("view Source");
      }, 1000);
    } else {
      setaboutme(about_me_before);
      setbuttonText("node AboutMe.js");
    }
  };

  return (
    <Container>
      <MainItem xs={1} sm={4}></MainItem>
      <MainItem xs={12} sm={8}>
        <Container xs={12}>
          <MainItem className="banner-text">
            <div>
              <h4>AboutMe.js</h4> <hr />
              <pre id={codeStyle}>{aboutme}</pre>
              <div className={classes.root}>
                <Button
                  startIcon={<CodeIcon />}
                  variant="contained"
                  className={classes.root}
                  size="small"
                  color="default"
                  onClick={toggle_button}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </MainItem>
        </Container>
      </MainItem>
    </Container>
  );
};
export default Home;

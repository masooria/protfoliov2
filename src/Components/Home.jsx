import React from "react";
import Grid from "@material-ui/core/Grid";

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;
const MainItem = props => <Grid item {...props} />;

const Home = () => {
  return (
    <Container>
      <MainItem xs={4} />
      <MainItem>
        <Container>
          <Item>
            <div className="banner-text">
              <h2 className="traditionalFont">tat tvam asi </h2>
              <h2>
                <span role="img" aria-label="logo">
                  🤘
                </span>
                I am that, Because I hate 'this'
                <span role="img" aria-label="logo">
                  🤘
                </span>
              </h2>
            </div>
          </Item>
        </Container>
      </MainItem>
    </Container>
  );
};
export default Home;

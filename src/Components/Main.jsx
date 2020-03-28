import React from "react";
import { Router } from "@reach/router";
import Test1 from "./Test1";
import Home from "./Home";

const Main = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Test1 path="/t" />
      </Router>
    </>
  );
};

export default Main;

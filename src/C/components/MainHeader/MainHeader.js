import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Header</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;

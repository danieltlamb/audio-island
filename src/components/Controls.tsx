import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const Controls = ({ classes }: Props) => {
  return (
    <div className={classes.header}>
      <a href="/">Users</a> | <a href="/about">About</a> |{" "}
      <a href="/contact">Contact</a>
    </div>
  );
};

const styles = {
  header: {
    width: "100%",
    height: 45,
    bottom: 0,
    position: "fixed",
    background: "#ccc",
    padding: 15
  }
};

export default injectSheet(styles)(Controls);

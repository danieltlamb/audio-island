import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const Navigation = ({ classes }: Props) => {
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
    background: "#ccc",
    padding: 15
  }
};

export default injectSheet(styles)(Navigation);

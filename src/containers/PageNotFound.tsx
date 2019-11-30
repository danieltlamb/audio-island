import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const PageNotFound = ({ classes }: Props) => {
  return <div className={classes.title}>PageNotFound</div>;
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(PageNotFound);

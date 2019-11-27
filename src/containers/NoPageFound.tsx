import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const NoPageFound = ({ classes }: Props) => {
  return <div className={classes.title}>NoPageFound</div>;
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(NoPageFound);

import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const UsersPage = ({ classes }: Props) => {
  return <div className={classes.title}></div>;
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(UsersPage);

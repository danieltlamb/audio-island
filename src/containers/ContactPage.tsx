import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const ContactPage = ({ classes }: Props) => {
  return <div className={classes.title}>ContactPage</div>;
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(ContactPage);

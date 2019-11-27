import React from "react";
import injectSheet from "react-jss";

type Props = {
  classes: any;
};

const AboutPage = ({ classes }: Props) => {
  return <div className={classes.title}>AboutPage</div>;
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(AboutPage);

import React from "react";
import injectSheet from "react-jss";

import AudioContainer from "../containers/AudioContainer";

type Props = {
  classes: any;
};

console.log("Controls Component");

const Controls = ({ classes }: Props) => {
  return (
    <div className={classes.header}>
      <AudioContainer />
    </div>
  );
};

const styles = {
  header: {
    width: "100%",
    maxHeight: 200,
    bottom: 0,
    position: "fixed"
  }
};

export default injectSheet(styles)(Controls);

import React from "react";
import injectSheet from "react-jss";
import { PauseCircleFilled } from "@material-ui/icons";

type Props = {
  handleClick: () => {};
  classes: any;
};

const styles = {
  playerButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",

    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      cursor: "pointer"
    }
  }
};

function Pause(props: Props) {
  const { handleClick, classes } = props;

  return (
    <button className={classes.playerButton} onClick={() => handleClick()}>
      <PauseCircleFilled fontSize="large" />
    </button>
  );
}

export default injectSheet(styles)(Pause);

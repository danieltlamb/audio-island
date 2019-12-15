import React from "react";
import injectSheet from "react-jss";
import { PlayCircleFilled } from "@material-ui/icons";

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

function Play(props: Props) {
  const { handleClick, classes } = props;

  return (
    <button className={classes.playerButton} onClick={() => handleClick()}>
      <PlayCircleFilled fontSize="large" />
    </button>
  );
}

export default injectSheet(styles)(Play);

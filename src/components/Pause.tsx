import React from "react";
import injectSheet from "react-jss";

type Props = {
  handleClick: () => {};
  classes: any;
};

const styles = {
  playerButton: {
    width: "fit-content",
    marginBottom: 15,
    backgroundColor: "transparent",
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
      <div>Pause</div>
    </button>
  );
}

export default injectSheet(styles)(Pause);

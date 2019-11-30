import React from "react";
import injectSheet from "react-jss";

type Props = {
  songName: string;
  songArtist: string;
  classes: any;
};

const styles = {
  song: {
    userSelect: "none",
    margin: [0, 20]
  },
  songTitle: {
    textAlign: "left",
    margin: 0,
    color: "white",
    fontSize: "3.5em",

    "&:hover": {
      color: "greenyellow"
    }
  },
  songArtist: {
    margin: 0,
    color: "white",
    fontSize: "1em",

    "&:hover": {
      color: "greenyellow",
      cursor: "pointer"
    }
  }
};

const Song = (props: Props) => {
  const { songName, songArtist, classes } = props;

  return (
    <div className={classes.song}>
      <h1 className={classes.songTitle}>{songName}</h1>
      <h2 className={classes.songArtist}>{songArtist}</h2>
    </div>
  );
};

export default injectSheet(styles)(Song);

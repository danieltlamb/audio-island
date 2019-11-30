import React from "react";
import injectSheet from "react-jss";

import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";

import useAudioPlayer from "../useAudioPlayer";

const styles = {
  player: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [20, 0],
    backgroundColor: "#212527"
  },

  controls: {
    flexGrow: 1,
    margin: [0, 20],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const AudioContainer = props => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();
  const { classes } = props;

  return (
    <div className={classes.player}>
      <audio id="audio">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song
        songName="Instant Crush"
        songArtist="Daft Punk ft. Julian Casablancas"
      />
      <div className={classes.controls}>
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={time => setClickedTime(time)}
        />
      </div>
    </div>
  );
};

export default injectSheet(styles)(AudioContainer);

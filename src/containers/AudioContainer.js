import React from "react";
import injectSheet from "react-jss";

import Song from "../components/Song";
import Play from "../components/Play";
import Pause from "../components/Pause";
import Bar from "../components/Bar";

import useAudioPlayer from "../useAudioPlayer";

const styles = {
  player: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [30, 10],
    backgroundColor: "#212527"
  },
  leftSide: {
    flexGrow: 0,
    margin: [0, 10],
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rightSide: {
    flexGrow: 1,
    margin: [0, 30],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 2000
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
      <div className={classes.leftSide}>
        <div className={classes.buttons}>
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
        </div>
        <div className={classes.songDetails}>
          <Song
            songName="Instant Crush"
            songArtist="Daft Punk ft. Julian Casablancas"
          />
        </div>
      </div>
      <div className={classes.rightSide}>
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

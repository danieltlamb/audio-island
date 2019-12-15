import React from "react";
import moment from "moment";
import injectSheet from "react-jss";

type Props = {
  duration: number;
  curTime: number;
  onTimeUpdate: (x: number) => {};
  classes: any;
};

const styles = {
  bar: {
    userSelect: "none",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },

  barTime: {
    color: "white",
    fontSize: 16
  },

  barProgress: {
    flex: 1,
    borderRadius: 5,
    margin: [0, 20],
    height: 10,
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },

  barProgressKnob: {
    position: "relative",
    height: 16,
    width: 16,
    border: [1.5, "solid", "white"],
    borderRadius: "50%",
    backgroundColor: "orange"
  }
};

const Bar = (props: Props) => {
  const { duration, curTime, onTimeUpdate, classes } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration: number) {
    require("moment-duration-format");
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e: MouseEvent) {
    const clickPositionInPage = e.pageX;
    const bar: HTMLDivElement | null = document.querySelector("#bar-progress");
    const barStart = bar && bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar && bar.offsetWidth;
    const clickPositionInBar = barStart ? clickPositionInPage - barStart : 0;
    const timePerPixel = barWidth ? duration / barWidth : 0;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e: any) {
    // Arg "e" is Typed as "any" because the MouseEvent type currently doesn't include x-offset, and other params.
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove: MouseEvent) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className={classes.bar}>
      <span className={classes.barTime}>{formatDuration(curTime)}</span>
      <div
        className={classes.barProgress}
        id="bar-progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className={classes.barProgressKnob}
          style={{ left: `${curPercentage - 0.5}%` }}
        />
      </div>
      <span className={classes.barTime}>{formatDuration(duration)}</span>
    </div>
  );
};

export default injectSheet(styles)(Bar);

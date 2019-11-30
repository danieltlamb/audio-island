import React from "react";
import injectSheet from "react-jss";
import AudioContainer from "../components/AudioContainer";

type Props = {
  classes: any;
};

const UsersPage = ({ classes }: Props) => {
  return (
    <div className={classes.title}>
      <AudioContainer />
    </div>
  );
};

const styles = {
  title: {
    fontSize: 24
  }
};

export default injectSheet(styles)(UsersPage);

import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Controls from "./components/Controls";
import injectSheet from "react-jss";
import { useRoutes } from "hookrouter";
import Routes from "./router";
import PageNotFound from "./containers/PageNotFound";

type Props = {
  classes: any;
};

const App = ({ classes }: Props) => {
  return (
    <div className="App">
      <div id="app-root"></div>
      <div id="modal-root"></div>
      <Navigation />
      <Controls />
      {useRoutes(Routes) || <PageNotFound />}
    </div>
  );
};

const styles = {
  header: {}
};

export default injectSheet(styles)(App);

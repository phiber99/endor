//This code will generate a strict mode error in the console. 
//The error will disappear if we remove strict mode, but we do not want that.
//The problem is discussed here:
//https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode

import { LinearProgress } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { quotes } from "./waterQuotes";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    width: "auto",
    textAlign: "center",
  },
  author: {
    marginBlockEnd: "10px",
  },
  quote: {
    marginBlockStart: "0px",
    marginBlockEnd: "5px",
  }
}));
export default function LoadingScreen() {
  const classes = useStyles();

  const rnd = Math.floor((Math.random() * quotes.length));
  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <div className={classes.root}>
          <h3 data-testid="author" className={classes.author}>{quotes[rnd][1]}</h3>
          <h3 data-testid="quote" className={classes.quote}>{quotes[rnd][0]}</h3>
          <LinearProgress data-testid="loadingindicator" color="secondary" />
        </div>
      </Backdrop>
    </div>
  );
}

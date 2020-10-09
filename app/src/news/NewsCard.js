import Card from "@material-ui/core/Card";
import { default as CardActionArea } from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: 340,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: theme.palette.primary.light,
    paddingTop: "10px",
  },
  cover: {
    height: "11em",
    width: "11em",
    borderRadius: "5%",
    marginBottom: "6px",
  },
  website: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  summary: {
    height: "100%",
    color: "#3d5a80", //theme.palette.primary.contrastText,
    backgroundColor: "#e0fbfc", //theme.palette.primary.main,
    padding: "10px",
  },
}));

export default function NewsCard(props) {
  const classes = useStyles();
  const { url, thumbnail, summary } = props;

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea
        onClick={() => window.open(url, "_blank")}
        style={{ width: "auto", alignSelf: "center" }}>
        <CardMedia
          data-testid="cardmedia"
          className={classes.cover}
          component="img"
          height="140"
          image={
            thumbnail === "default" || thumbnail === "" || !thumbnail
              ? "/pictures/defaultWaterPicture.jpg"
              : thumbnail
          }
        />
      </CardActionArea>
      <Typography variant="h6" className={classes.website}>
        { url ? url.match("^(?:https?://)?(?:[^@\n]+@)?(?:www.)?([^:/\n?]+)")[1].split(".")[0] : "" }
      </Typography>
      <Divider />
      <Typography variant="body2" className={classes.summary}>
        {summary}
      </Typography>
    </Card>
  );
}

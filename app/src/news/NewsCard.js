import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: 450,
    marginTop: 25,
    backgroundColor: "#F3F3F3",
  },
  cover: {
    float: "left",
    height: "9em",
    width: "9em",
    borderTopRightRadius: "4%",
    borderBottomRightRadius: "4%",
  },
  content: {
    overflow: "auto",
    maxHeight: "9em",
    padding: 0,
  },
  text: {
    padding: 5,
  },
});

export default function NewsCard(props) {
  const classes = useStyles();
  const { url, thumbnail, summary } = props;

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea
        style={{ overflow: "hidden" }}
        onClick={() => window.open(url, "_blank")}
      >
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
        <CardContent className={classes.content}>
          <Typography variant="body2" className={classes.text}>
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function NewsCard(props) {
  const classes = useStyles();

  // todo fix onclick
//   console.log(props.summary)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.thumbnail}
          // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography variant="body2">
            {props.summary}
            {/* Plants | Free Full-Text | Challenges for Ex Situ Conservation of Wild Bananas: Seeds Collected in Papua New Guinea Have Variable Levels of Desiccation Tolerance */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

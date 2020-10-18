import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { default as CardActionArea } from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: 540,
    height: "fit-content",
    minWidth: 130,
    marginTop: 12,
    marginBottom: 12,
  },
  box: {
    paddingBottom: 12,
    display: "flex",
    justifyContent: "space-between",
  },
  cover: {
    height: "5em",
    width: "5em",
    borderRadius: "5%",
  },
  website: {
    paddingLeft: "5px",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
}));

export default function NewsCard(props) {
  const classes = useStyles();
  const { url, thumbnail, summary, created, title, favicon } = props;
  const urlRegex = "^(?:https?://)?(?:[^@\n]+@)?(?:www.)?([^:/\n?]+)";

  const titleDisplayed = title
    ? title
    : url
    ? url.match(urlRegex)[1].split(".")[0]
    : "";
  const faviconDisplayed = favicon
    ? favicon
    : url
    ? "https://www.google.com/s2/favicons?domain=" + url.match(urlRegex)[0]
    : "";
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea
        onClick={() => url === "/news" ? window.open(url, "_self") : window.open(url) }
        style={{ width: "100%", height: "100%" }}
      >
        <Box style={{ padding: 12, height: "100%" }}>
          <Box className={classes.box}>
            <Box>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <img alt="news item thumbnail" src={faviconDisplayed} />
                <Typography variant="h6" className={classes.website}>
                  {titleDisplayed}
                </Typography>
              </Box>
              <Typography variant="caption">
                {convertUnixTimestamp(created)}
              </Typography>
            </Box>
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
          </Box>
          <Typography variant="body2">{summary}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
function convertUnixTimestamp(unixTimestamp) {
  const a = new Date(unixTimestamp * 1000);
  const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  return date + " " + month + " " + year;
}

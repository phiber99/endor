import React, { useEffect, useState } from "react";
import NewsCard from './NewsCard'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default function News() {
  const [news, setNews] = useState([]);
  const classes = useStyles();

  // Only fetch the news on component mount
  useEffect(() => getNewsCards(setNews), []);

  return (
    <div className={classes.root}>
      {news}
    </div>
  );
}
function getNewsCards(setNews) {
  const newsCards = [];
  const url =
    "https://www.reddit.com/r/science/search.json?q=flair:Environment&restrict_sr=on&sort=hot&t=all&limit=100";
  fetch(url).then(resp =>
    resp.json().then(posts => {
      posts.data.children.forEach(post => {
        newsCards.push(
          <NewsCard
            summary={post.data.title}
            thumbnail={post.data.thumbnail}
            url={post.data.url}
          />
        );
      });
      setNews(() => newsCards);
    })
  );
}

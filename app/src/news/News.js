import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { makeStyles } from "@material-ui/core/styles";
import { fetchNews } from "./FetchReddit";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default function News() {
  const [news, setNews] = useState([]);
  const classes = useStyles();

  // Only fetch the news on component mount
  useEffect(() => {
    const newsEffect = async () => {
      const newsItems = await fetchNews();
      setNews(newsItems);
    };

    newsEffect();
  }, []);

  return (
    <div className={classes.root} data-testid="news">
      {news.map((newsItem, i) => (
        <NewsCard
          key={i}
          summary={newsItem.title}
          thumbnail={newsItem.thumbnail}
          url={newsItem.url}
        />
      ))}
    </div>
  );
}

import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../loadingscreen/Loadingscreen";
import { fetchNews, filterNews, removeDupes } from "./FetchReddit";
import NewsCard from "./NewsCard";

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
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  // Only fetch the news on component mount
  useEffect(() => {
    const newsEffect = async () => {
      const newsItems = await fetchNews();
      const filteredNews = filterNews(newsItems);
      const dupesRemoved = removeDupes(filteredNews);
      const sorted = dupesRemoved.sort((n1, n2) => n2.title.length - n1.title.length);
      // setTimeout(() => { //to make the loading screen appear for 1,5 sec
      setNews(sorted);
      setLoading(false);
      // }, 1500)           // I belong to the comment over me.
    };
    newsEffect();
  }, []);

  if (!loading)
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
  else return <LoadingScreen />;
}

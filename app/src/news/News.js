import React, { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  // Only fetch the news on component mount
  useEffect(() => {
    getNewsCards(setNews);
  }, []);

  return (
    <li>{news}</li>
    // <NewsCard
    //   thumbnail="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //   summary="Before the food and drink was handed out, rumours spread that there would not be enough for everyone. As a result, the crowd rushed to get their share and individuals were tripped and trampled upon, suffocating in the dirt of the field. Of the approximate 100,000 in attendance, it is estimated that 1,389 individuals died and roughly 1,300 were injured."
    // />
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
          <News
            summary={post.data.title}
            thumbnail={post.data.thumbnail}
            link={post.data.link}
          />
        );
      });
      setNews(() => newsCards);
    })
  );
}

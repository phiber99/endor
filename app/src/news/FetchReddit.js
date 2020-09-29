const fetchNews = async () => {
  const url =
    "https://www.reddit.com/r/science/search.json?q=flair:Environment&restrict_sr=on&sort=hot&t=all&limit=100";

  const news = await fetch(url).then((resp) =>
    resp.json().then((posts) => mapPosts(posts.data.children))
  );

  return news;
};

const mapPosts = (posts) => {
  return posts.map((post) => ({
    title: post.data.title,
    thumbnail: post.data.thumbnail,
    url: post.data.url,
  }));
};

export { fetchNews };

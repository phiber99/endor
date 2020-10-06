const fetchNews = async () => {
  // "Hot" posts all time with the Environment flair
  const url =
    "https://www.reddit.com/r/science/search.json?q=flair:Environment&restrict_sr=on&sort=hot&t=all&limit=1000";

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

let filterNews = news => {
  const keyWords = ["iceberg", "antarctic", "ocean", "lagoon", "waterhole", "marine", "fish", "algae", "algal Blooms", "water", "cryptosporidium", "effluent", "oil spill", "river basin", "sewage", "river", "acequia", "alluvium", "aquaculture", "aqueduct", "aquifer", "artificial recharge", "base flow", "bay", "bedrock", "brook", "condensation", "consumptive use", "conveyance loss", "creek", "cubic feet per second", "cfs", "desalination", "dew", "drainage basin", "drawdown", "drought", "drip irrigation", "effluent", "erosion", "estuary", "evaporation", "evapotranspiration", "flood", "floodway", "flowing", "well", "spring", "freshwater", "fresh water", "gage height", "gaging station", "geyser", "giardiasis", "glacier", "greywater", "groundwater", "headwater", "hydrologic cycle", "ice", "impermeable layer", "infiltration", "irrigation", "lake", "leaching", "lentic waters", "levee", "waters", "marsh", "gallons", "osmosis", "outfall", "peak flow", "percolation", "permeability", "porosity", "precipitation", "wastewater", "reach", "recharge", "reservoir", "flow", "runoff", "sea", "sediment", "sedimentary", "sedimentation", "seepage", "septic tank", "pond", "sewage", "sinkhole", "snow", "sprain", "irrigation", "steam", "stage", "sewer", "stream", "streamflow", "subsidence", "surface tension", "transpiration", "tributary", "turbidity", "unsaturated zone", "vapor", "watershed", "xeriscaping"]

  return news.filter(n => keyWords.some(k => n.title.includes(k)));
}

// Look for url dupes and remove them
let removeDupes = news => news.filter((news1, i, arr) => i === arr.findIndex(news2 => news2.url === news1.url))

export { fetchNews, removeDupes, filterNews };


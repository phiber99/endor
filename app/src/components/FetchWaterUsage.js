const fetchWaterUsage = async () => {
  const url = "/data/annual-freshwater-withdrawals.csv"
  let response = await fetch(url)
  let data = await response.text()

  let waterUsage = parseData(data)

  return waterUsage
};

// parse the data and return a list
function parseData(data) {
  // Split string
  const arr = data.split("\n");
  arr.shift(); // remove first entry

  let countryEntries = arr.map((c, i) => {
    const info = c.split(",");
    return (
      {
        country: info[0],
        year: info[2],
        volume: info[3]
      }
    );
  });
  return countryEntries;
}

export { fetchWaterUsage };
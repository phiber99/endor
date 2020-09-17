import React, { useState } from "react";

export default function WaterUsage() {
  const [entries, setEntries] = useState([]);

  // Only fetch data the first time
  if (entries === undefined || entries.length === 0)
    fetchData()
      .then(response => {
        if (response.ok && response.redirected === false) {
          response.text().then(text => parseData(text, setEntries));
        } else {
          alert("Failed to fetch data");
        }
      })
      .catch(error => alert(error));

  return (
    <>
      <h4>Annual freshwater withdrawals by country</h4>
      <WaterUsageTable countryEntries={entries} />
    </>
  );
}

function WaterUsageTable(props) {
  return (
    <table>
      <thead>
        <tr key="id">
          <th scope="col">Country</th>
          <th scope="col">Year</th>
          <th scope="col">Billion cubic meters</th>
        </tr>
      </thead>
      <tbody>{props.countryEntries}</tbody>
    </table>
  );
}

function CountryEntry(props) {
  return (
    <tr>
      <td>{props.country}</td>
      <td>{props.year}</td>
      <td>{props.bGallons}</td>
    </tr>
  );
}

const fetchData = () => fetch("/data/annual-freshwater-withdrawals.csv");

// parse the data and return a list of JSX elements
function parseData(data, setEntries) {
  // Split string
  const arr = data.split("\n");
  arr.shift(); // remove first entry

  let countryEntries = arr.map((c, i) => {
    const info = c.split(",");
    return (
      <CountryEntry
        key={i}
        country={info[0]}
        year={info[2]}
        bGallons={info[3]}
      />
    );
  });
  setEntries(() => countryEntries);
}

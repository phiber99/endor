import "fs";
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function WaterUsage(props) {
  return (
    <>
      <h4>Annual freshwater withdrawals by country</h4>
      <WaterUsageTable/>
    </>
  );
}

function WaterUsageTable() {
  return (
    <table className="table table-sm table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Year</th>
          <th scope="col">Billion cubic meters</th>
        </tr>
      </thead>
      <tbody>
        <CreateCountryEntry country="Cuba" year="1997" bGallons="324" />
        <CreateCountryEntry country="Cuba" year="1997" bGallons="324" />
        <CreateCountryEntry country="Cuba" year="1997" bGallons="324" />
      </tbody>
    </table>
  );
}

function CreateCountryEntry(props) {
  return (
    <tr>
      <th scope="row">{props.country}</th>
      <td>{props.year}</td>
      <td>{props.bGallons}</td>
    </tr>
  );
}

function ParseData() {
  let result;
  let xmlhttp = new XMLHttpRequest();

  // TODO make async
  //  Send GET request for the data
  xmlhttp.open("GET", "/data/annual-freshwater-withdrawals.csv", false);
  xmlhttp.send();

  if (xmlhttp.status === 200) result = xmlhttp.responseText;
  else alert("Failed to fetch data");
  // TODO parse it and return a list of JSX table entries
}

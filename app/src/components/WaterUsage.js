import "fs";
import React from "react";
export default function WaterUsage(props) {
  return (
    <>
      <h4>Annual freshwater withdrawals by country</h4>
      <WaterUsageTable />
    </>
  );
}

function WaterUsageTable() {
  ParseData();
  return (
    <table class="table table-sm table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Year</th>
          <th scope="col">Bilion cubic meters</th>
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
  // TODO
}

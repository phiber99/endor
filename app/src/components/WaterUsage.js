import React, { useEffect, useState } from "react";
import { fetchWaterUsage } from "./FetchWaterUsage";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

export default function WaterUsage() {
  const [entries, setEntries] = useState([]);

  // Only fetch data the first time
  useEffect(() => {
    const dataEffect = async () => {
      const dataEntries = await fetchWaterUsage()
      setEntries(dataEntries)
    };

    dataEffect()
  }, [])

  return (
    <div>
      <h4>Annual freshwater withdrawals by country</h4>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Usage (Billion m^3)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="water-usage">
            {entries.map((row) => (
              <TableRow key={row.country}>
                <TableCell component="th" scope="row">{row.country}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <WaterUsageTable countryEntries={entries} /> */}
    </div>
  );
}

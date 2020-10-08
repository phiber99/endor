import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { sortEntries, getComparator } from './SortEntries'
import { data } from './waterUsageData'

export default function WaterUsage() {
  const [entries, setEntries] = useState([])
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('country')

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  // update entries if order or orderBy has changed
  useEffect(() => {
    const comparator = getComparator(order, orderBy)
    const sortedEntries = sortEntries(entries, comparator)
    setEntries(sortedEntries)
  }, [order, orderBy])

  // Only fetch data the first time
  useEffect(() => {
    const dataEffect = async () => {
      setEntries(data)
    };

    dataEffect()
  }, [])

  return (
    <Container
      maxWidth="lg">
      <Typography variant="h4" >Annual freshwater withdrawals by country</Typography>
      <Paper>

        <TableContainer>
          <Table>
            <WaterUsageTableHead
              orderBy={orderBy}
              order={order}
              onRequestSort={handleRequestSort} />
            <WaterUsageTableBody entries={entries} />
          </Table>
        </TableContainer>
      </Paper>

    </Container>
  );
}

const headCells = [
  { id: "country", numeric: false, label: "Country" },
  { id: "year", numeric: true, label: "Year" },
  { id: "volume", numeric: true, label: "Usage (Billion m^3)" }
]

const WaterUsageTableHead = props => {
  const { orderBy, order, onRequestSort } = props

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((cell) => {
          return (
            <TableCell
              key={cell.id}
              align={cell.numeric ? "right" : "left"}>
              <TableSortLabel
                active={orderBy === cell.id}
                direction={orderBy === cell.id ? order : 'asc'}
                onClick={createSortHandler(cell.id)}>
                {cell.label}
              </TableSortLabel>
            </TableCell>
          )
        })
        }
      </TableRow>
    </TableHead>
  )
}

const WaterUsageTableBody = props => {
  const { entries } = props

  return (
    <TableBody data-testid="water-usage">
      {entries.map((row, key) => (
        <TableRow key={key}>
          <TableCell component="th" scope="row">{row.country}</TableCell>
          <TableCell align="right">{row.year}</TableCell>
          <TableCell align="right">{row.volume}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
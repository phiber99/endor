import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Divider,
  TextField,
  IconButton
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import FilterListIcon from '@material-ui/icons/FilterList'
import { makeStyles } from "@material-ui/core/styles";

import { sortEntries, getComparator } from './helperModules/SortEntries'
import { filterCountries } from './helperModules/FilterList'

const useStyles = makeStyles(() => ({
  waterUsageToolbar: {
    justifyContent: "space-between",
  }
}));

const headCells = [
  { id: "country", numeric: false, label: "Country" },
  { id: "year", numeric: true, label: "Year" },
  { id: "volume", numeric: true, label: "Usage (Billion m^3)" }
]

// ---------------------------------
// Table head
// ---------------------------------
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

// ---------------------------------
// Table body
// ---------------------------------
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

// ---------------------------------
// Table toolbar
// ---------------------------------
const WaterUsageToolbar = props => {
  const classes = useStyles()
  const { onFilterClicked } = props
  const [search, setSearch] = useState("")

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const filterClicked = _event => {
    onFilterClicked(search)
  }

  return (
    <Toolbar className={classes.waterUsageToolbar}>
      <TextField
        data-testid="filter-input"
        variant="filled"
        label="Filter"
        placeholder="Country name..."
        onChange={handleChange}
        value={search}
      />

      <IconButton data-testid="filter-button" onClick={filterClicked}>
        <FilterListIcon />
      </IconButton>
    </Toolbar>
  )
}

// ---------------------------------
// Table
// ---------------------------------
const WaterUsageTable = props => {
  const { data } = props

  const [entries, setEntries] = useState(data)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('country')

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    const _order = isAsc ? 'desc' : 'asc'
    const _orderBy = property

    const comparator = getComparator(_order, _orderBy)
    const sortedEntries = sortEntries(entries, comparator)

    setOrder(_order)
    setOrderBy(_orderBy)
    setEntries(sortedEntries)
  }

  const handleRequestFilter = (filterString) => {
    const filteredCountries = filterCountries(filterString, data)
    setEntries(filteredCountries)
  }

  return (
    <Paper>
      <WaterUsageToolbar onFilterClicked={handleRequestFilter} />
      <Divider />
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
  );
}

export default WaterUsageTable
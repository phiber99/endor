import React, { useCallback, useEffect, useState } from "react";
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
import { debounce } from 'throttle-debounce'

const useStyles = makeStyles(() => ({
  waterUsageToolbar: {
    justifyContent: "space-between",
  }
}));

const headCells = [
  { id: "country", numeric: false, label: "Country" },
  { id: "year", numeric: true, label: "Year" },
  { id: "volume", numeric: true, label: "Usage (Billion m³)" }
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
  const { onFilterRequested } = props
  const [search, setSearch] = useState("")
  const debouncedSearch = useCallback(debounce(300, false, (s) => onFilterRequested(s)), [])

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch])

  const handleChange = event => {
    const filterText = event.target.value
    setSearch(filterText)
    debouncedSearch(filterText)
  }

  const handleEnter = event => {
    if (event.charCode === 13)
      onFilterRequested(search)
  }

  const filterRequested = _event => {
    onFilterRequested(search)
  }

  return (
    <Toolbar className={classes.waterUsageToolbar}>
      <TextField
        data-testid="filter-input"
        variant="filled"
        label="Filter"
        placeholder="Country name..."
        onChange={handleChange}
        onKeyPress={handleEnter}
        value={search}
      />

      <IconButton data-testid="filter-button" onClick={filterRequested}>
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
      <WaterUsageToolbar onFilterRequested={handleRequestFilter} />
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
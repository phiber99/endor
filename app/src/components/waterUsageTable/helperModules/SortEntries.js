const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy])
    return -1
  else if (b[orderBy] > a[orderBy])
    return 1
  else
    return 0
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


const sortEntries = (entries, comparator) => [...entries].sort(comparator)


export { sortEntries, getComparator }
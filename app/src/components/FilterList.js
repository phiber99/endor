const filterCountries = (filterString, entries) => {
  const lowerCaseFilterString = filterString.toLowerCase()
  return entries.filter(entry => entry.country.toLowerCase().includes(lowerCaseFilterString))
}

export { filterCountries }
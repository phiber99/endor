// groups data by country code
// e.g. turns 
// [ 
//   { country: 'Netherlands', code: 'NLD', year: 1996, volume: 6.507},
//   { country: 'Netherlands', code: 'NLD', year: 1997, volume: 8.507 },
//   { country: 'United states', code: 'USA', year: 2000, volume: 6.507 }
// ]
// into 
// {
//   NLD: [
//     { country: 'Netherlands', code: 'NLD', year: 1996, volume: 6.507},
//     { country: 'Netherlands', code: 'NLD', year: 1997, volume: 8.507 }
//   ]
//   USA: [
//     { country: 'United states', code: 'USA', year: 2000, volume: 6.507 }
//   ]
// }
const groupByCountryCode = entries => entries.reduce((acc, value) => {
  // if country code is not already in the accumalator
  // initialize it
  if (!acc[value.code])
    acc[value.code] = []

  // add the full matching country to the array of data
  // that matches the country code
  acc[value.code].push(value)
  // return updated acc for the next iteration
  return acc
}, {})


// averages the used volume for input formatted like the output of
// groupByCountryCode(entries) and changes the representation of the data
// e.g. turns
// {
//   NLD: [
//     { country: 'Netherlands', code: 'NLD', year: 1996, volume: 6.507 },
//     { country: 'Netherlands', code: 'NLD', year: 1997, volume: 8.507 }
//   ]
//   USA: [
//     { country: 'United states', code: 'USA', year: 2000, volume: 6.507 }
//   ]
// }
// into 
// [
//   { country: 'Netherlands', code: 'NLD', volume: 7.507 },
//   { country: 'United states', code: 'USA', volume: 6.507 }
// ]
const averageWaterUsage = entries => {
  // convert Object to [key, value] representation
  return Object.entries(entries)
    // map over the keys of the object
    .map(([k, v]) => {
      // sum the total water per year withdrawals for a country
      const sum = v.reduce((acc, value) => acc + value.volume, 0)
      // calculate the average water usage for the country k
      const average = sum / v.length
      // get the full country name 
      const country = v[0].country
      // return new representation of water usage
      return {
        country: country,
        code: k,
        volume: average
      }
    })
}

export { groupByCountryCode, averageWaterUsage }
import { filterCountries } from './FilterList'

const countries = [
  {
    country: 'Vietnam',
    code: 'VNM',
    year: 2005,
    volume: 81.86
  },
  {
    country: 'Yemen',
    code: 'YEM',
    year: 2005,
    volume: 3.54
  },
  {
    country: 'Zambia',
    code: 'ZMB',
    year: 1992,
    volume: 1.747
  },
  {
    country: 'Zimbabwe',
    code: 'ZWE',
    year: 1987,
    volume: 1.22
  }
]


describe("filter countries tests", () => {
  it("filter vietnam test", () => {
    // Vietnam
    const expected = [countries[0]]
    const actual = filterCountries("Vietnam", countries)

    expect(actual).toEqual(expect.arrayContaining(expected))
    expect(actual.length).toBe(expected.length)
  })

  it("filter z test", () => {
    // Zambia, Zimbabwe
    const expected = [countries[2], countries[3]]
    const actual = filterCountries("z", countries)

    expect(actual).toEqual(expect.arrayContaining(expected))
    expect(actual.length).toBe(expected.length)
  })

  it("filter '' test", () => {
    // Vietnam, Yemen, Zambia, Zimbabwe
    const expected = [...countries]
    const actual = filterCountries("", countries)

    expect(actual).toEqual(expect.arrayContaining(expected))
    expect(actual.length).toBe(expected.length)
  })
})


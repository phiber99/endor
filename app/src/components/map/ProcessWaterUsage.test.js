import { groupByCountryCode, averageWaterUsage } from './ProcessWaterUsage'

const countries = [
  {
    country: 'Netherlands',
    code: 'NLD',
    year: 1996,
    volume: 6.507
  },
  {
    country: 'Netherlands',
    code: 'NLD',
    year: 1997,
    volume: 8.507
  },
  {
    country: 'United states',
    code: 'USA',
    year: 2000,
    volume: 6.507
  }
]


describe("process water usage tests", () => {
  it("group by country code test", () => {
    const expected = {
      NLD: [
        {
          "country": "Netherlands",
          "code": "NLD",
          "year": 1996,
          "volume": 6.507
        },
        {
          "country": "Netherlands",
          "code": "NLD",
          "year": 1997,
          "volume": 8.507
        }
      ],
      USA: [
        {
          "country": "United states",
          "code": "USA",
          "year": 2000,
          "volume": 6.507
        }
      ]
    }
    const actual = groupByCountryCode(countries)

    expect(actual).toEqual(expected)
  })

  it("average water usage", () => {
    const expected = [
      {
        country: "Netherlands",
        code: "NLD",
        volume: 7.507
      },
      {
        country: "United states",
        code: "USA",
        volume: 6.507
      }
    ]

    const grouped = groupByCountryCode(countries)
    const actual = averageWaterUsage(grouped)

    expect(actual).toEqual(expect.arrayContaining(expected))
    expect(actual.length).toBe(expected.length)
  })
})
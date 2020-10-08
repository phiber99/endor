import { sortEntries, getComparator } from './SortEntries'

const unsortedlist = [
  { label: "abc", val: 10, valFloat: 10.7 },
  { label: "az", val: 5, valFloat: 2.11 },
  { label: "a", val: 8, valFloat: 100.28 }
]

describe("sort by label tests", () => {
  it("sort by label ascending", () => {
    const comparator = getComparator('asc', 'label')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].label).toBe("a")
    expect(sortedlist[1].label).toBe("abc")
    expect(sortedlist[2].label).toBe("az")
  })

  it("sort by label descending", () => {
    const comparator = getComparator('desc', 'label')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].label).toBe("az")
    expect(sortedlist[1].label).toBe("abc")
    expect(sortedlist[2].label).toBe("a")
  })
})

describe("sort by value tests", () => {
  it("sort by value ascending", () => {
    const comparator = getComparator('asc', 'val')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].val).toBe(5)
    expect(sortedlist[1].val).toBe(8)
    expect(sortedlist[2].val).toBe(10)
  })

  it("sort by value descending", () => {

    const comparator = getComparator('desc', 'val')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].val).toBe(10)
    expect(sortedlist[1].val).toBe(8)
    expect(sortedlist[2].val).toBe(5)
  })
})

describe("sort by floating point value tests", () => {
  it("sort by floating point value ascending", () => {
    const comparator = getComparator('asc', 'valFloat')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].valFloat).toBe(2.11)
    expect(sortedlist[1].valFloat).toBe(10.7)
    expect(sortedlist[2].valFloat).toBe(100.28)
  })

  it("sort by value descending", () => {

    const comparator = getComparator('desc', 'valFloat')
    const sortedlist = sortEntries(unsortedlist, comparator)

    expect(sortedlist[0].valFloat).toBe(100.28)
    expect(sortedlist[1].valFloat).toBe(10.7)
    expect(sortedlist[2].valFloat).toBe(2.11)
  })
})
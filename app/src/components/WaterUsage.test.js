import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import WaterUsage from './WaterUsage'
import * as waterData from "./waterUsageData";
import userEvent from '@testing-library/user-event'

afterEach(cleanup);

waterData.data = [
  {
    country: "Albania",
    year: 1990,
    volume: 1.2,
  },
  {
    country: "Azerbaijan",
    year: 2012,
    volume: 11.97,
  },
]

it("snapshot test", async () => {
  const { getByTestId, asFragment } = render(<WaterUsage />)

  await act(async () => waitFor(() => expect(getByTestId("water-usage").childElementCount).toBe(2)))

  expect(asFragment()).toMatchSnapshot()
})

describe("filter tests", () => {
  it("filter 'a'", async () => {
    const { asFragment } = render(<WaterUsage />)

    await act(async () => waitFor(() => expect(screen.getByTestId("water-usage").childElementCount).toBe(2)))

    userEvent.type(screen.getByTestId("filter-input").children[1].children[0], "a")
    userEvent.click(screen.getByTestId("filter-button"))

    expect(screen.getByTestId("water-usage").childElementCount).toBe(2)
    expect(asFragment()).toMatchSnapshot()
  })

  it("filter 'alb'", async () => {
    const { asFragment } = render(<WaterUsage />)

    await act(async () => waitFor(() => expect(screen.getByTestId("water-usage").childElementCount).toBe(2)))

    userEvent.type(screen.getByTestId("filter-input").children[1].children[0], "alb")
    userEvent.click(screen.getByTestId("filter-button"))

    expect(screen.getByTestId("water-usage").childElementCount).toBe(1)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("order tests", () => {
  it("order by country descending", async () => {
    const { asFragment } = render(<WaterUsage />)

    await act(async () => waitFor(() => expect(screen.getByTestId("water-usage").childElementCount).toBe(2)))

    userEvent.click(screen.getByRole("button", { name: "Country" }))

    expect(asFragment()).toMatchSnapshot()
  })

  it("order by year ascending", async () => {
    const { asFragment } = render(<WaterUsage />)

    await act(async () => waitFor(() => expect(screen.getByTestId("water-usage").childElementCount).toBe(2)))

    userEvent.click(screen.getByTestId("filter-button"))

    userEvent.click(screen.getByRole("button", { name: "Year" }))

    expect(asFragment()).toMatchSnapshot()
  })
})
import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import WaterUsage from './WaterUsage'
import * as waterData from "./waterUsageData";

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


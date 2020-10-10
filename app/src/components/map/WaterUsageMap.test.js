import React from "react"
import WorldMap from './WaterUsageMap'
import { render, cleanup, act } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import { data } from '../waterUsageData'

afterEach(cleanup);

it("snapshot test", async () => {
  const { getByTestId, asFragment } = render(<WorldMap data={data} />)

  await act(async () => waitFor(() => getByTestId("water-usage-map")))

  expect(asFragment()).toMatchSnapshot()
})
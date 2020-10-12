import React from "react"
import { render, cleanup, act } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import { data } from '../waterUsageData'
import WaterUsageMap from "./WaterUsageMap"

afterEach(cleanup);

it("snapshot test", async () => {
  const { getByTestId, asFragment } = render(<WaterUsageMap data={data} />)

  await act(async () => waitFor(() => getByTestId("water-usage-map")))

  expect(asFragment()).toMatchSnapshot()
})
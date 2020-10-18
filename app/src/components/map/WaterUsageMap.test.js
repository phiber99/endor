import React from "react"
import { render, cleanup, act } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import { data } from '../waterUsageData'
import { WaterUsageMap } from "./WaterUsageMap"

afterEach(cleanup);

it("snapshot test", async () => {
  const { getByTestId } = render(<WaterUsageMap data={data} />)

  await act(async () => waitFor(() => expect(getByTestId("water-usage-map").childElementCount).toBe(177)))
})
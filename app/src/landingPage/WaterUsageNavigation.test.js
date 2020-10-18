import { waitFor } from "@testing-library/dom";
import { act, cleanup, render } from "@testing-library/react";
import React from "react";
import WaterUsageNavigation from './WaterUsageNavigation'

afterEach(cleanup);


describe("Snapshot tests", () => {
  it("test styles", async () => {
    const { getByTestId, asFragment } = render(<WaterUsageNavigation />);
    await act(async () => waitFor(() => getByTestId("water-preview")));
    expect(asFragment()).toMatchSnapshot();
  });
});
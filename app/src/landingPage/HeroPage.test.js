import React from "react"
import { render, cleanup, act } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import HeroPage from "./HeroPage"

afterEach(cleanup);

it("snapshot test", async () => {
    const { getByTestId, asFragment } = render(<HeroPage onHeightChanged={jest.fn(() => {})} />)
  
    await act(async () => waitFor(() => getByTestId("heropage")))
  
    expect(asFragment()).toMatchSnapshot()
  })
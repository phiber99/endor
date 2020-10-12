import React from "react";
import { render, cleanup } from "@testing-library/react";
import Quiz from "./quiz";

afterEach(cleanup);

it("snapshot test", () => {
   const { asFragment } = render(<Quiz />)
 
   expect(asFragment()).toMatchSnapshot()
})

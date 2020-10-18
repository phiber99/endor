import { cleanup, render } from "@testing-library/react";
import React from "react";
import Quiz from './Quiz';

afterEach(cleanup);

it("snapshot test", () => {
   const { asFragment } = render(<Quiz />)
 
   expect(asFragment()).toMatchSnapshot()
})

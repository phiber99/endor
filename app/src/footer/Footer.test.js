import React from "react";
import { render, cleanup } from '@testing-library/react'

import Footer from "./Footer";

afterEach(cleanup);

it('snapshot test of page', () => {

  const { asFragment } = render(
    <Footer />
  )

  expect(asFragment()).toMatchSnapshot()
});
import React from "react";
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from "./Header";
import { MemoryRouter, Route } from "react-router-dom";

afterEach(cleanup);

const menuItems = [
  {
    key: 1,
    title: "Home",
    pageURL: "/"
  },
  {
    key: 2,
    title: "About",
    pageURL: "/about"
  }
];


it('navigate to page', () => {
  let history_, location_

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header menuItems={menuItems} />
      <Route
        path="*"
        render={({ history, location }) => {
          history_ = history;
          location_ = location;
          return null;
        }}
      />
    </MemoryRouter>
  )

  expect(location_.pathname).toBe("/")

  const aboutButtton = screen.getByText("About")

  userEvent.click(aboutButtton)

  expect(location_.pathname).toBe("/about")
});

it('snapshot test of page', () => {

  const { asFragment } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Header menuItems={menuItems} />
    </MemoryRouter>
  )

  expect(asFragment()).toMatchSnapshot()
});

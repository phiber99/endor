import React from "react";
import { render, screen, cleanup, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/dom"
import Landingheader from "./Landingheader";
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
      <Landingheader menuItems={menuItems} heroHeight={200} />
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

it('snapshot test of page', async () => {

  const {getByTestId, asFragment} = render(
    <MemoryRouter initialEntries={["/"]}>
      <Landingheader menuItems={menuItems} heroHeight = {200} />
    </MemoryRouter>
  )

  await act(async () => waitFor(() => getByTestId("landingheader")))

  expect(asFragment()).toMatchSnapshot()
});

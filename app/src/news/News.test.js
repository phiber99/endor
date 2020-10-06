import { waitFor } from "@testing-library/dom";
import { act, cleanup, render, screen } from "@testing-library/react";
import React from "react";
import defaultWaterPicture from "../../public/pictures/defaultWaterPicture.jpg";
import * as reddit from "./FetchReddit";
import News from "./News";
import NewsCard from "./NewsCard";

afterEach(cleanup);

reddit.fetchNews = jest.fn(() => [
  {
    title: "Title!",
    thumbnail: defaultWaterPicture,
    url: "testing",
  },
  {
    title: "Title 2!",
    thumbnail:
      "https://b.thumbs.redditmedia.com/M56Fqi-q0KlTlIlAFiHUG3fYaU1nGrWFMVnXvSy1Msc.jpg",
    url: "blabla",
  },
  {
    title: "water",
    thumbnail: defaultWaterPicture,
    url: "testUrl2",
  },
  {
    title: "water",
    thumbnail: defaultWaterPicture,
    url: "testUrl2",
  },
]);
describe("Snapshot tests", () => {
  it("test styles", async () => {
    const { getByTestId, asFragment } = render(<News />);
    await act(async () => waitFor(() => getByTestId("news")));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Title tests", () => {
  it("test title 1", async () => {
    await act(async () => render(<News />));
    expect(screen.getByText("water")).toBeInTheDocument();
  });
});

describe("Thumbnail tests", () => {
  it("displays the correct external picture", () => {
    const { container } = render(
      <NewsCard thumbnail="https://b.thumbs.redditmedia.com/M56Fqi-q0KlTlIlAFiHUG3fYaU1nGrWFMVnXvSy1Msc.jpg" />
    );
    expect(container.querySelector("button > img").src).toBe(
      "https://b.thumbs.redditmedia.com/M56Fqi-q0KlTlIlAFiHUG3fYaU1nGrWFMVnXvSy1Msc.jpg"
    );
  });

  it('displays the default picture when thumbnail is "default"', () => {
    const { container } = render(<NewsCard thumbnail="default" />);
    expect(container.querySelector("button > img").src).toBe(
      "http://localhost/pictures/defaultWaterPicture.jpg"
    );
  });

  it("displays the default picture when empty thumbnail", () => {
    const { container } = render(<NewsCard thumbnail="" />);
    expect(container.querySelector("button > img").src).toBe(
      "http://localhost/pictures/defaultWaterPicture.jpg"
    );
  });

  it("displays the default picture when no thumbnail", () => {
    const { container } = render(<NewsCard />);
    expect(container.querySelector("button > img").src).toBe(
      "http://localhost/pictures/defaultWaterPicture.jpg"
    );
  });
});

describe("Filter & removeDupes", () => {
  it("removes irrelevant news", async () => {
    await act(async () => render(<News />));
    expect(screen.getByTestId("news").childElementCount).toBe(1);
  });
});

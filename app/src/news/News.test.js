import React from "react";
import { render, cleanup, screen, act } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import News from "./News";
import NewsCard from "./NewsCard";
import * as reddit from "./FetchReddit";
import defaultWaterPicture from "../../public/pictures/defaultWaterPicture.jpg";

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
    expect(screen.getByText("Title!")).toBeInTheDocument();
  });

  it("test title 2", async () => {
    await act(async () => render(<News />));
    expect(screen.getByText("Title 2!")).toBeInTheDocument();
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

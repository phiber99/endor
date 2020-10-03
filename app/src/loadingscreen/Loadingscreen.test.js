import { cleanup, render } from "@testing-library/react";
import React from "react";
import LoadingScreen from "./Loadingscreen";
import * as quotes from "./waterQuotes";


// Change to only 1 quote with 1 author so that
// the snapshot will always match
quotes.quotes = [
    ["quote text", "author"]
]

afterEach(cleanup);

describe("Snapshot tests", () => {
    it("check appearance", () => {
        const { asFragment } = render(<LoadingScreen />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Check that stuff appears", () => {
    it("author appears", async () => {
        const { getByTestId } = render(<LoadingScreen />);
        expect(getByTestId("author")).toBeInTheDocument();
    });
    it("quote appears", () => {
        const { getByTestId } = render(<LoadingScreen />);
        expect(getByTestId("quote")).toBeInTheDocument();
    });
    it("loading screen appears", () => {
        const { getByTestId } = render(<LoadingScreen />);
        expect(getByTestId("loadingindicator")).toBeInTheDocument();
    });
});
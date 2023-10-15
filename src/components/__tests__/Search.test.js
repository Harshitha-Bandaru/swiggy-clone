import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  //fetch returns us a readable stream.
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
  // const searchButton = body.getByTestId("search");
  // console.log(searchButton);
  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);
  // expect(shimmer).toBeInTheDocument();
  // expect(shimmer.children).toBeInTheDocument(); // You will get an array of div's
  expect(shimmer.children.length).toBe(12);
});

test("Restuarants list should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(9);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const searchBtn = body.getByTestId("search-btn");
  const input = body.getByTestId("input-btn");
  fireEvent.change(input, {
    target: {
      value: "dosa",
    },
  });
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(0);
});

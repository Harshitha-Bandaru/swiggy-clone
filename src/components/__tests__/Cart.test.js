import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
import { resMenuData } from "../../mocks/resMenuData";
import { fireEvent, render, waitFor } from "@testing-library/react";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      Promise.resolve(resMenuData);
    },
  });
});

test("Restaurant Menu shimmer should get loaded", () => {
  const resMenuPage = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  console.log(resMenuPage);
  const shimmerMenu = resMenuPage.getByTestId("shimmer-menu");
  expect(shimmerMenu.children.length).toBe(5);
});

test("Add should get added to cart when clicked on Add Button", async () => {
  const resMenuPage = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  console.log(resMenuPage);
  await waitFor(() => expect(resMenuPage.getByTestId("res-menu")));
  const addButton = resMenuPage.getAllByTestId("add-btn");
  fireEvent.click(addButton);
  const cart = resMenuPage.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 1");
});

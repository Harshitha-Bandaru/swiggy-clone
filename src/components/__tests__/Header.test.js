import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header.", () => {
  // Load the Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  // Check if logo is present or not
  const logo = header.getAllByTestId("logo"); //getAll returns an array, so beware
  console.log(logo[0]);
  //console.log(logo.innerHTML);
  expect(logo[0].src).toBe("http://localhost/dummyImage.png");
});

// Check if cart is empty or not
test("Logo should load on rendering header.", () => {
  // Load the Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  // A small hack, just misspell the data-testid and you'll be able to see, what it is rendering, for debugging things
  // const cart = header.getByTestId("cart1");
  const cart = header.getByTestId("cart");
  console.log(cart);
  console.log(cart.innerHTML);
  expect(cart.innerHTML).toBe("Cart - 0");
});

test("Default online status should be online", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  const onlineStatus = header.getByTestId("online-status");
  console.log(onlineStatus);
  console.log(onlineStatus.innerHTML, onlineStatus.children);
});
// The testcases will be executed in jsdom
// There was another render in App.js which is used to render in browser
// For Header,
// 1. Logo should be rendered each time
// 2. Cart has to be empty-0
// 3. Default status should be online

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Profile from "./components/Profile.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";

// import Instamart from "./components/Instamart.js";

// upon onDemandLoading -> upon render -> react suspends the operation
const Instamart = lazy(() => import("./components/Instamart"));

//named import
//import { Title } from "./components/Header.js";
// import A from "../dummy";
/*Header
    Logo
    navbar
  Body
    Restaurant Cards
        -Image
        - Name
        - Rating
        - Cuisine
  Footer
    About us
    Contact links
    */

const styleObj = {
  backgroundColor: "red",
};

const AppLayout = () => {
  const [user, setUser] = useState({
    userName: "Harshitha Bandaru",
    userEmail: "harshitha4547@gmail.com",
  });
  //say, some API call is made here to fetch user data here.
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
        {/* <A /> */}
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
//To render according to path, we pass the routing config
root.render(<RouterProvider router={appRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Profile from "./components/Profile.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";

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

const AppLayout = () => (
  <>
    <Header />
    {/* <Body /> */}
    <Outlet />
    <Footer />
    {/* <A /> */}
  </>
);

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
//To render according to path, we pass the routing config
root.render(<RouterProvider router={appRouter} />);
